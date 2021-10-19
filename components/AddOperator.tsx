import React, { FormEvent } from "react";
import { useRouter } from "next/dist/client/router";
import useInput from "../components/hooks";
import styles from "../styles/Addoperator.module.css";


export const AddOperator = () => {
  const router = useRouter();
  const name = useInput("");
  const link = useInput("");

  const Submit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await fetch("https://brave-developers-test-task.herokuapp.com/operators", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify({
        id: name.value,
        name: name.value,
        link_image: link.value,
      }),
    });
    router.push("/");
  };

  return (
    <div className={styles.container}>

      
    <main className={styles.add__operator}>
      <h1>Добавление оператора</h1>
      <form onSubmit={Submit} className={styles.add__form}>
        <h2>Название оператора</h2>
        <input required type="text" {...name} />
        <h2>Ссылка на изображение</h2>
        <input  required type="link" pattern="https?:\/\/(www.)?(\w*\W*)*" {...link} />
        <button type="submit" className={styles.add__button}>Добавить</button>
      </form>
    </main>
    </div>
  );
};


