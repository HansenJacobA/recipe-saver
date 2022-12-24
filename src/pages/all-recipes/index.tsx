import { Flex } from "@chakra-ui/react";
import Template from "../../components/template";
import Recipes from "../../components/allRecipes";

export default function AllRecipes() {
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
      <Recipes />
    </Flex>
  );
}
