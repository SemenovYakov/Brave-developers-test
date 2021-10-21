import {PayTrue, PayFalse} from "../styles/myStyles"

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
              <PayTrue>Операция оплаты прошла успешно!</PayTrue>
            </>
          ) : (
            <>
              <PayFalse>Операция оплаты завершилась с ошибкой!</PayFalse>
            </>
          )}
        </>
      )}
    </>
  );
};




