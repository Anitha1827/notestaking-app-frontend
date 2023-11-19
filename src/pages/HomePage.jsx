import { Box, Heading, Image, Text, interactivity } from "@chakra-ui/react";
import React from "react";
import note from "../assets/images/stickynote.png";

const HomePage = () => {
  return (
    <Box padding={8}>
      <Image w={500} position={"absolute"} right={0} src={note} />
      <Heading mt={16} textAlign={"start"} size={"4xl"}>
        Note-Taking App
      </Heading>
      <Text
        mt={8}
        fontSize={"19px"}
        fontStyle={"italic"}
        maxWidth={"50%"}
        textAlign={"justify"}
      >
        A note-taking application is a versatile digital tool designed to
        enhance productivity and organization by providing users with an
        efficient way to capture, organize, and retrieve information. Our note
        application offers a seamless and intuitive platform for users to
        create, edit, and manage their notes effortlessly. Key features of our
        note application include a user-friendly interface that simplifies the
        process of jotting down thoughts, ideas, and important details. Users
        can organize their notes into customizable categories, enabling them to
        create a structured and easily accessible repository of information. The
        application supports rich text formatting, allowing users to emphasize
        key points, create to-do lists, and embed multimedia elements within
        their notes. In addition to basic note creation, our application
        prioritizes collaboration and synchronization. Users can seamlessly sync
        their notes across multiple devices, ensuring that their information is
        accessible anytime, anywhere. Collaboration features enable users to
        share notes with colleagues, friends, or family, fostering teamwork and
        idea-sharing. To enhance productivity, the application integrates
        features such as reminders, tags, and search functionality. Reminders
        help users stay on top of tasks, while tags and a robust search engine
        enable quick and efficient retrieval of specific notes, even within
        extensive collections. Our note application is designed to adapt to
        diverse user needs, making it an indispensable tool for students,
        professionals, creatives, and anyone seeking an efficient and organized
        way to manage their thoughts and information. With a focus on
        simplicity, collaboration, and accessibility, our note application aims
        to empower users in their daily lives and endeavors.
      </Text>
    </Box>
  );
};

export default HomePage;
