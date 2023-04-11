import Link from "next/link";
import styles from "../styles/PizzaList.module.css";
import PizzaCard from "./PizzaCard";

const PizzaList = ({ pizzaList }) => {
  const products = pizzaList ?? [];
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>THE BEST PIZZA IN TOWN</h1>
      <p className={styles.desc}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut blandit arcu
        in pretium molestie. Interdum et malesuada fames acme. Lorem ipsum dolor
        sit amet, consectetur adipiscing elit.
      </p>
      <div className={styles.wrapper}>
        {products.map((product) => (
          <Link
            key={product._id}
            href={`/product/${product._id}`}
            passHref
            legacyBehavior
          >
            <PizzaCard pizza={product} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default PizzaList;
