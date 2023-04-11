import axios from "axios";
import Head from "next/head";
import { useState } from "react";
import Add from "../components/Add";
import AddButton from "../components/AddButton";
import Featured from "../components/Featured";
import PizzaList from "../components/PizzaList";
import styles from "../styles/Home.module.css";

export default function Home({ pizzaList, admin }) {
  console.log(pizzaList, "pizzalist");
  const [close, setClose] = useState(true);
  return (
    <div className={styles.container}>
      <Head>
        <title>It&rsquo;s Food time</title>
        <meta name="description" content="Best pizza shop in town" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Featured />
      <h1>Hey there</h1>
      <AddButton setClose={setClose} />
      {pizzaList && <PizzaList pizzaList={pizzaList} />}
      {!close && <Add setClose={setClose} />}
    </div>
  );
}

export const getServerSideProps = async (ctx) => {
  const myCookie = ctx.req?.cookies || "";
  let admin = false;

  if (myCookie.token === process.env.TOKEN) {
    admin = true;
  }

  const res = await axios.get("http://localhost:3000/api/products");
  if (res.length > 0) {
    return {
      props: {
        pizzaList: res?.data,
        admin,
      },
    };
  }
};
