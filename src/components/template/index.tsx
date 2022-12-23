import { useEffect } from "react";
import Head from "next/head";
import { Flex } from "@chakra-ui/react";
import Title from "../title";
import NavBar from "../navBar";
import seedUp from "../../utilities/seedUp";

export default function Template() {
  useEffect(() => {
    seedUp();
  }, []);

  return (
    <Flex justify="center" align="center" direction="column">
      <Title />
      <NavBar />
      <Head>
        <title>Reci✌🏼</title>
        <meta property="og:title" content="Reci✌🏼" key="title" />
        <meta
          name="description"
          content="Use this application to record recipes and look at pigs and cows."
        />
        <meta name="keywords" content="pigs cows and recipes" />
        <link rel="manifest" href="app.webmanifest" />
        <link rel="apple-touch-icon" href="/icons/icon-512.png" />
        <meta name="theme-color" content="#1A202C" />
      </Head>
    </Flex>
  );
}
