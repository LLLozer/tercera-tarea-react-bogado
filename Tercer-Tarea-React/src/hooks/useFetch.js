import { useEffect, useState } from "react";
import { useCounter } from "./useCounter";

export const useFetch = () => {
  const [state, setState] = useState({
    data: null,
    isLoading: true,
  });

  const { data, isLoading } = state;

  const { count, handleIncrement } = useCounter(1);

  const url = `https://thesimpsonsapi.com/api/characters/${count}`;

  const fetchData = async () => {
    try {
      setState({
        ...state,
        isLoading: true,
      });

      const res = await fetch(url);
      const data = res.json();

      await new Promise((resolve) => setTimeout(resolve, 2000));

      setState({
        data: data,
        isLoading: false,
      });
    } catch (error) {
      console.log("Error al realizar fetch" + error);
    }
  };

  useEffect(() => {
    fetchData();

    return () => {
      console.log("Test");
    };
  }, [url]);

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
