import styled from "styled-components";
import { AiOutlineSearch } from "react-icons/ai";
import { useState } from "react";

function SearchAppointment({ appointmentList }) {
  const [userPhone, setUserPhone] = useState("");
  const [userData, setUserData] = useState(false);

  const phoneInputHandler = (e) => {
    setUserPhone(e.target.value);
  };

  return (
    <SearchWrap>
      <h4>예약시 등록하신 휴대폰 번호를 입력해주세요.</h4>
      <div className="searchContainer">
        <p>
          <AiOutlineSearch className="searchIcon" />
          <input
            type="text"
            placeholder="search"
            className="searchInputBox"
            onChange={phoneInputHandler}
          />
        </p>
        <input
          type="submit"
          className="sortBtn"
          value="검색"
          onClick={() => {
            setUserData(true);
          }}
        />
      </div>
      <div className="userDataListWrap">
        {appointmentList.map((appointment) => {
          return (
            <div className="userListBox" key={appointment.id}>
              {appointment.phone === userPhone && userData === true && (
                <dl className="listWrap">
                  <dt className="aptlistContainer">
                    <p className="medical">{appointment.medical}</p>
                    <p className="container">
                      <span>예약자명 : {appointment.userName}</span>
                      <span className="itemBlock">{appointment.aptDate}</span>
                    </p>
                  </dt>
                  <dd className="btnContainer">{appointment.aptNotes}</dd>
                  <dd></dd>
                </dl>
              )}
            </div>
          );
        })}
      </div>
    </SearchWrap>
  );
}
export default SearchAppointment;

const SearchWrap = styled.div`
  padding: 10px 40px 0 40px;
  h4 {
    padding-left: 10px;
    font-weight: 300;
    margin: 0;
  }
  .searchContainer {
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
      cursor: pointer;
    }
  }
  .userDataListWrap {
    width: 80%;
    margin: 0 auto;
    font-size: 14px;
    color: #333;
    font: 14px "Noto Sans KR", sans-serif;
    .userListBox {
      width: 100%;
    }
    .medical {
      color: #ae0049;
      font-size: 16px;
      font-weight: bold;
    }
    .itemBlock {
      padding-top: 10px;
      color: #666;
      display: block;
    }
  }
`;
