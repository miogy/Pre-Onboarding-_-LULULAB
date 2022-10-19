import React, { useCallback, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import styled from "styled-components";
import Search from "./components/Search";
import Appointment from "./components/Appointment";

function App() {
  const [appointmentModal, setAppointmentModal] = useState(false);
  const [check, setCheck] = useState(false);
  //data
  const [appointmentList, setAppointmentList] = useState([]);

  const appointmentHandler = () => {
    setAppointmentModal(!appointmentModal);
  };
  const checkHandler = () => {
    setCheck(!check);
  };

  const fetchData = useCallback(() => {
    fetch("/data/appointmentList.json")
      .then((res) => res.json())
      .then((userList) => {
        setAppointmentList(userList);
      });
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

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
          <Appointment
            setAppointmentModal={setAppointmentModal}
            appointmentList={appointmentList}
            setAppointmentList={setAppointmentList}
          />
        ) : null}
        {check === true ? (
          <Search
            setCheck={setCheck}
            appointmentList={appointmentList}
            setAppointmentList={setAppointmentList}
          />
        ) : null}
      </div>
      <video
        muted
        loop
        autoPlay
        playsInline
        src="https://lumini-b2b-origin.s3.ap-northeast-2.amazonaws.com/homepage/video_main.mp4"
      ></video>
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
  .mainBtn {
    position: absolute;
    top: 10%;
    right: 5%;
    button {
      width: 200px;
      height: 60px;
      margin-right: 30px;
      background-color: rgba(0, 0, 0, 0);
      border: 1px solid #da005c;
      border: 0;
      font-size: 28px;
      font-family: "Noto Sans KR", sans-serif;
      border: 3px solid #da005c;
      border-radius: 10px;
      cursor: pointer;
      &:hover {
        background-color: #da005c;
        color: #fff;
      }
    }
  }
  video {
    width: 100%;
    height: 100%;
    position: fixed;
    z-index: -200;
  }
`;
