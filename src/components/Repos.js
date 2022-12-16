import React from "react";
import useFetch from "../utils/useFetch";

const Repos = () => {
  const { loading, error, repos } = useFetch();
  console.log(loading, error, repos);
  return <div>Repos</div>;
};

export default Repos;
