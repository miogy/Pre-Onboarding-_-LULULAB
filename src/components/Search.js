import { useState } from "react";

import styled from "styled-components";
import { BsCalendarCheck } from "react-icons/bs";
import Category from "./Search/Category";
import SearchAppointment from "./Search/SearchAppointment";
import CancleAppointment from "./Search/CancleAppointment";

function Search({ setCheck, appointmentList, setAppointmentList }) {
  const [tab, setTab] = useState(0);

  const closeModal = () => {
    setCheck(false);
  };

  return (
    <CheckListWrap>
      <div className="modal">
        <h3>
          <BsCalendarCheck className="modalIcon" />
          예약 확인
        </h3>
        <Category tab={tab} setTab={setTab} />
        {tab === 0 ? (
          <SearchAppointment appointmentList={appointmentList} />
        ) : null}
        {tab === 1 ? (
          <CancleAppointment
            appointmentList={appointmentList}
            setAppointmentList={setAppointmentList}
          />
        ) : null}

        <input
          type="submit"
          value="닫기"
          onClick={closeModal}
          className="modalCloseBtn"
        />
      </div>
    </CheckListWrap>
  );
}
export default Search;
const CheckListWrap = styled.div`
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
      left: 50%;
      transform: translate(-50%, 0);
      width: 100px;
      height: 30px;
      text-align: center;
      border: 1px solid #da005c;
      border-radius: 5px;
      background-color: rgba(0, 0, 0, 0);
      color: #666;
      &:hover {
        background-color: #da005c;
        color: #fff;
      }
    }
  }
`;
