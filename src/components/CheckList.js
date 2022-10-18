import AppointmentList from "./CheckList/AppointmentList";
import Search from "./CheckList/Search";
import NumberList from "./CheckList/NumberList";
import { useCallback, useEffect, useState } from "react";

import styled from "styled-components";
import { BsCalendarCheck } from "react-icons/bs";

function CheckList({ setCheck }) {
  const [tab, setTab] = useState(0);
  const [appointmentList, setAppointmentList] = useState([]);

  //list
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
        <ul className="categoryTab">
          <li
            className={tab === 0 ? "active" : ""}
            onClick={() => {
              setTab(0);
            }}
          >
            번호검색
          </li>
          <li
            className={tab === 1 ? "active" : ""}
            onClick={() => {
              setTab(1);
            }}
          >
            전체검색
          </li>
        </ul>

        <Search tab={tab} />
        <div className="listContainer">
          <ul>
            {appointmentList.map((appointment) => {
              return (
                <li>
                  {tab === 0 ? <NumberList appointment={appointment} /> : null}
                  {tab === 1 ? (
                    <AppointmentList
                      appointment={appointment}
                      deleteAppointment={(appointmentId) =>
                        setAppointmentList(
                          appointmentList.filter(
                            (appointment) => appointment.id !== appointmentId
                          )
                        )
                      }
                    />
                  ) : null}
                </li>
              );
            })}
          </ul>
        </div>

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
export default CheckList;
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
    }
    .listContainer {
      width: 84%;
      height: 260px;
      margin: 0 auto;
      overflow: scroll;
      border: 1px solid lightgray;
      border-radius: 5px;
      ul {
        width: 80%;
        li {
          width: 100%;
          list-style: none;
          text-decoration: none;
          border-bottom: 1px solid lightgray;
        }
      }
    }
  }
`;
