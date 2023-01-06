import { Link, Button } from "@chakra-ui/react";
import NextLink from "next/link";

export default function LinkEditButton({ index }: { index: number }) {
  return (
    <NextLink
      href={{
        pathname: "/edit-recipe",
        query: {
          index,
        },
      }}
    >
      <Link
        _hover={{
          textDecoration: "none",
        }}
      >
        <Button size="xs">Edit</Button>
      </Link>
    </NextLink>
  );
}
