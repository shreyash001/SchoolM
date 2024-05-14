import { Box, Center, HStack } from "@gluestack-ui/themed";
import { Text, View } from "@gluestack-ui/themed";
import React from "react";
import Images from "../imgs/profile.png"
import { Image } from "@gluestack-ui/themed";


const ProfilePage = () => {
    return (
        <View >
            <Center backgroundColor="gray" shadowColor="black" pb="$10" mt="$5" mx="$5" >
                <Text size="xl" fontWeight="$bold" mt="$10" textDecorationLine="underline" color="white"> Siddhi</Text>
                <Text mt="$5" color="white"> Class: 10-A</Text>
                <Text size="l" fontWeight="$bold" mt="$5" textDecorationLine="underline" color="white"> Authorized Pickup Details</Text>

            </Center>
            <Center>
                <Image source={Images} mt="-$5" alt="image" />
            </Center>

            <HStack space="xxl" mx="$10" mt="$10">
                <Box>
                    <Text mb="$5">Adm No.</Text>
                    <Text mb="$5">Roll No.</Text>
                    <Text mb="$5">Father</Text>
                    <Text mb="$5">Mother</Text>
                    <Text mb="$5">Address</Text>
                    <Text mb="$5">Date of Birth</Text>
                    <Text mb="$5">Father No.</Text>
                    <Text mb="$5">Mother No.</Text>

                </Box>
                <Box>
                    <Text mx="$20" mb="$5">887847</Text>
                    <Text mx="$20" mb="$5">28</Text>
                    <Text mx="$20" mb="$5">Sunil kumar</Text>
                    <Text mx="$20" mb="$5">Sunayana </Text>
                    <Text mx="$20" mb="$5">hashajsh</Text>
                    <Text mx="$20" mb="$5">30-07-2010</Text>
                    <Text mx="$20" mb="$5">167637336</Text>
                    <Text mx="$20" mb="$5">72367327</Text>
                </Box>
            </HStack>


        </View>
    )
}

export default ProfilePage;