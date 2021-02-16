import {
  Box,
  SimpleGrid,
  Heading,
  Image,
  Button,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { projectStorage, projectFirestore } from "../firebase/config";
import useFirestore from "../hooks/useFirestore";
const DeleteImage = () => {
  const { docs } = useFirestore("images");

  const handelDelete = (doc) => {
    const storageRef = projectStorage.ref();

    const delImage = storageRef.child(doc.fileName);
    console.log(delImage);
    delImage
      .delete()
      .then(() => {
        console.log("success");
      })
      .catch((error) => {
        console.log(error);
      });

    projectFirestore
      .collection("images")
      .doc(doc.id)
      .delete()
      .then(() => {
        console.log("Document successfully deleted!");
      })
      .catch((error) => {
        console.error("Error removing document: ", error);
      });
  };
  return (
    <>
      <Heading>Delete Image</Heading>
      <Text>Choose image to delete</Text>
      <SimpleGrid columns={4} spacing={10} minChildWidth="100px">
        {docs &&
          docs.map((doc) => (
            <Box key={doc.id} boxSize="100px" m={2}>
              <Image src={doc.url} boxSize="100px" objectFit="cover"></Image>
              <Button onClick={() => handelDelete(doc)} colorScheme="red">
                Delete
              </Button>
            </Box>
          ))}
      </SimpleGrid>
    </>
  );
};

export default DeleteImage;
