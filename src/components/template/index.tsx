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
        <title>Refine💎</title>
        <meta property="og:title" content="Refine💎" key="title" />
        <meta
          name="description"
          content="Use this application to enhance your trading career."
        />
        <meta
          name="keywords"
          content="stocks personal growth trading finance investing reflection self-improvement career"
        />
        <link rel="manifest" href="app.webmanifest" />
        <link rel="apple-touch-icon" href="/icons/icon-512.png" />
        <meta name="theme-color" content="#1A202C" />
      </Head>
    </Flex>
  );
}
