import styled from "styled-components";
import { AiOutlineSearch } from "react-icons/ai";
import AppointmentList from "./AppointmentList";
import { useState } from "react";

function CancleAppointment({ setAppointmentList, appointmentList }) {
  const [search, setSearch] = useState("");

  return (
    <SearchWrap>
      <h4>예약하신 분의 성함을 입력해 주세요.</h4>
      <div className="searchContainer">
        <div className="inputLayout">
          <p>
            <AiOutlineSearch className="searchIcon" />
            <input
              type="text"
              placeholder="search"
              className="searchInputBox"
              onChange={(e) => {
                setSearch(e.target.value);
              }}
            />
          </p>
          <input type="submit" value="검색" className="sortBtn" />
        </div>
        <div className="listContainer">
          {appointmentList
            .filter((val) => {
              if (search === "") {
                return val;
              } else if (val.userName.includes(search)) {
                return val;
              }
            })
            .map((appointment) => {
              return (
                <AppointmentList
                  key={appointment.id}
                  appointment={appointment}
                  deleteAppointment={(appointmentId) =>
                    setAppointmentList(
                      appointmentList.filter(
                        (appointment) => appointment.id !== appointmentId
                      )
                    )
                  }
                />
              );
            })}
        </div>
      </div>
    </SearchWrap>
  );
}
export default CancleAppointment;

const SearchWrap = styled.div`
  padding: 10px 40px 0 40px;
  h4 {
    padding-left: 10px;
    font-weight: 300;
    margin: 0;
  }
  .searchContainer {
    width: 100%;
    .inputLayout {
      position: relative;
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 10px;
      p {
        width: 400px;
        padding: 10px;
        border: 1px solid #da005c;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        .searchInputBox {
          border: 0;
          margin-left: 20px;
          &:focus {
            outline: none;
          }
        }
      }
      .sortBtn {
        width: 160.5px;
        height: 39.5px;
        background-color: #da005c;
        border: 0;
        color: #fff;
      }
    }
    .listContainer {
      width: 100%;
      height: 260px;
      margin: 0 auto;
      overflow: scroll;
      border: 1px solid lightgray;
      border-radius: 5px;
    }
  }
`;
