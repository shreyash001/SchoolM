## .Env file configuration
USER
PASSWORD
##### Add these above variables in youur .Env File

#### User Login
api -> http://localhost:8082/user/login
params required => userId, userCCode, userPassword
exapmple => {
    "userId":"22167",
    "userCCode":"102",
    "userPassword":"9899564020"
}
output Success => {
    "message": "User Found, Authentication Success",
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