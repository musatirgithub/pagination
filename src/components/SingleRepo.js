import React from "react";

const SingleRepo = ({ item }) => {
  console.log(item);
  const { login, avatar_url, html_url } = item;
  return (
    <div className="card-container">
      <div className="image-container">
        <img src={avatar_url} alt={login} />
      </div>
      <h5>{login}</h5>
      <a href={html_url}>
        <button type="button">View Github</button>
      </a>
    </div>
  );
};

export default SingleRepo;
