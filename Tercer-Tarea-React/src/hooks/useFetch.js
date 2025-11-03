import { useEffect, useState } from "react";

export const useFetch = (count) => {
  const [state, setState] = useState({
    data: null,
    isLoading: true,
  });

  const { data, isLoading } = state;

  const url = `https://thesimpsonsapi.com/api/characters/${count}`;

  const fetchData = async () => {
    try {
      setState({
        ...state,
        isLoading: true,
      });

      const res = await fetch(url);
      const data = await res.json();

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
  }, [count]);

  return {
    state,
  };
};
