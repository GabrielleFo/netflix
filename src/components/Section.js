import React from "react";

const Section = ({ data }) => {
  return (
    <>
      <h2>{data.category}</h2>
      <div className="list">
        {data.images.map((url, index) => {
          return <img key={index} src={url} alt={url} />;
        })}
      </div>
    </>
  );
};

export default Section;
