import React, { FormEvent } from "react";
import { useRouter } from "next/dist/client/router";
import useInput from "../components/hooks";


const AddOperator = () => {
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
    <div>
      <h1>Добавление оператора</h1>
      <form onSubmit={Submit}>
        <h2>Название оператора</h2>
        <input type="text" {...name} />
        <h2>Ссылка на изображение</h2>
        <input type="link" pattern="https?:\/\/(www.)?(\w*\W*)*" {...link} />
        <button type="submit">Добавить</button>
      </form>
    </div>
  );
};
export default AddOperator;


