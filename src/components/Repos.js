import React from "react";
import useFetch from "../utils/useFetch";

const Repos = () => {
  const { loading, error, repos } = useFetch();
  return <div>Repos</div>;
};

export default Repos;
