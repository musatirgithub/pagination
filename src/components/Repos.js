import React, { useState, useEffect } from "react";
import useFetch from "../utils/useFetch";
import paginate from "../utils/paginate";
import SingleRepo from "./SingleRepo";

const Repos = () => {
  const { loading, error, repos } = useFetch();
  const [page, setPage] = useState(0);
  const [newRepos, setNewRepos] = useState([]);
  useEffect(() => {
    if (loading) return;
    setNewRepos(repos[page]);
  }, [loading, page]);

  const handlePrev = () => {
    if (page === 0) {
      setPage(repos.length - 1);
    } else {
      setPage(page - 1);
    }
  };

  const handleNext = () => {
    if (page === repos.length - 1) {
      setPage(0);
    } else {
      setPage(page + 1);
    }
  };

  if (loading) return <div>...Loading</div>;
  if (error) return <div>Something went wrong</div>;
  return (
    <div className="page-container">
      <h2>Pagination</h2>
      <div className="repos-container">
        {newRepos.map((item, index) => {
          return (
            <div key={index}>
              <SingleRepo item={item} />
            </div>
          );
        })}
      </div>
      <div className="pagenumber-container">
        <button type="button" onClick={handlePrev}>
          Previous
        </button>
        {repos.map((item, index) => {
          return (
            <div
              key={index}
              className="page-number"
              onClick={() => setPage(index)}
            >
              {index + 1}
            </div>
          );
        })}
        <button type="button" onClick={handleNext} className="btn">
          Next
        </button>
      </div>
    </div>
  );
};

export default Repos;
