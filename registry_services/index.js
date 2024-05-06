
const dotenv = require("dotenv");
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");


dotenv.config();

// const databaseConnection = require("./utils/database.js");
const user = require("./routes/user.route.js");

const app = express();

const SERVER_PORT = process.env.SERVER_PORT || 8082;

let corsOptions = {
    origin: "http://localhost:8082",
    methods: ["GET", "PUT", "POST", "PATCH", "DELETE", "OPTIONS"],
    optionsSuccessStatus: 200,
    credentials: true,
    allowedHeaders: [
        "Content-Type",
        "Authorization",
        "X-Requested-With",
        "device-remember-token",
        "Access-Control-Allow-Origin",
        "Origin",
        "Accept",
    ],
};

morgan.token("body", (req) => {
    return JSON.stringify(req.body);
});
morgan.token("req-headers", function (req, res) {
    return JSON.stringify(req.headers);
});

app.use(morgan(":method :url :status :body :req-headers"));

app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(cors(corsOptions));

app.use("/user", user);

app.listen(SERVER_PORT, async () => {
    try {
        // await databaseConnection.open();
        console.log("Database Connected");
        console.log(`App running on port ${SERVER_PORT}`);
    } catch (error) {
        console.error("Error connecting to database:", error.message);
    }
});
