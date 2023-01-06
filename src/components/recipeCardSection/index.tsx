import { Flex, Text } from "@chakra-ui/react";

export default function RecipeCardSection({
  header,
  detail,
}: {
  header: string;
  detail?: string;
}) {
  return (
    <Flex direction="column" textAlign="center">
      <Text fontWeight="bold">{header}</Text>
      {detail ? (
        <Text fontSize={18} fontWeight="light">
          {detail}
        </Text>
      ) : null}
    </Flex>
  );
}
