import Head from "next/head";
import Home from "./home";
import Header from "../components/layout/Header";

export default function Index() {

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="true"/>
      </Head>
      <Header />
      <Home/>
    </div>
  );
}
