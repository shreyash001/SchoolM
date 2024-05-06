const databaseConnection = require("../utils/database");
var sql = require("mssql");

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
        if(result.recordset.length === 0){
            return res.status(401).json({message:'User Not Found'})
        }
        else if (result.recordset[0].pwd !== userPassword){
            return res.status(401).json({message:'User Found, Invalid Password'})
        }
        // console.log(result.recordset[0]);
        return res.status(200).json({
            message:'User Found, Authentication Success',
            data:result.recordset[0]
        }); // Return the queried data
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
}

module.exports = {
    userLogin
}
