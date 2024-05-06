const databaseConnection = require("../utils/database");
const sql = require("mssql");
const bcrypt = require('bcrypt');


const userLogin = async (req, res) => {
    try {
        let { userId, userCCode, userPassword } = req.body;
        const pool = await databaseConnection; // Assuming databaseConnection is a promise resolving to the connection pool
        const request = new sql.Request(pool); // Create a new request from the pool

        // Execute the query with parameters
        const result = await request.input('userId', sql.Int, userId)
            .input('userCCode', sql.Int, userCCode)
            .query(`
                    SELECT *
                    FROM mky2020_05042024
                    WHERE IdNo = @userId AND CCode = @userCCode;
                `);
        if (result.recordset.length === 0) {
            return res.status(401).json({ message: 'User Not Found' })
        }
        else {
            let password = result.recordset[0].pwd
            if (password === userPassword) {
                console.log("Both Password is the same")
                bcrypt.genSalt(10, function (err, salt) {
                    if (err) {
                        // Handle error
                        return res.status(500).json({ error: "Internal Server Error, Bcrypt", code: 'FAILED', });
                    }

                    // Hash the password using the generated salt
                    bcrypt.hash(password, salt, function (err, hash) {
                        if (err) {
                            // Handle error
                            return res.status(500).json({ error: "Internal Server Error, Bcrypt", code: 'FAILED', });
                        }
                        // console.log(hash)
                        // Store the hash in your database
                        // updateUserPassword({ userId, userCCode, hash })
                    });
                });
                return res.status(200).json({
                    message: 'User Found, Authentication Success',
                    code: 'SUCCESS',
                    data: result.recordset[0]
                })
            }
            else if (password !== userPassword) {
                console.log("Both password are different")
                bcrypt.compare(userPassword, password, function (err, result) {
                    if (err) {
                        // Handle error
                        return res.status(500).json({ error: "Internal Server Error, Bcrypt", code: 'FAILED', });
                    }

                    if (result) {
                        // Passwords match, authentication successful
                        return res.status(200).json({
                            message: 'User Found, Authentication Success',
                            code: 'SUCCESS',
                            data: result.recordset[0]
                        }); // Return the queried data
                    } else {
                        // Passwords don't match, authentication failed
                        return res.status(401).json({ message: 'User Found, Invalid Password', code: 'FAILED', })
                    }
                });
                
            }
        }
        // console.log(result.recordset[0]);
        // close the connection
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Internal Server Error" });
    } 
    // finally{
    //     sql.pool.close()
    // }
}

const updateUserPassword = async (data) => {
    // console.log(data);
    const pool = await databaseConnection;
    const request = new sql.Request(pool);
    const result = await request.input('userId', sql.Int, data.userId)
        .input('userCCode', sql.Int, data.userCCode)
        .input('hashedPassword', sql.NChar, data.hash)
        .query(`
            UPDATE mky2020_05042024
            SET pwd = @hashedPassword
            WHERE IdNo = @userId and CCode = @userCCode;
        `);
}

module.exports = {
    userLogin
}
