import React, { useState } from 'react'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    useDisclosure,
    Button,
    Input,
    FormControl,
    FormLabel,
    FormHelperText,
    Box,
  } from '@chakra-ui/react'

  import { useRouter } from "next/router";


const EntryForm = () => {

  const { onClose } = useDisclosure()
const [code,setCode]=useState("")
const router = useRouter()

const handleSubmit = (e) => {
    e.preventDefault()
    router.push("http://localhost:3000/Display")
}

  return (
<>
    <Modal isOpen onClose={onClose} isCentered>
          <ModalOverlay />
          <ModalContent 
          >
            <ModalHeader>A Surprise awaits You !!</ModalHeader>
            <ModalBody>
        <FormControl variant="floating" id="first-name" isRequired isInvalid>
          <Box p={0}>
            <Input onChange={(e)=>{setCode(e.target.value)}}/>
            <FormLabel>Enter Code</FormLabel>
            <FormHelperText>Ask Your hubby for the code</FormHelperText>
                </Box>
            </FormControl>
            </ModalBody>
            <ModalFooter>
              {/* <Button colorScheme='blue' mr={3} onClick={onClose}>
                Close
            </Button> */}
              <Button variant='ghost' onClick={handleSubmit}>Enter</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
</>
  )
}

export default EntryForm