import React, { FormEvent, useState } from "react";
import { NextPageContext } from "next";
import { IOperator } from "../../components/types";
import { useRouter } from "next/dist/client/router";
import {ResultForm} from "../../components/resultForm";

interface IOperatorsPay {
  operator: IOperator;
}

const Pay = ({ operator }: IOperatorsPay) => {
  const [result, setResult] = useState<boolean>();
  const router = useRouter();

  const submitForm = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (Math.floor(Math.random() * 2) === 1) {
      setResult(true);
      setTimeout(() => router.push("/"), 1500);
    } else setResult(false);
  };

  return (
    <div>
      <h1>Пополнение счета {operator.id}</h1>
      <form onSubmit={(event) => submitForm(event)}>
        <input
          placeholder="+7(___)___-__-__"
          type="tel"
          name="tel"
          autoComplete="off"
          pattern="([\+]*[7-8]{1}\s?[\(]*9[0-9]{2}[\)]*\s?\d{3}[-]*\d{2}[-]*\d{2})"
        />
        <input min="1" max="1000" id="sum" type="number" name="summa" />
        <input type="submit" value="Пополнить" />
      </form>
      <ResultForm result={result} />
    </div>
  );
};

Pay.getInitialProps = async ({ query }: NextPageContext) => {
  const response = await fetch(`http://localhost:4200/operators/${query.id}`);
  const operator: IOperator = await response.json();
  console.log(query);
  return { operator };
};

export default Pay;


