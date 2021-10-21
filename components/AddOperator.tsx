import React, { FormEvent } from "react";
import { useRouter } from "next/dist/client/router";
import useInput from "../components/hooks";
import { AddContainer,AddMain,AddH2,AddTitle,AddForm,AddButton} from "../styles/myStyles";


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
    <AddContainer>
    <AddMain>
      <AddTitle>Добавление оператора</AddTitle>
      <AddForm onSubmit={Submit}>
        <AddH2>Название оператора</AddH2>
        <input required type="text" {...name} />
        <AddH2>Ссылка на изображение</AddH2>
        <input  required type="link" pattern="https?:\/\/(www.)?(\w*\W*)*" {...link} />
        <AddButton type="submit">Добавить</AddButton>
      </AddForm>
    </AddMain>
    </AddContainer>
  );
};


