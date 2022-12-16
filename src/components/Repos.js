import React, { useState, useEffect } from "react";
import useFetch from "../utils/useFetch";
import paginate from "../utils/paginate";

const Repos = () => {
  const { loading, error, repos } = useFetch();
  const [page, setPage] = useState(0);
  const [newRepos, setNewRepos] = useState([]);
  useEffect(() => {
    if (loading) return;
    setNewRepos(repos[page]);
  }, [loading, page]);

  console.log(newRepos);
  if (loading) return <div>...Loading</div>;
  if (error) return <div>Something went wrong</div>;
  return (
    <div>
      {newRepos.map((item, index) => {
        return <div key={index}>{item.login}</div>;
      })}
    </div>
  );
};

export default Repos;
