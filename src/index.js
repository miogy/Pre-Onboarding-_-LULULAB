import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import styled from "styled-components";
import Modal from "./components/Modal";

function App() {
  const [modal, setModal] = useState(false);

  const modalHandler = () => {
    setModal(!modal);
  };
  return (
    <StyledApp>
      <button onClick={modalHandler}>예약하기</button>
      {modal === true ? <Modal setModal={setModal} /> : null}
    </StyledApp>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

const StyledApp = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
  background: center / cover no-repeat
    url("https://images.unsplash.com/photo-1549382534-709b19f22ddd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8NXw4OTQzMTU0fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60");
  button {
    position: absolute;
    top: 50%;
    left: 30%;
    transform: translate(-50%, 0);
    background-color: rgba(0, 0, 0, 0);
    border: 0;
    font-size: 32px;
    font-family: "Noto Sans KR", sans-serif;
    cursor: pointer;
    opacity: 0.5;
    &:hover {
      opacity: 1;
    }
  }
`;
