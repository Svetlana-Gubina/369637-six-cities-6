import {api} from './index';
import {useState, useEffect} from "react";

export const useApi = (url) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    api
      .get(url)
      .then(({res}) => {
        setData(res);
        setIsLoading(false);
      })
      .catch(() => {
        setIsLoading(false);
        setHasError(true);
      });
  });

  return [data, isLoading, hasError];
};
