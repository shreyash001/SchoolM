import React, { useState } from "react";
import { Button, FormControl, Heading, Input, InputIcon, InputSlot, Text, VStack, View, EyeIcon, EyeOffIcon, ButtonText } from "@gluestack-ui/themed";
import { InputField } from "@gluestack-ui/themed";
import ForgotPassword from "../Components/ForgotPassword";
import { userLoginAction } from "../API/action";
import { useDispatch } from "react-redux";
import { setUserData } from "../Reducer/userReducer";


const Login = ({navigation}) => {

    const [showPassword, setShowPassword] = useState(false)
    const [userId, setUserId] = useState("")
    const [cCode, setcCode] = useState("")
    const [password, setPassword] = useState("")

    const dispatch = useDispatch()

    const handleState = () => {
        setShowPassword((showState) => {
            return !showState;
        });
    };

    const handleSubmit = async() => {
        // console.log(userId, cCode, password)
        console.log("Button Clicked")
        data = {
            "userId": userId,
            "userCCode": cCode,
            "userPassword":password
        }
        let response = await userLoginAction(data)
        // console.log(response)
        dispatch(setUserData(response))
        navigation.navigate("BottomNavigation")
    }


    // const handleForgotPassword = () => {
    //     console.log("Forgot Password clicked");
    // };

    return (
        <>

            <View>
                <FormControl
                    p="4"
                    // borderWidth="$1"
                    // borderRadius="$lg"
                    // borderColor="black"
                    // $dark-borderWidth="$1"
                    // $dark-borderRadius="$lg"
                    // $dark-borderColor="$borderDark800"
                    marginTop="20%"
                    marginLeft="10%"
                    marginRight="10%"
                    borderBlockColor="black"

                >
                    <VStack classNme="login" space="xl">
                        <Heading color="blue" lineHeight="$md" classNme="mb-2" textAlign="center" >
                            Login
                        </Heading>
                        <VStack space="xl">
                            <Text color="$black" lineHeight="$xs">
                                User Id
                            </Text>
                            <Input>
                                <InputField type="text" onChangeText={(txt) => { setUserId(txt) }} />
                            </Input>

                        </VStack>

                        <VStack space="xl">
                            <Text color="$black" lineHeight="$xs">
                                C-Code
                            </Text>
                            <Input>
                                <InputField type="text" onChangeText={(code) => { setcCode(code) }}/>
                            </Input>
                        </VStack>
                        <VStack space="xl">
                            <Text color="$black" lineHeight="$xs">
                                Password
                            </Text>
                            <Input textAlign="center" >
                                <InputField type={showPassword ? "text" : "password"} onChangeText={(password) => { setPassword(password) }}/>
                                <InputSlot pr="$3" onPress={() => handleState()}>
                                    <InputIcon
                                        as={showPassword ? EyeIcon : EyeOffIcon}
                                        color="$darkBlue500"
                                    />
                                </InputSlot>
                            </Input>
                            <Button variant="link" onPress={() => (<ForgotPassword />)}>
                                <Text color="gray">Forgot Password?</Text>
                            </Button>
                        </VStack>
                        <Button
                            ml="auto"
                            onPress={() => {
                                handleSubmit()
                            }}
                        >
                            <ButtonText color="$white">Save</ButtonText>
                        </Button>
                    </VStack>
                </FormControl>
            </View>

        </>
    )
}
export default Login;