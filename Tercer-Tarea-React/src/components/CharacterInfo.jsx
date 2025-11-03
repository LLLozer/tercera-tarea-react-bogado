import { useCounter } from "../hooks/useCounter";
import { useFetch } from "../hooks/useFetch";

export const CharacterInfo = () => {
  const { count, handleIncrement } = useCounter(1);
  const { state } = useFetch(count);
  const { data, isLoading } = state;

  return (
    <>
      <h1>Los simpsons API</h1>
      <h2>Personajes</h2>
      {isLoading ? <h1>Cargando...</h1> : <h3>{data?.name}</h3>}
      <button onClick={() => handleIncrement(1)} disabled={isLoading}>
        Siguiente
      </button>
    </>
  );
};
