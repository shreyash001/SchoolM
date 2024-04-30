
import React from "react";
import { View, Text, Button, Image, InputIcon, SearchIcon, InputField, Input } from "@gluestack-ui/themed";
import { ButtonText } from "@gluestack-ui/themed";
import { CalendarDaysIcon } from "@gluestack-ui/themed";
import { Icon } from "@gluestack-ui/themed";
import FeePayment from "../imgs/fee-payment.png"
import { InputSlot } from "@gluestack-ui/themed";
const HomePage = () =>{
    
  return(


    <View style={{ marginRight:50, marginTop:30, }}>
      <Input style={{alignItems:"center"}}>
  <InputSlot pl="$3">
    <InputIcon as={SearchIcon} />
  </InputSlot>
  <InputField placeholder="Search..." />
</Input>

<View style={{flexDirection:"row" , gap:10, }}>
  <View>
  <Button variant="solid" mt="$2" class="my-button">
  <Image source={FeePayment}/>
  </Button>
  <Text>Fee Payment</Text>
  </View>

  <Button variant="solid" mt="$2">
    <ButtonText>Fee Detail</ButtonText>
  </Button>
  <Button variant="solid" mt="$2">
    
  <Icon as={CalendarDaysIcon}  size="md" />
    <ButtonText>Exam Schedule</ButtonText>
  </Button>
  <Button variant="solid" mt="$2">
    <ButtonText>Exam Report</ButtonText>
  </Button>
</View>


<View style={{flexDirection:"row" ,height:100, width:100, gap:10}}>
<Button variant="solid" mt="$2">
    <ButtonText>Help</ButtonText>
  </Button>
  <Button variant="solid" mt="$2">
    <ButtonText>Transport</ButtonText>
  </Button>
  <Button variant="solid" mt="$2">
    <ButtonText>Attendence</ButtonText>
  </Button>
  <Button variant="solid" mt="$2">
    <ButtonText>Leave</ButtonText>
  </Button>
</View>

<View style={{flexDirection:"row" ,height:100, width:100, gap:10}}>
<Button variant="solid" mt="$2">
    <ButtonText>Birthday</ButtonText>
  </Button>
  <Button variant="solid" mt="$2">
    <ButtonText>Message</ButtonText>
  </Button>
  <Button variant="solid" mt="$2">
    <ButtonText>My Profile</ButtonText>
  </Button>
  <Button variant="solid" mt="$2">
    <ButtonText>Request</ButtonText>
  </Button>
</View>

<View style={{flexDirection:"row" ,height:100, width:100, gap:10}}>
<Button variant="solid" mt="$2">
    <ButtonText>Result</ButtonText>
  </Button>
  <Button variant="solid" mt="$2">
    <ButtonText>Syllabus</ButtonText>
  </Button>
  <Button variant="solid" mt="$2">
    <ButtonText>Timetable</ButtonText>
  </Button>
  <Button variant="solid" mt="$2">
    <ButtonText>My Teacher</ButtonText>
  </Button>
</View>

<View style={{flexDirection:"row" ,height:100, width:100, gap:10}}>
<Button variant="solid" mt="$2">
    <ButtonText>Homework</ButtonText>
  </Button>
  <Button variant="solid" mt="$2">
    <ButtonText>Project</ButtonText>
  </Button>
  <Button variant="solid" mt="$2">
    <ButtonText>Activity</ButtonText>
  </Button>

</View>



   
    </View>
   
  )
}
export default HomePage;