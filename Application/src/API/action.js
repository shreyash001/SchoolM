const { userLoginApi } = require(".")

export const userLoginAction = async (data) => {
    requestData = {
        "userId": data.userId,
        "userCCode": data.userCCode,
        "userPassword": data.userPassword
    }
    let responce = await userLoginApi(requestData)
    return responce
}
