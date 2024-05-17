
import { ChevronUpIcon, ChevronDownIcon } from "@gluestack-ui/themed";
import { AccordionContentText } from "@gluestack-ui/themed";
import { AccordionContent } from "@gluestack-ui/themed";
import { ScrollView, Accordion, AccordionItem, AccordionHeader, AccordionTrigger, AccordionIcon, AccordionTitleText } from "@gluestack-ui/themed";
import React from "react";

const Faq = () => {
    return (

        <ScrollView>
            <Accordion m="$5" width="90%" size="md" variant="filled" type="single" isCollapsible={true} isDisabled={false} >
                <AccordionItem value="a">
                    <AccordionHeader>
                        <AccordionTrigger>
                            {({ isExpanded }) => {
                                return (
                                    <>
                                        <AccordionTitleText>
                                            How do I download the school app?
                                        </AccordionTitleText>
                                        {isExpanded ? (
                                            <AccordionIcon as={ChevronUpIcon} ml="$3" />
                                        ) : (
                                            <AccordionIcon as={ChevronDownIcon} ml="$3" />
                                        )}
                                    </>
                                );
                            }}
                        </AccordionTrigger>
                    </AccordionHeader>
                    <AccordionContent>
                        <AccordionContentText>
                            You can download the school app from the App Store
                            (for iOS) or Google Play Store (for Android) by searching for [insert app name].
                        </AccordionContentText>
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="b">
                    <AccordionHeader>
                        <AccordionTrigger>
                            {({ isExpanded }) => {
                                return (
                                    <>
                                        <AccordionTitleText>
                                            How do I log in to the school app?
                                        </AccordionTitleText>
                                        {isExpanded ? (
                                            <AccordionIcon as={ChevronUpIcon} ml="$3" />
                                        ) : (
                                            <AccordionIcon as={ChevronDownIcon} ml="$3" />
                                        )}
                                    </>
                                );
                            }}
                        </AccordionTrigger>
                    </AccordionHeader>
                    <AccordionContent>
                        <AccordionContentText>
                            You can log in to the school app using your student ID and password provided by the school
                        </AccordionContentText>
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="b">
                    <AccordionHeader>
                        <AccordionTrigger>
                            {({ isExpanded }) => {
                                return (
                                    <>
                                        <AccordionTitleText>
                                            Can I receive notifications from the school app?
                                        </AccordionTitleText>
                                        {isExpanded ? (
                                            <AccordionIcon as={ChevronUpIcon} ml="$3" />
                                        ) : (
                                            <AccordionIcon as={ChevronDownIcon} ml="$3" />
                                        )}
                                    </>
                                );
                            }}
                        </AccordionTrigger>
                    </AccordionHeader>
                    <AccordionContent>
                        <AccordionContentText>
                            Yes, you can receive notifications from the school app for important announcements, events, and updates.
                        </AccordionContentText>
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="b">
                    <AccordionHeader>
                        <AccordionTrigger>
                            {({ isExpanded }) => {
                                return (
                                    <>
                                        <AccordionTitleText>
                                            How do I update my profile information on the school app?
                                        </AccordionTitleText>
                                        {isExpanded ? (
                                            <AccordionIcon as={ChevronUpIcon} ml="$3" />
                                        ) : (
                                            <AccordionIcon as={ChevronDownIcon} ml="$3" />
                                        )}
                                    </>
                                );
                            }}
                        </AccordionTrigger>
                    </AccordionHeader>
                    <AccordionContent>
                        <AccordionContentText>
                            You can update your profile information on the school app by going to the settings or profile section and editing your details.
                        </AccordionContentText>
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="b">
                    <AccordionHeader>
                        <AccordionTrigger>
                            {({ isExpanded }) => {
                                return (
                                    <>
                                        <AccordionTitleText>
                                            Is there a calendar feature on the school app?
                                        </AccordionTitleText>
                                        {isExpanded ? (
                                            <AccordionIcon as={ChevronUpIcon} ml="$3" />
                                        ) : (
                                            <AccordionIcon as={ChevronDownIcon} ml="$3" />
                                        )}
                                    </>
                                );
                            }}
                        </AccordionTrigger>
                    </AccordionHeader>
                    <AccordionContent>
                        <AccordionContentText>
                            Yes, the school app has a calendar feature that displays important school events, holidays, and deadlines.
                        </AccordionContentText>
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="b">
                    <AccordionHeader>
                        <AccordionTrigger>
                            {({ isExpanded }) => {
                                return (
                                    <>
                                        <AccordionTitleText>
                                            How can I access my class schedule on the school app?
                                        </AccordionTitleText>
                                        {isExpanded ? (
                                            <AccordionIcon as={ChevronUpIcon} ml="$3" />
                                        ) : (
                                            <AccordionIcon as={ChevronDownIcon} ml="$3" />
                                        )}
                                    </>
                                );
                            }}
                        </AccordionTrigger>
                    </AccordionHeader>
                    <AccordionContent>
                        <AccordionContentText>
                            You can access your class schedule on the school app by navigating to the schedule or timetable section.
                        </AccordionContentText>
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="b">
                    <AccordionHeader>
                        <AccordionTrigger>
                            {({ isExpanded }) => {
                                return (
                                    <>
                                        <AccordionTitleText>
                                            Can I submit assignments or homework through the school app?
                                        </AccordionTitleText>
                                        {isExpanded ? (
                                            <AccordionIcon as={ChevronUpIcon} ml="$3" />
                                        ) : (
                                            <AccordionIcon as={ChevronDownIcon} ml="$3" />
                                        )}
                                    </>
                                );
                            }}
                        </AccordionTrigger>
                    </AccordionHeader>
                    <AccordionContent>
                        <AccordionContentText>
                            Some school apps may have a feature that allows students to
                            submit assignments or homework electronically. Check with your teachers or school administrators for more information.
                        </AccordionContentText>
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="b">
                    <AccordionHeader>
                        <AccordionTrigger>
                            {({ isExpanded }) => {
                                return (
                                    <>
                                        <AccordionTitleText>
                                            Is there a chat or messaging feature on the school app to communicate with teachers or classmates?
                                        </AccordionTitleText>
                                        {isExpanded ? (
                                            <AccordionIcon as={ChevronUpIcon} ml="$3" />
                                        ) : (
                                            <AccordionIcon as={ChevronDownIcon} ml="$3" />
                                        )}
                                    </>
                                );
                            }}
                        </AccordionTrigger>
                    </AccordionHeader>
                    <AccordionContent>
                        <AccordionContentText>
                            Some school apps may have a chat or messaging feature for communication. Check with your school to see if this feature is available.
                        </AccordionContentText>
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="b">
                    <AccordionHeader>
                        <AccordionTrigger>
                            {({ isExpanded }) => {
                                return (
                                    <>
                                        <AccordionTitleText>
                                            How do I report technical issues or bugs with the school app?
                                        </AccordionTitleText>
                                        {isExpanded ? (
                                            <AccordionIcon as={ChevronUpIcon} ml="$3" />
                                        ) : (
                                            <AccordionIcon as={ChevronDownIcon} ml="$3" />
                                        )}
                                    </>
                                );
                            }}
                        </AccordionTrigger>
                    </AccordionHeader>
                    <AccordionContent>
                        <AccordionContentText>
                            You can report technical issues or bugs with the school app by contacting the app support team or IT department at the school.
                        </AccordionContentText>
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="b">
                    <AccordionHeader>
                        <AccordionTrigger>
                            {({ isExpanded }) => {
                                return (
                                    <>
                                        <AccordionTitleText>
                                            Can parents or guardians also use the school app to stay updated on their child's progress?
                                        </AccordionTitleText>
                                        {isExpanded ? (
                                            <AccordionIcon as={ChevronUpIcon} ml="$3" />
                                        ) : (
                                            <AccordionIcon as={ChevronDownIcon} ml="$3" />
                                        )}
                                    </>
                                );
                            }}
                        </AccordionTrigger>
                    </AccordionHeader>
                    <AccordionContent>
                        <AccordionContentText>
                            Yes, parents or guardians can usually download a separate version of the school
                            app or access a parent portal to stay updated on their child's progress, attendance, and school information.
                        </AccordionContentText>
                    </AccordionContent>
                </AccordionItem>
            </Accordion>


        </ScrollView>
    )
}
export default Faq