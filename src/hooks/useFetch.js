import React from 'react';
export function useFetch(url) {
  const [request, setRequest] = React.useState();
  const [error, setError] = React.useState();
  const [_, setIsLoading] = React.useState(false);

  React.useEffect(() => {
    setIsLoading(true);
    fetch(url)
      .then((res) => res.json())
      .then((req) => {
        setRequest(req);
      })
      .catch((e) => setError(e))
      .finally(() => setIsLoading(false));
  }, []);

  return {
    request,
    error,
  };
}
