import React, { FormEvent, useState } from "react";
import { NextPageContext } from "next";
import { IOperator } from "../../components/types";
import { useRouter } from "next/dist/client/router";
import {ResultForm} from "../../components/resultForm";
import styles from "../../styles/Pay.module.css";
import InputMask from 'react-input-mask';
import useInput from "../../components/hooks";

interface IOperatorsPay {
  operator: IOperator;
}

const Pay = ({ operator }: IOperatorsPay) => {
  const [result, setResult] = useState<boolean>();
  const router = useRouter();
  const num = useInput('')

  const submitForm = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (Math.floor(Math.random() * 2) === 1) {
      setResult(true);
      setTimeout(() => router.push("/"), 1500);
    } else setResult(false);
  };

  return (
    <div className={styles.container}>
    <main className={styles.main}>
      <h1>Пополнение счета {operator.id}</h1>
      <form onSubmit={(event) => submitForm(event)} className={styles.pay__form}>
        <h2>Введите номер телефона</h2>
        <InputMask mask="8(999)999-99-99" maskPlaceholder="_" type="tel" name="tel" pattern="8\([0-9]{3}\)[0-9]{3}-[0-9]{2}-[0-9]{2}" autoComplete="off" required placeholder="8(999)999-99-99" {...num} />
        <h2>Введите сумму</h2>
        <input required min="1" max="1000" id="sum" type="number" name="summa" />
        <button type="submit" className={styles.pay__button}>Пополнить</button>
      </form>
      <ResultForm result={result} />
    </main>
    </div>
  );
};

Pay.getInitialProps = async ({ query }: NextPageContext) => {
  const response = await fetch(`https://brave-developers-test-task.herokuapp.com/operators/${query.id}`);
  const operator: IOperator = await response.json();
  console.log(query);
  return { operator };
};

export default Pay;


