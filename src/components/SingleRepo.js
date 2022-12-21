import React from "react";

const SingleRepo = ({ item }) => {
  console.log(item);
  return <div>{item.login}</div>;
};

export default SingleRepo;
