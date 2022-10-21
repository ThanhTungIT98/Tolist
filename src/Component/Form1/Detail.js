import React from "react";
import  "./Form1.css"

const Detail = () => {
  const data = [
    {
      name: "Tung",
      tel: 11111,
      age: 24,
      year: 1998,
      email: "tung111@email.com",
    },
    {
      name: "huy",
      tel: 22222,
      age: 24,
      year: 1998,
      email: "tung222@email.com",
    },
    {
      name: "Tung",
      tel: 33333,
      age: 24,
      year: 1998,
      email: "tung333@email.com",
    },
    {
      name: "Tung",
      tel: 44444,
      age: 24,
      year: 1998,
      email: "tung444@email.com",
    },
    {
      name: "Tung",
      tel: 55555,
      age: 24,
      year: 1998,
      email: "tung555@email.com",
    },
  ];

  return (
    <div className="test">
      {data.map((item) => {
        return <>
          <div>
            <div>{item.name}</div>
            <div>{item.age}</div>
            <div>{item.tel}</div>
            <div>{item.year}</div>
            <div>{item.email}</div>
          </div>
        </>;
      })}
    </div>
  );
};

export default Detail;
