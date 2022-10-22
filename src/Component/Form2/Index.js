import React, { useState, useId, useEffect } from "react";
import Detail from "./Detail";
import Form2 from "./Form2";
import "./Form2.css";

const Index = () => {
  const [data, setData] = useState(() => {
    let Initlocal;
    Initlocal = JSON.parse(localStorage.getItem("myForm")) || [];
    return Initlocal;
  });
  const [count, setCount] = useState(0);
  const [visible, setVisible] = useState([]);

  const handelete = (id) => {
    const newData = data.filter((item) => {
      return item.id !== id;
    });
    setData(newData);
  };

  const handleDetail = (id) => {
    if (visible.includes(id)) {
      const newVisible = visible.filter((item) => {
        return item !== id;
      });
      setVisible(newVisible);
      return;
    }
    setVisible([...visible, id]);
  };

  const handleEdit = (e, id) => {
    e.preventDefault();
    const newData = [...data];
    if (e.target.input.value === "") return;
    newData.forEach((item) => {
      if (item.id === id) {
        item.input = e.target[0].value;
        item.des = e.target[1].value;
        item.date = e.target[2].value;
        item.piority = e.target[3].value;
      }
    });
    setData(newData);
  };
  const handleSubmit = (e) => {
    if (e.target.input.value === "") return;
    const newData = {
      id: count,
      input: e.target.input.value,
      des: e.target.des.value,
      date: e.target.date.value,
      piority: e.target.piority.value,
      check: true,
    };
    e.preventDefault();
    setData([...data, newData]);
    setCount((pre) => pre + 1);
    e.target.reset();
  };

  const handleComplete = (id) => {
    const newData = [...data];
    newData.forEach((item) => {
      if (item.id === id) {
        item.check = !item.check;
      }
    });
    setData(newData);
  };

  const handleDeleteAll = () => {
    const dd = data.filter((item) => {
      return item.check;
    });
    setData(dd);
  };

  console.log(data);
  useEffect(() => {
    localStorage.setItem("myForm", JSON.stringify(data));
  }, [data]);

  return (
    <div className="container-index">
      <Form2 handleSubmit={handleSubmit} />
      <Detail
        data={data}
        delete={handelete}
        detail={handleDetail}
        visible={visible}
        edit={handleEdit}
        check={handleComplete}
        deleteAll={handleDeleteAll}
      />
    </div>
  );
};

export default Index;
