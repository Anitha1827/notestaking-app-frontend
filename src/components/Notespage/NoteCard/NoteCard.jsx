import {
  CardBody,
  VStack,
  Heading,
  Flex,
  Button,
  Card,
  Text,
  Input,
  Textarea,
  useDisclosure,
} from "@chakra-ui/react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";

import React, { useState } from "react";
import "./style.css";
import { useDispatch } from "react-redux";
import { deleteNotes, updateNotes } from "../../../Redux/notes/note.action";

const NoteCard = ({ title, content, user, _id }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [temptitle, setTitle] = useState(title);
  const [tempcontent, setContent] = useState(content);
  const dispatch = useDispatch();

  const updateNote = () => {
    dispatch(updateNotes(_id, { title: temptitle, content: tempcontent }));
    onClose();
  };

  return (
    <Flex direction={{ base: "column", md: "row", sm: "row" }} gap={4}>
      <Card className="card" padding={8} margin={8}>
        <CardBody>
          <VStack>
            <Heading>{title}</Heading>
            <Text>{content}</Text>

            <Flex gap={3}>
              <Button onClick={onOpen}>Update</Button>

              <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                  <ModalHeader>Update Note</ModalHeader>
                  <ModalCloseButton />
                  <ModalBody pb={6}>
                    <Input
                      value={temptitle}
                      onChange={(e) => setTitle(e.target.value)}
                      placeholder={"pleaser enter title"}
                    ></Input>
                    <Textarea
                      mt={8}
                      value={tempcontent}
                      onChange={(e) => setContent(e.target.value)}
                      placeholder={"please enter description"}
                    ></Textarea>
                  </ModalBody>

                  <ModalFooter>
                    <Button colorScheme="blue" mr={3} onClick={updateNote}>
                      update
                    </Button>
                  </ModalFooter>
                </ModalContent>
              </Modal>
              <Button
                onClick={() => {
                  dispatch(deleteNotes(_id));
                }}
              >
                Delete
              </Button>
            </Flex>
          </VStack>
        </CardBody>
      </Card>
    </Flex>
  );
};

export default NoteCard;
