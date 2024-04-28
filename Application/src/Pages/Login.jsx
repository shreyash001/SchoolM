import React, { useState } from "react";
import { Button, FormControl, Heading, Input, InputIcon, InputSlot, Text, VStack, View,EyeIcon, EyeOffIcon, ButtonText } from "@gluestack-ui/themed";
import { InputField } from "@gluestack-ui/themed";

const Login = () => {

    // const [showPassword, setShowPassword] = useState(false); 

    const [showPassword, setShowPassword] = useState(false)
    const handleState = () => {
      setShowPassword((showState) => {
        return !showState
      })
    }
    return (
        <>
       
        <View>
            <FormControl
                p="4"
                borderWidth="$1"
                borderRadius="$lg"
                borderColor="$borderLight300"
                $dark-borderWidth="$1"
                $dark-borderRadius="$lg"
                $dark-borderColor="$borderDark800"
            >
                <VStack space="xl">
                    <Heading color="$text900" lineHeight="$md">
                        Login
                    </Heading>
                    <VStack space="xs">
                        <Text color="$text500" lineHeight="$xs">
                            Email
                        </Text>
                        <Input>
                            <InputField type="text" />
                        </Input>
                    </VStack>
                    <VStack space="xs">
                        <Text color="$text500" lineHeight="$xs">
                            Password
                        </Text>
                        <Input textAlign="center">
                            <InputField type={showPassword ? "text" : "password"} />
                            <InputSlot pr="$3">
                                {/* EyeIcon, EyeOffIcon are both imported from 'lucide-react-native' */}
                                <InputIcon
                                    as={showPassword ? EyeIcon : EyeOffIcon}
                                    color="$darkBlue500"
                                />
                            </InputSlot>
                        </Input>
                    </VStack>
                    <Button
                        ml="auto"
                        onPress={() => {
                            // setShowModal(false)
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