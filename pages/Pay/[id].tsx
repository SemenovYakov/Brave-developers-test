import React, { FormEvent, useState } from "react";
import { NextPageContext } from "next";
import { IOperator } from "../../components/types";
import { useRouter } from "next/dist/client/router";
import {ResultForm} from "../../components/resultForm";
import InputMask from 'react-input-mask';
import useInput from "../../components/hooks";
import{PayMain,PayContainer,PayButton,PayTitle,PayForm,PayH2} from "../../styles/myStyles"

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
    <PayContainer>
    <PayMain>
      <PayTitle>Пополнение счета {operator.id}</PayTitle>
      <PayForm onSubmit={(event) => submitForm(event)}>
        <PayH2>Введите номер телефона</PayH2>
        <InputMask mask="8(999)999-99-99" maskPlaceholder="_" type="tel" name="tel" pattern="8\([0-9]{3}\)[0-9]{3}-[0-9]{2}-[0-9]{2}" autoComplete="off" required placeholder="8(999)999-99-99" {...num} />
        <PayH2>Введите сумму</PayH2>
        <input required min="1" max="1000" id="sum" type="number" name="summa" />
        <PayButton type="submit">Пополнить</PayButton>
      </PayForm>
      <ResultForm result={result} />
    </PayMain>
    </PayContainer>
  );
};

Pay.getInitialProps = async ({ query }: NextPageContext) => {
  const response = await fetch(`https://brave-developers-test-task.herokuapp.com/operators/${query.id}`);
  const operator: IOperator = await response.json();
  console.log(query);
  return { operator };
};

export default Pay;


