import { Flex } from "@chakra-ui/react";
import Template from "../../components/template";
import Greeting from "../../components/greeting";
import AddRecipe from "../../components/addRecipe";
import { useEffect, useState } from "react";

export default function Recipe() {
  const [showGreeting, setShowGreeting] = useState(true);

  useEffect(() => {
    setTimeout(function replaceGreeting() {
      setShowGreeting(false);
    }, 1000);
  });

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
      {showGreeting ? <Greeting /> : <AddRecipe />}
    </Flex>
  );
}
