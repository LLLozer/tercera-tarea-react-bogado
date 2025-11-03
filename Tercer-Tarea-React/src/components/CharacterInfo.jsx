import { useCounter } from "../hooks/useCounter";
import { useFetch } from "../hooks/useFetch";
import { Loading } from "./Loading";

export const CharacterInfo = () => {
  const { count, handleIncrement, handleDecrement } = useCounter(1);
  const { state } = useFetch(count);
  const { data, isLoading } = state;

  return (
    <>
      <h1>Los simpsons API</h1>
      <h2>Personajes</h2>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <h3>{data?.name}</h3>
          <img
            src={`https://cdn.thesimpsonsapi.com/500${data?.portrait_path}`}
            alt="img"
          />
          <br />
          <p>{data?.description}</p>
        </>
      )}
      <br />
      <button onClick={() => handleIncrement(1)} disabled={isLoading}>
        Siguiente
      </button>
      <br />
      <button
        onClick={() => handleDecrement(1)}
        disabled={count == 1 || isLoading}
      >
        Anterior
      </button>
    </>
  );
};
