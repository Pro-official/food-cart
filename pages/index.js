import axios from "axios";
import Head from "next/head";
import { useState } from "react";
import Add from "../components/Add";
import AddButton from "../components/AddButton";
import Featured from "../components/Featured";
import PizzaList from "../components/PizzaList";
import styles from "../styles/Home.module.css";

export default function Home({ products, admin }) {
  const altProducts = [
    {
      id: "1",
      desc: "Delicious",
      img: "https://images.unsplash.com/photo-1588315029754-2dd089d39a1a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
      title: "Kacchi Biriyani",
      prices: [5],
    },
  ];
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
      <PizzaList pizzaList={products ?? altProducts} />
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
  return {
    props: {
      products: res?.data,
      admin,
    },
  };
};
