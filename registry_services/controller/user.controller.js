const databaseConnection = require("../utils/database");
const sql = require("mssql");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const userLogin = async (req, res) => {
  try {
    let { userId, userCCode, userPassword } = req.body;
    const pool = await databaseConnection; // Assuming databaseConnection is a promise resolving to the connection pool
    const request = new sql.Request(pool); // Create a new request from the pool

    // Execute the query with parameters
    const result = await request
      .input("userId", sql.Int, userId)
      .input("userCCode", sql.Int, userCCode).query(`
                    SELECT *
                    FROM mky2020_05042024
                    WHERE IdNo = @userId AND CCode = @userCCode;
                `);
    // console.log(result.recordset)
    if (result.recordset.length === 0) {
      return res
        .status(401)
        .json({ message: "User Not Found", code: "FAILED" });
    } else {
      let password = result.recordset[0].pwd;
      let token = jwt.sign({ userId: result.recordset[0].userId }, "manuj", {
        expiresIn: "1h",
      });
      if (password === userPassword) {
        return res.status(200).json({
          message: "User Found, Authentication Success",
          code: "SUCCESS",
          data: result.recordset[0],
          token: token,
        });
      } else if (password !== userPassword) {
        console.log("Both password are different");
        return res.status(302).json({
          message: "User Found, Authentication Failed",
          code: "FAILED",
        });
      }
    }
    // console.log(result.recordset[0]);
    // close the connection
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ error: "Internal Server Error", code: "FAILED" });
  }
  // finally{
  //     sql.pool.close()
  // }
};

const getAllFees = async (req, res) => {
  let { userId, userCCode } = req.body;

  try {
    const pool = await databaseConnection; // Assuming databaseConnection is a promise resolving to the connection pool
    const request = new sql.Request(pool); // Create a new request from the pool

    // Execute the query with parameters
    const result = await request
      .input("userId", sql.Int, userId)
      .input("userCCode", sql.Int, userCCode).query(`
                    SELECT *
                    FROM FeeTranMaster_05042024
                    WHERE IdNo = @userId AND CCode = @userCCode;
                `);
    // console.log(result.recordset)
    if (result.recordset.length < 1) {
      return res
        .status(401)
        .json({ message: "User Not Found", code: "FAILED" });
    }
     
    return res.status(200).json({
        message: "Fees Details found",
        code: "FEES _DETAIL_FOUND",
        data: result.recordset
    })
  } catch (error) {
    console.log(error)
  }
};

const getAllTeachers = async() => {

}

const updateUserPassword = async (data) => {
  // console.log(data);
  const pool = await databaseConnection;
  const request = new sql.Request(pool);
  const result = await request
    .input("userId", sql.Int, data.userId)
    .input("userCCode", sql.Int, data.userCCode)
    .input("hashedPassword", sql.NChar, data.hash).query(`
            UPDATE mky2020_05042024
            SET pwd = @hashedPassword
            WHERE IdNo = @userId and CCode = @userCCode;
        `);
};

module.exports = {
  userLogin, getAllFees, getAllTeachers
};
