import React from "react";
import { IOperator } from "../components/types";
import styles from "../styles/operator.module.css";
import { useRouter } from "next/dist/client/router";

interface OperatorProps {
  operator: IOperator;
}

const Operator = ({ operator }: OperatorProps) => {
  const router = useRouter();

  return (
    <div className={styles.operator}>
      <img
        className={styles.operator__img}
        src={operator.link_image}
      />
      <h2 className={styles.operator__text}> {operator.name}</h2>
    </div>
  );
};

export default Operator;


