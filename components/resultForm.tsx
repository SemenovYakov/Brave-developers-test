export const ResultForm = ({ result }: any) => {
  return (
    <>
      {typeof result == "undefined" ? (
        <></>
      ) : (
        <>
          {result ? (
            <>
              <span>Операция оплаты прошла успешно!</span>
            </>
          ) : (
            <>
              <span>Операция оплаты завершилась с ошибкой!</span>
            </>
          )}
        </>
      )}
    </>
  );
};




