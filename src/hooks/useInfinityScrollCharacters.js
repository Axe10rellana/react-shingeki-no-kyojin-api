//importaciones
import { useEffect } from "react";

//hooks
import { useScreen } from "./useScreen";
import { useDataProvider, LOADING } from "./useDataProvider";

//funciones
const mergeData = (currentData, newData) => {
  if (newData) {
    const elementsToAdd = newData.filter((newItem) => {
      return !currentData.some((item) => item.id === newItem.id);
    });

    return [...currentData, ...elementsToAdd];
  }

  return currentData;
};

//hook
export const useInfinityScrollCharacters = (
  elementToObserveRef,
  charactersRef
) => {
  //variables del hook
  const [isShowing] = useScreen(elementToObserveRef, "0px");
  const [state, loading] = useDataProvider(
    `https://attackontitanapi.herokuapp.com/api/characters`
  );
  const { statusData, data } = state;
  const { results, info } = data ? data : {};
  charactersRef.current = mergeData(charactersRef.current, results);

  //useEffect
  useEffect(() => {
    if (isShowing && statusData !== LOADING) {
      if (info?.next) loading(info?.next);
    }
  }, [isShowing, info?.next, loading, statusData]);

  return [state];
};
