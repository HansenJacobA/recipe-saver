import { Flex, Text } from "@chakra-ui/react";
import RecipeCardSection from "../recipeCardSection";

export default function NumberedList({
  list,
  heading,
}: {
  list: string[];
  heading: string;
}) {
  return (
    <Flex direction="column" textAlign="center" gap={5}>
      <RecipeCardSection header={heading} />
      {list.map((item: string, index: number) => (
        <Flex key={index} gap={2}>
          <Text fontWeight="extrabold">{index + 1}.</Text>
          <Text fontSize={18} fontWeight="light">
            {item}
          </Text>
        </Flex>
      ))}
    </Flex>
  );
}
