import { ButtonIcon, Input, InputField, ModalBody, Text, ArrowLeftIcon, Link } from "@gluestack-ui/themed";
import { Button, ButtonText, Center, Heading, Modal, ModalBackdrop, ModalContent, ModalHeader, VStack,ModalFooter,HStack, } from "@gluestack-ui/themed";
import React, { useState } from "react";

const ForgotPassword = () => {
    const [showModal, setShowModal] = useState(false)
    const [showModal2, setShowModal2] = useState(false)
    const [showModal3, setShowModal3] = useState(false)
    return (
        <Center>
        <Center h={400}>++
          <Button onPress={() => setShowModal(true)}>
            <ButtonText>Forgot password?</ButtonText>
          </Button>
        </Center>
        <Modal
          isOpen={showModal}
          onClose={() => {
            setShowModal(false)
          }}
        >
          <ModalBackdrop />
          <ModalContent>
            <ModalHeader borderBottomWidth="$0">
              <VStack space="sm">
                <Heading size="lg">Forgot password?</Heading>
                <Text size="sm">No worries, we’ll send you reset instructions </Text>
              </VStack>
            </ModalHeader>
            <ModalBody>
              <Input>
                <InputField placeholder="Enter your email" />
              </Input>
            </ModalBody>
            <ModalFooter borderTopWidth="$0">
              <VStack space="lg" w="$full">
                <Button
                  onPress={() => {
                    setShowModal2(true)
                  }}
                >
                  <ButtonText>Submit</ButtonText>
                </Button>
                <HStack>
                  <Button
                    variant="link"
                    size="sm"
                    onPress={() => {
                      setShowModal(false)
                    }}
                  >
                    <ButtonIcon as={ArrowLeftIcon} />
                    <ButtonText>Back to login</ButtonText>
                  </Button>
                </HStack>
              </VStack>
            </ModalFooter>
          </ModalContent>
        </Modal>
        <Modal
          isOpen={showModal2}
          onClose={() => {
            setShowModal2(false)
          }}
        >
          <ModalBackdrop />
          <ModalContent>
            <ModalHeader borderBottomWidth="$0">
              <VStack space="sm">
                <Heading size="lg">Reset password</Heading>
                <Text size="sm">
                  A verification code has been sent to you. Enter code below.
                </Text>
              </VStack>
            </ModalHeader>
            <ModalBody>
              <Input>
                <InputField placeholder="Enter verification code" />
              </Input>
            </ModalBody>
            <ModalFooter borderTopWidth="$0">
              <VStack space="lg" w="$full">
                <Button
                  onPress={() => {
                    setShowModal3(true)
                  }}
                >
                  <ButtonText>Continue</ButtonText>
                </Button>
                <Text size="sm">
                  Didn’t receive the email?
                  <Link ml="$1">
                    <Link.Text
                      size="sm"
                      $dark-color="$textDark200"
                      color="$textLight700"
                      fontWeight="$semibold"
                    >
                      Click to resend
                    </Link.Text>
                  </Link>
                </Text>
                <HStack space="xs" alignItems="center">
                  <Button
                    variant="link"
                    size="sm"
                    onPress={() => {
                      setShowModal2(false)
                    }}
                  >
                    <ButtonIcon as={ArrowLeftIcon} />
                    <ButtonText>Back to login</ButtonText>
                  </Button>
                </HStack>
              </VStack>
            </ModalFooter>
          </ModalContent>
        </Modal>
        <Modal
          isOpen={showModal3}
          onClose={() => {
            setShowModal3(false)
          }}
        >
          <ModalBackdrop />
          <ModalContent>
            <ModalHeader borderBottomWidth="$0">
              <VStack space="sm">
                <Heading size="lg">Set new password</Heading>
                <Text size="sm">
                  Almost done. Enter your new password and you are all set.
                </Text>
              </VStack>
            </ModalHeader>
            <ModalBody>
              <VStack space="xl">
                <Input>
                  <InputField placeholder="New password" />
                </Input>
                <Input>
                  <InputField placeholder="Confirm new password" />
                </Input>
              </VStack>
            </ModalBody>
            <ModalFooter borderTopWidth="$0">
              <VStack space="lg" w="$full">
                <Button
                  onPress={() => {
                    setShowModal(false)
                    setShowModal2(false)
                    setShowModal3(false)
                  }}
                >
                  <ButtonText>Submit</ButtonText>
                </Button>
                <HStack space="xs" alignItems="center">
                  <Button
                    variant="link"
                    size="sm"
                    onPress={() => {
                      setShowModal3(false)
                    }}
                  >
                    <ButtonIcon as={ArrowLeftIcon} />
                    <ButtonText>Back to login</ButtonText>
                  </Button>
                </HStack>
              </VStack>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Center>
    )
}

export default ForgotPassword;