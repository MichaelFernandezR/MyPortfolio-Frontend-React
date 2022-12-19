import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  return (
    <HStack background="#fff" borderRadius="2xl">
      <VStack align="flex-start" paddingBottom={10}>
        <Image src={imageSrc} borderRadius="2xl" />

        <VStack align="flex-start" p={5}>
          <Heading color="black">{title}</Heading>
          <Text color="black">{description}</Text>
          <Text color="black">
            See more
            <FontAwesomeIcon
              icon={faArrowRight}
              style={{ marginLeft: 5 }}
              size="1x"
            />
          </Text>
        </VStack>
      </VStack>
    </HStack>
  );
};

export default Card;
