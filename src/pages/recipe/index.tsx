import { Flex } from "@chakra-ui/react";
import Template from "../../components/template";
import AddRecipe from "../../components/addRecipe";

export default function Recipe() {
  return (
    <Flex
      justify="center"
      align="center"
      direction="column"
      gap={5}
      mb={10}
      w={300}
    >
      <Template />
      <AddRecipe />
    </Flex>
  );
}
