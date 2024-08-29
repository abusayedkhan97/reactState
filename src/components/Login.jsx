import { useState } from "react";
import "./login.css";

const Login = () => {
  // input
  const [text, setText] = useState("");

  // item
  const [items, setItem] = useState(["Test", "Hello world"]);

  const inputChange = (e) => {
    setText(e.target.value);
  };

  const addItem = ()=>{
    setItem([text, ...items]);
    setText("");
  }

  const handleDelete = (deleteItem)=>{
    setItem(items.filter((allItem) => allItem !== deleteItem));
  }

  return (
    <>
      <div className="form">
        <input type="text" value={text} onChange={inputChange} />
        <button onClick={addItem}>Add</button>

        {items.map((item) => (
          <div className="item" key={item}>
            <h2>{item}</h2>
            <button onClick={() => handleDelete(item)}>X</button>
          </div>
        ))};

      </div>
    </>
  );
};

export default Login;
