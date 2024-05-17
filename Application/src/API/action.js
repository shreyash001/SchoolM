const { userLoginApi } = require(".")

export const userLoginAction = async (data) => {
    requestData = {
        "userId": data.userId,
        "userCCode": data.userCCode,
        "userPassword": data.userPassword
    }
    try {
        let responce = await userLoginApi(requestData)
        if (responce.code === "SUCCESS") {
            return responce.data
        }
    } catch (error) {
        console.log("Error in api Action")
    }
    
}
