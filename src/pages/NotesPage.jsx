import {
  Box,
  Grid,
  IconButton,
  Button,
  useDisclosure,
  Input,
  Textarea,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createNotes, getNotes } from "../Redux/notes/note.action";
import NoteCard from "../components/Notespage/NoteCard/NoteCard";
import { FaPlus } from "react-icons/fa";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";

const NotesPage = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const { loading, error, data } = useSelector((state) => state.noteReducer);
  console.log(data);
  // console.log(loading, error);
  const dispatch = useDispatch();

  const [notes, setNotes] = useState([]);

  useEffect(() => {
    dispatch(getNotes());
  }, [dispatch]);

  useEffect(() => {
    setNotes(data);
  }, [data]);

  const filteredNotes = notes.filter((note) =>
    note.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const createNote = () => {
    dispatch(createNotes({ title, content }));
    onClose();
  };
  return (
    <Box padding={8}>
      <Input
        boxShadow={"rgb(38, 57, 77) 0px 20px 30px -10px"}
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder={"Search notes..."}
        mt={100}
        mb={10}
        w={80}
      />
      <Grid w={"90%"} margin={"auto"} gridTemplateColumns="repeat(4, 1fr)">
        {filteredNotes.map((el) => (
          <NoteCard {...el} key={el._id} />
        ))}
      </Grid>

      <IconButton
        position={"fixed"}
        w={"80px"}
        h={"80px"}
        boxShadow={
          "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;"
        }
        borderRadius={50}
        bg={"yellowgreen"}
        bottom={0}
        right={0}
        margin={16}
        icon={<FaPlus />}
        onClick={onOpen}
      ></IconButton>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create New Note</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <Input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder={"pleaser enter title"}
            ></Input>
            <Textarea
              mt={8}
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder={"please enter description"}
            ></Textarea>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={createNote}>
              create
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default NotesPage;
