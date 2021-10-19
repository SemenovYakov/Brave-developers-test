import styles from "../styles/Home.module.css";
import { IOperator } from "../components/types";
import { useRouter } from "next/dist/client/router";
import { Operator } from "../components/Operator";
import styled from "styled-components";


interface IOperatorsADD {
  operators: IOperator[];
}


 const Container=styled.div`
  display: flex; 
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #000000;
  background-size: 0.375em 0.375em, 0.375em 0.375em, 100% 100%;
  min-height: 100vh;
  min-width: 100vw;`

const Home = ({ operators }: IOperatorsADD) => {
  const router = useRouter();

  return (
    <Container>
      <main className={styles.main}>
        <h1>Терминал оплаты</h1>
        <h2>Выберите оператора</h2>

        <div className={styles.grid}>
          {operators.map((operator) => (
            <a
              className={styles.card}
              onClick={() => router.push(`/Pay/${operator.id}`)}
              key={operator.id}
            >
              <Operator operator={operator} />
            </a>
          ))}

         <a className={styles.addOper} onClick={() => router.push("/Add")}>
            <input
              type="image"
              className={styles.addButton}
              src="https://icon-library.com/images/add-icon-png/add-icon-png-27.jpg"
              alt="addButton"
            />
            </a>
        </div>
      </main>
    </Container>
  );
};

export default Home;

Home.getInitialProps = async () => {
  const response = await fetch("https://brave-developers-test-task.herokuapp.com/operators");
  const operators: IOperator[] = await response.json();
  return { operators };
};


