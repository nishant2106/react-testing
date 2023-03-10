import React from "react";

export function useAPI() {
  const [data, setData] = React.useState<{ name: string }>();

  React.useEffect(() => {
    let isMounted = true;
    fetch("/api")
      .then((response) => response.json())
      .then((data) => {
        if (isMounted) setData(data);
      });

    return () => {
      isMounted = false;
    };
  }, []);

  return data;
}
