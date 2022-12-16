import React, { useEffect, useState } from "react";

const useFetch = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [repos, setRepos] = useState([]);
  const url = "https://api.github.com/users/musatirgithub/repos?per_page=100";

  const fetchData = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setRepos(data);
  };

  useEffect(() => {
    try {
      fetchData();
      setError(false);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setError(true);
      setLoading(false);
    }
  }, []);
  return { loading, error, repos };
};

export default useFetch;
