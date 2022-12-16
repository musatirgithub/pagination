import React from "react";

const paginate = (data) => {
  const itemsPerPage = 8;
  const pageNumber = Math.ceil(data.length / itemsPerPage);
  const paginated = Array.from({ length: pageNumber }, (_, index) => {
    const start = index * itemsPerPage;
    return data.slice(start, start + itemsPerPage);
  });
  return paginated;
};

export default paginate;
