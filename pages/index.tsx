import { IOperator } from "../components/types";
import { useRouter } from "next/dist/client/router";
import { Operator } from "../components/Operator";
import React from 'react';
import {Container, Main, Grid, Card, StartH2, StartTitle, AddOper, Plus} from "../styles/myStyles"


interface IOperatorsADD {
  operators: IOperator[];
}

const Home = ({ operators }: IOperatorsADD) => {
  const router = useRouter();

  return (
    <Container>
      <Main>
        <StartTitle>Терминал оплаты</StartTitle>
        <StartH2>Выберите оператора</StartH2>

        <Grid>
          {operators.map((operator) => (
            <Card
              onClick={() => router.push(`/Pay/${operator.id}`)}
              key={operator.id}
            >
              <Operator operator={operator} />
            </Card>
          ))}

         <AddOper onClick={() => router.push("/Add")}>

            <Plus
              type="image"
              src="https://icon-library.com/images/add-icon-png/add-icon-png-27.jpg"
              alt="addButton"
            />
            </AddOper>
        </Grid>
      </Main>
    </Container>
  );
};

export default Home;

Home.getInitialProps = async () => {
  const response = await fetch("https://brave-developers-test-task.herokuapp.com/operators");
  const operators: IOperator[] = await response.json();
  return { operators }
};


