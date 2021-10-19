import styles from "../styles/Pay.module.css";
interface IResultForm {
  result: boolean | undefined
}

export const ResultForm = ({ result }: IResultForm) => {
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




