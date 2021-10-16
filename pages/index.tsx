import styles from "../styles/Home.module.css";
import { IOperator } from "../components/types";
import { useRouter } from "next/dist/client/router";
import Operator from "../components/Operator";

interface IOperatorsADD {
  operators: IOperator[];
}

const Home = ({ operators }: IOperatorsADD) => {
  const router = useRouter();

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>Терминал оплаты мобильной связи</h1>
        <p className={styles.description}>Выберите оператора</p>

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
    </div>
  );
};

export default Home;

Home.getInitialProps = async () => {
  const response = await fetch("https://brave-developers-test-task.herokuapp.com/operators");
  const operators: IOperator[] = await response.json();
  return { operators };
};


