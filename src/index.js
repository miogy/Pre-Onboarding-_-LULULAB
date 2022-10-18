import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import styled from "styled-components";
import CheckList from "./components/CheckList";
import Modal from "./components/Modal";

function App() {
  const [appointmentModal, setAppointmentModal] = useState(false);
  const [check, setCheck] = useState(false);

  const appointmentHandler = () => {
    setAppointmentModal(!appointmentModal);
  };
  const checkHandler = () => {
    setCheck(!check);
  };

  return (
    <StyledApp>
      <div className="mainBtn">
        <button onClick={appointmentHandler} className="appointmentBtn">
          진료예약
        </button>
        <button onClick={checkHandler} className="checkListBtn">
          예약확인
        </button>
      </div>
      <div>
        {appointmentModal === true ? (
          <Modal setAppointmentModal={setAppointmentModal} />
        ) : null}
        {check === true ? <CheckList setCheck={setCheck} /> : null}
      </div>
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
  .mainBtn {
    position: absolute;
    top: 50%;
    left: 30%;
    transform: translate(-50%, 0);

    button {
      margin-right: 10px;
      background-color: rgba(0, 0, 0, 0);
      border: 0;
      font-size: 32px;
      font-family: "Noto Sans KR", sans-serif;
      .appointmentBtn {
        cursor: pointer;
        opacity: 0.5;
        &:hover {
          opacity: 1;
        }
      }
      .checkListBtn {
        cursor: pointer;
        opacity: 0.5;
        &:hover {
          opacity: 1;
        }
      }
    }
  }
`;
