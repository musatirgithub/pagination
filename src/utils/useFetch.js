import React, { useEffect, useState } from "react";
import paginate from "../utils/paginate";

const useFetch = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [repos, setRepos] = useState([]);
  const url =
    "https://api.github.com/users/musatirgithub/followers?per_page=100";

  const fetchData = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setRepos(paginate(data));
      console.log(repos);
      setError(false);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setError(true);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  return { loading, error, repos };
};

export default useFetch;
