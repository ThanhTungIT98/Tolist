import React, { useState, useId } from "react";
import Detail from "./Detail";
import Form2 from "./Form2";
import "./Form2.css";

const Index = () => {
  const [data, setData] = useState([]);
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
  console.log(visible, "zz");
  const handleSubmit = (e) => {
    const newData = {
      id: count,
      input: e.target.input.value,
      des: e.target.des.value,
      date: e.target.date.value,
      piority: e.target.piority.value,
    };
    e.preventDefault();
    setData([...data, newData]);
    setCount((pre) => pre + 1);
  };

  // const [detail,setDetail]=useState(false)

  return (
    <div className="container-index">
      <Form2 handleSubmit={handleSubmit} />
      <Detail
        data={data}
        delete={handelete}
        detail={handleDetail}
        visible={visible}
        // setdetail={detail}
      />
    </div>
  );
};

export default Index;
