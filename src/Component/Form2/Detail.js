import React from "react";
import "./Form2.css";

const Detail = (props) => {
  console.log(props);
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
                <input type="checkbox" name="check" onClick={()=>props.check(item.id)}/>
                <button onClick={() => props.detail(item.id)}>
                  Detail
                </button>
                <button onClick={() => props.delete(item.id)}>Delete</button>

                {props.visible.includes(item.id) && (
                  <div>
                    <form
                      // className="container-detail"
                      onSubmit={(e) => props.edit(e, item.id)}
                    >
                      <input
                        className="input-detail1"
                        name="input"
                        defaultValue={item.input}
                      />
                      <textarea
                        className="input-detail1"
                        name="des"
                        defaultValue={item.des}
                      />
                      <input type="date" name="date" defaultValue={item.date} />
                      <select name="piority" defaultValue={item.piority}>
                        <option>Low</option>
                        <option>Normal</option>
                        <option>High</option>
                      </select>
                      <button type="submit">Edit</button>
                    </form>
                  </div>
                )}
              </div>
            );
          })}
        </div>
        <button type="button" onClick={props.deleteAll}>DeleteAll</button>
      </div>
    </div>
  );
};

export default Detail;
