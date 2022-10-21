import React from "react";
import "./Form2.css";

const Detail = (props) => {
  return (
    <div className="container-detail">
      <div>
        <h1>To List</h1>
        <input className="input-detail" tyle="text" placeholder="Search..." />
        <div>
          {props.data.map((item) => {
            return (
              <div key={item.id}>
              <div>{item.input}</div>
              <button onClick={()=>props.detail(item.id)}>Detail
                
                {/* {props.detail(item.id) &&(
                    <div>dfd</div>
                )} */}
                </button>
                <button onClick={()=>props.delete(item.id)}>Delete</button>
                {props.visible.includes(item.id) && <div>2</div>}
              </div>
              
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Detail;
