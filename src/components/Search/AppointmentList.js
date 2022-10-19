import { useState } from "react";
import styled from "styled-components";

function CancleModal({ deleteAppointment, appointment, setCancleAppoint }) {
  const [phoneInput, setPhoneInput] = useState("");
  const delBtn = () => {
    if (appointment.phone === phoneInput) {
      deleteAppointment(appointment.id);
      setCancleAppoint(false);
      alert("예약취소가 완료되었습니다.");
    } else {
      alert("정보를 확인하고 취소해주세요.");
      setCancleAppoint(false);
    }
  };
  const enterKey = (e) => {
    if (e.key === "Enter") {
      setPhoneInput(e.target.value);
      setCancleAppoint(false);
      delBtn();
    }
  };
  return (
    <StyledModal>
      <div>
        <h4>예약취소</h4>
        <p>예약시 입력하신 휴대폰 번호를 입력해주세요.</p>
        <input
          type="tel"
          className="phoneInput"
          onChange={(e) => {
            setPhoneInput(e.target.value);
          }}
          onKeyPress={enterKey}
          placeholder="' - ' 없이 입력해주세요."
        />
        <button onClick={delBtn} className="deleteBtn">
          예약취소
        </button>
      </div>
    </StyledModal>
  );
}

function AppointmentList({ appointment, deleteAppointment }) {
  // console.log(appointment);
  const [cancleAppoint, setCancleAppoint] = useState(false);

  const cancleHandler = () => {
    setCancleAppoint(!cancleAppoint);
  };

  return (
    <ListWrap>
      <dl className="listWrap">
        <dt className="aptlistContainer">
          <p className="medical">{appointment.medical}</p>
          <p className="container">
            <span>예약자명 : {appointment.userName}</span>
            <span className="itemBlock">{appointment.aptDate}</span>
          </p>
        </dt>
        <dd className="btnContainer">
          <button onClick={cancleHandler} className="aptNotesBtn">
            예약취소
          </button>
        </dd>
      </dl>
      {cancleAppoint === true ? (
        <CancleModal
          deleteAppointment={deleteAppointment}
          appointment={appointment}
          setCancleAppoint={setCancleAppoint}
        />
      ) : null}
    </ListWrap>
  );
}
export default AppointmentList;

const ListWrap = styled.div`
  .listWrap {
    width: 80%;
    margin: 0 auto;
    font-size: 14px;
    color: #333;
    border-bottom: 1px solid lightgray;
    font: 14px "Noto Sans KR", sans-serif;
    display: flex;
    justify-content: space-around;
    align-items: center;
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
    .btnContainer {
      .aptNotesBtn {
        width: 100px;
        height: 26px;
        display: block;
        margin-bottom: 6px;
        border: 1px solid lightgray;
        border-radius: 5px;
        background-color: #fff;
        color: #666;
        &:hover {
          color: #fff;
          background-color: rgba(218, 0, 92, 1);
          border: 1px solid rgba(218, 0, 92, 1);
        }
      }
    }
  }
`;
const StyledModal = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 110;
  div {
    width: 400px;
    height: 300px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #fff;
    text-align: center;
    border-radius: 10px;
    h4 {
      padding: 3%;
      font-size: 16px;
      font-weight: 400;
      color: #fff;
      margin: 0;
      margin-bottom: 40px;
      background-color: rgba(218, 0, 92, 1);
    }
    p {
      font-size: 16px;
      font-weight: 300;
      margin-bottom: 50px;
    }
    .phoneInput {
      width: 300px;
      height: 32px;
      margin-bottom: 30px;
      border: 1px solid #da005c;
      &::placeholder {
        padding-left: 6px;
      }
    }
    .deleteBtn {
      width: 100px;
      height: 30px;
      text-align: center;
      background-color: #fff;
      color: #666;
      border: 1px solid lightgray;
      border-radius: 5px;
      &:hover {
        color: #fff;
        background-color: rgba(218, 0, 92, 1);
        border: 1px solid rgba(218, 0, 92, 1);
      }
    }
  }
`;
