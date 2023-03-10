import React, { useState } from "react";
import "./App.css"; // ð¥ ë°ëì App.css íì¼ì import í´ì¤ì¼ í©ëë¤.

const Todo = () => {
  const [users, setUsers] = useState([
    {
      id: 0,
      text: "ë¦¬ìí¸ë¥¼ ë°°ìë´ìë¤.",
    },
  ]);

  const [text, setText] = useState("");

  const addUserHandler = () => {
    const newUser = {
      id: users.length + 1,
      text: text,
    };
    setUsers([...users, newUser]);
  };

  function User(props) {
    return (
      <div className="square-style">
        <div>
          <h2>{props.user.name}</h2>
        </div>

        <div className="mytext">{props.user.text}</div>
      </div>
    );
  }

  function CustomButton(props) {
    const { color, onClick, children } = props;
    if (color) {
      return (
        <button
          style={{
            color: "black",
          }}
          onClick={onClick}
        >
          {children}
        </button>
      );
    }
    return <button onClick={props.onClick}>{props.children}</button>;
  }

  return (
    <div className="layout">
      <div className="add">
        <div>
          <input
            style={{}}
            value={text}
            placeholder=""
            // ì¸í ì´ë²¤í¸ë¡ ë¤ì´ì¨ ìë ¥ ê°ì Textì ê°ì¼ë¡ ìë°ì´í¸
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        <CustomButton onClick={addUserHandler}>
          <div>ì¶ê°íê¸°</div>
        </CustomButton>
      </div>

      <div className="mytitle">
        <h1>Todo List</h1>
      </div>
      <div className="app-style">
        {users.map((user) => {
          if (!user.isDone) {
            return <User user={user} key={user.id}></User>;
          } else {
            return null;
          }
        })}
      </div>
    </div>
  );
};

export default Todo;
