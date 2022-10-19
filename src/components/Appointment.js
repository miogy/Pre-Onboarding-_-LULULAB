import AddAppointment from "./AddAppointment/AddAppointment";
import styled from "styled-components";

import { BsCalendarCheck } from "react-icons/bs";
import { useState } from "react";

function Appointment({
  setAppointmentModal,
  appointmentList,
  setAppointmentList,
}) {
  const [tab, setTab] = useState(0);

  const closeModal = () => {
    setAppointmentModal(false);
  };
  return (
    <Wrap>
      <div className="modal">
        <h3>
          <BsCalendarCheck className="modalIcon" /> 예약 시스템
        </h3>
        <ul className="categoryTab">
          <li
            className={tab === 0 ? "active" : ""}
            onClick={() => {
              setTab(0);
            }}
          >
            진료예약
          </li>
          <li
            className={tab === 1 ? "active" : ""}
            onClick={() => {
              setTab(1);
            }}
          >
            검진예약
          </li>
        </ul>
        <AddAppointment
          onSendAppointment={(myAppointment) =>
            setAppointmentList([...appointmentList, myAppointment])
          }
          lastId={appointmentList.reduce(
            (max, item) => (Number(item.id) > max ? Number(item.id) : max),
            0
          )}
          tab={tab}
        />

        <input
          type="submit"
          value="닫기"
          onClick={closeModal}
          className="modalCloseBtn"
        />
      </div>
    </Wrap>
  );
}
export default Appointment;

const Wrap = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  .modal {
    position: relative;
    width: 500px;
    height: 600px;
    background-color: #fff;
    border-radius: 10px;
    overflow: hidden;
    h3 {
      width: 100%;
      position: absolute;
      top: 0;
      left: 0;
      margin: 0;
      background-color: #da005c;
      /* background: linear-gradient(to bottom right, #da005c, 40%, #ffdff2); */
      color: #fff;
      font-weight: 400;
      line-height: 50px;
    }
    .categoryTab {
      width: 300px;
      padding: 0;
      padding-top: 60px;
      display: flex;
      li {
        padding-top: 10px;
        text-align: center;
        list-style: none;
        text-decoration: none;
        margin: 0 auto;
        padding-bottom: 10px;
        color: #333;
        opacity: 0.5;
      }
      .active {
        border-bottom: 3px solid #da005c;
        opacity: 1;
      }
    }
    .modalIcon {
      color: #fff;
      margin-right: 10px;
      margin-left: 20px;
    }
    .modalCloseBtn {
      position: absolute;
      bottom: 30px;
      right: 140px;
      width: 100px;
      height: 30px;
      text-align: center;
    }
  }
`;
