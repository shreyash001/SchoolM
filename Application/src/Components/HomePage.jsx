
import React from "react";
import { View, Text, Button, Image, InputIcon, SearchIcon, InputField, Input, HStack, Box, ScrollView } from "@gluestack-ui/themed";
import { ButtonText } from "@gluestack-ui/themed";
import { CalendarDaysIcon } from "@gluestack-ui/themed";
import { Icon } from "@gluestack-ui/themed";
import FeePayment from "../imgs/fee-payment.png"
import { InputSlot } from "@gluestack-ui/themed";
import FeeDetail from "../imgs/fee-detail.png";
import Leave from "../imgs/leaves.png";
import Birthday from "../imgs/birthday.png"
import Exam from "../imgs/exam-shedule.png"
import Teacher from "../imgs/teacher.png"
import Message from "../imgs/message.png"
import Syllabus from "../imgs/syllabus.png"
import Help from "../imgs/help.png"
import Request from "../imgs/request.png"
import Transport from "../imgs/transport.png"
import Profile from "../imgs/profile.png"
import Timetable from "../imgs/timetable.png"
import Result from "../imgs/result.png"
import Attendence from "../imgs/attendance.png"
import Project from "../imgs/project.png"
import Activity from "../imgs/activity.png"
import Homework from "../imgs/homework.png"
import Report from "../imgs/report.png"
const HomePage = () => {

  return (



< ScrollView>

    <View style={{ marginTop: 30 }}>

      {/* -------------------------------Search------------------------------ */}
      <Input style={{ alignItems: "center" }}>
        <InputSlot pl="$3" >
          <InputIcon as={SearchIcon} />
        </InputSlot>
        <InputField placeholder="Search..." />
      </Input>






{/* --------------------------------Row1--------------------------------- */}

      <HStack space="md" reversed={false} marginTop="$10">
        <View>
          <Button variant="solid" mt="$2" bgColor="transparent">
            <Image source={FeePayment} alt="fee payment"/>
          </Button>
          <Text  mt="$5" ml="$5">Fee Payment</Text>
        </View>


        <View>
          <Button variant="solid" mt="$2" bgColor="transparent">
            <Image source={FeeDetail} alt="fee detail"/>
          </Button>
          <Text  mt="$5" ml="$5">Fee Detail</Text>
        </View>


       <View>
          <Button variant="solid" mt="$2" bgColor="transparent">
            <Image source={Help} alt="help" />
          </Button>
          <Text  mt="$5" ml="$8">Help</Text>
        </View> 


      </HStack>
{/* -------------------------------------------Row1 ended-------------------------- */}


{/* --------------------------------------Row2-------------------------------- */}

      <HStack space="md" reversed={false} marginTop="$10" alignContent="center">

       <View>
          <Button variant="solid" mt="$2" bgColor="transparent">
            <Image source={Leave} alt="leave" />
          </Button>
          <Text  mt="$5" ml="$8">Leave</Text>
        </View> 
  <View>
          <Button variant="solid" mt="$2" bgColor="transparent">
            <Image source={Exam} alt="exam"/>
          </Button>
          <Text  mt="$5" >Exam Schedule</Text>
        </View>

         <View>
          <Button variant="solid" mt="$2" bgColor="transparent">
            <Image source={Message} alt="message"/>
          </Button>
          <Text  mt="$5" ml="$6">Message</Text>
        </View>


     

      </HStack>
{/* -------------------------------------------Row2 Ended--------------------------- */}


{/* --------------------------------------------------Row3------------------------------ */}
      <HStack space="md" reversed={false} marginTop="$10" alignItems="center">

        <View>
          <Button variant="solid" mt="$2" bgColor="transparent">
            <Image source={Request} alt="request"/>
          </Button>
          <Text  mt="$5" ml="$8">Request</Text>
        </View>

        <View>
          <Button variant="solid" mt="$2" bgColor="transparent">
            <Image source={Profile} alt="profile"/>
          </Button>
          <Text  mt="$5" ml="$6">My Profile</Text>
        </View>

     
           <View>
          <Button variant="solid" mt="$2" bgColor="transparent">
            <Image source={Transport} alt="transport"/>
          </Button>
          <Text  mt="$5" ml="$6">Transport</Text>
        </View>

      
      </HStack>
{/* ----------------------------------------------Row3 ended-------------------------- */}


{/* ---------------------------------------------Row4---------------------------------- */}
      <HStack space="md" reversed={false} marginTop="$10">

        <View>
          <Button variant="solid" mt="$2" bgColor="transparent">
            <Image source={Timetable} alt="timetable"/>
          </Button>
          <Text  mt="$5" ml="$6">Timetable</Text>
        </View>

        <View>
          <Button variant="solid" mt="$2" bgColor="transparent">
            <Image source={Teacher} alt="teacher"/>
          </Button>
          <Text  mt="$5" ml="$6">My Teacher</Text>
        </View>

        <View>
          <Button variant="solid" mt="$2" bgColor="transparent">
            <Image source={Syllabus} alt="syllabus"/>
          </Button>
          <Text  mt="$5" ml="$6">Syllabus</Text>
        </View>

      </HStack>
{/* -----------------------------------------Row4 Ended--------------------------------- */}


{/* -------------------------------------------------Row5----------------------------------------- */}
      <HStack space="md" reversed={false} marginTop="$10">

        <View>
          <Button variant="solid" mt="$2" bgColor="transparent">
            <Image source={Activity} alt="activity"/>
          </Button>
          <Text  mt="$6" ml="$8">Activity</Text>
        </View>

        <View>
          <Button variant="solid" mt="$2" bgColor="transparent">
            <Image source={Project} alt="project"/>
          </Button>
          <Text  mt="$6" ml="$8">Project</Text>
        </View>

        <View>
          <Button variant="solid" mt="$2" bgColor="transparent">
            <Image source={Homework} alt="homework"/>
          </Button>
          <Text  mt="$5" ml="$5">Homework</Text>
        </View>
      </HStack>
{/* --------------------------------------------------------Row5 Ended----------------------------------- */}


{/* ----------------------------------------------------------------Row6------------------------------------- */}
      <HStack space="md" reversed={false} marginTop="$10">

        <View>
          <Button variant="solid" mt="$2" bgColor="transparent">
            <Image source={Attendence} alt="attendence" />
          </Button>
          <Text  mt="$5" ml="$8">Attendence</Text>
        </View>

        <View>
          <Button variant="solid" mt="$2" bgColor="transparent">
            <Image source={Birthday} alt="birthday" />
          </Button>
          <Text  mt="$5" ml="$8">Birthday</Text>
        </View>

        <View>
          <Button variant="solid" mt="$2" bgColor="transparent">
            <Image source={Result} alt="result"/>
          </Button>
          <Text mt="$5" ml="$8" >Result</Text>
        </View>
      </HStack>
{/* -----------------------------------------------Row6 Ended--------------------------------- */}

<HStack space="md" reversed={false} marginTop="$10">

<View>
  <Button variant="solid" mt="$2" bgColor="transparent">
    <Image source={Report} alt="report"/>
  </Button>
  <Text  mt="$5" ml="$6">Exam Report</Text>
</View>
</HStack>

    </View>
    </ScrollView>
  )
}
export default HomePage;