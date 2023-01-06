import { Flex } from "@chakra-ui/react";
import Template from "../../components/template";
import AddRecipe from "../../components/addRecipe";
import { useRouter } from "next/router";

export default function EditRecipe() {
  const router = useRouter();
  const { index } = router.query;

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
      <AddRecipe editIndex={Array.isArray(index) ? 0 : parseInt(index)} />
    </Flex>
  );
}
