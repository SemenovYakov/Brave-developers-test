import styles from "../styles/Pay.module.css";
export const ResultForm = ({ result }: any) => {
  return (
    <>
      {typeof result == "undefined" ? (
        <></>
      ) : (
        <>
          {result ? (
            <>
              <span className={styles.pay__true}>Операция оплаты прошла успешно!</span>
            </>
          ) : (
            <>
              <span className={styles.pay__false}>Операция оплаты завершилась с ошибкой!</span>
            </>
          )}
        </>
      )}
    </>
  );
};




