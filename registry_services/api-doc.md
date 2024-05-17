## .Env file configuration
USER
PASSWORD
##### Add these above variables in youur .Env File

#### User Login
api -> http://localhost:8082/user/login
params required => userId, userCCode, userPassword
{
    "userId": "220019",
    "userCCode": "101",
    "userPassword": "9874563210"
}
output Success => {
    "message": "User Found, Authentication Success",
    "data": {
        .....
    },
    token:"..."
}
output Failures => 
{
    "message": "User Found, Invalid Password"
}
{
    "message": "User Not Found"
}

#### Fees details
api -> post http://localhost:8082/user/getAllFees
params required => userId, userCCode
{
    "userId": "220019",
    "userCCode": "101",
    "userPassword": "9874563210"
}
header required => [{"key":"Authorization","value":"Your_Token_Generaed"}]
output Success => {
    "message": "Fees Details found",
    "data": {
        .....
    }
}
output Failures => 
{
    "message": "User Found, Invalid Password"
}
{
    "message": "User Not Found"
}

#### Teachers Details
