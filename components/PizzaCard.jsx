import Image from "next/image";
import styles from "../styles/PizzaCard.module.css";
import React from "react";

// eslint-disable-next-line react/display-name
const PizzaCard = React.forwardRef(({ onClick, href, pizza }, ref) => {
  return (
    <a className={styles.container} href={href} onClick={onClick} ref={ref}>
      <div>
        <Image src={pizza?.img} alt="" width="500" height="500" />
        <h1 className={styles.title}>{pizza?.title}</h1>
        <span className={styles.price}>${pizza?.prices[0]}</span>
        <p className={styles.desc}>{pizza?.desc}</p>
      </div>
    </a>
  );
});

export default PizzaCard;
