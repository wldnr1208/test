import React, { useState } from "react";
import "./App.css"; // 🔥 반드시 App.css 파일을 import 해줘야 합니다.

const Todo = () => {
  const [users, setUsers] = useState([
    {
      id: 0,
      text: "리엑트를 배워봅시다.",
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
            // 인풋 이벤트로 들어온 입력 값을 Text의 값으로 업데이트
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        <CustomButton onClick={addUserHandler}>
          <div>추가하기</div>
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
