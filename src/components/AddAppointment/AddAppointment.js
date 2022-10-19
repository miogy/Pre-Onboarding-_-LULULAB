import { useState } from "react";
import styled from "styled-components";

function AddWrite({ formData, setFormData, formDataPublish, tab }) {
  return (
    <StyledAddWrite>
      <ul className="addWriteContainer">
        <li className="addInputBox">
          <label htmlFor="userName" className="inputName">
            예약자명
          </label>
          <input
            type="text"
            id="userName"
            className="inputValueBox"
            onChange={(e) => {
              setFormData({ ...formData, userName: e.target.value });
            }}
          />
        </li>
        <li className="addInputBox">
          <label htmlFor="userPhone" className="inputName">
            휴대폰 번호
          </label>
          <input
            type="tel"
            id="userPhone"
            className="inputValueBox"
            onChange={(e) => {
              setFormData({ ...formData, phone: e.target.value });
            }}
          />
        </li>
        <li className="addInputBox">
          <label htmlFor="userDate" className="inputName">
            예약일자
          </label>
          <input
            type="date"
            id="userDate"
            className="inputValueBox"
            onChange={(e) => {
              setFormData({ ...formData, aptDate: e.target.value });
            }}
          />
        </li>
        <li className="addInputBox">
          <label htmlFor="userTime" className="inputName">
            예약시간
          </label>
          <input
            type="time"
            id="userTime"
            className="inputValueBox"
            onChange={(e) => {
              setFormData({ ...formData, aptTime: e.target.value });
            }}
          />
        </li>
        {tab === 0 ? (
          <li className="medicalBox">
            <p className="medicalSelect">
              <label htmlFor="medical" className="medicalName">
                내과
              </label>
              <input
                type="checkbox"
                id="medical"
                onClick={() => {
                  setFormData({ ...formData, medical: "내과" });
                }}
              />
              <label htmlFor="skincare" className="medicalName">
                피부과
              </label>
              <input
                type="checkbox"
                id="skincare"
                onClick={() => {
                  setFormData({ ...formData, medical: "피부과" });
                }}
              />
              <span>※ 진료과를 선택해주세요.</span>
            </p>
            <p className="textareaWrap">
              <label htmlFor="userDes"></label>
              <textarea
                className="textareaBox"
                id="userDes"
                cols="30"
                rows="10"
                placeholder="진료 내용"
                onChange={(e) => {
                  setFormData({ ...formData, aptNotes: e.target.value });
                }}
              />
            </p>
          </li>
        ) : (
          <li className="medicalBox">
            <p className="medicalSelect">
              <label htmlFor="default" className="medicalName">
                건강검진
              </label>
              <input
                type="checkbox"
                id="default"
                onClick={() => {
                  setFormData({ ...formData, medical: "건강검진" });
                }}
              />
              <label htmlFor="full" className="medicalName">
                종합검진
              </label>
              <input
                type="checkbox"
                id="full"
                onClick={() => {
                  setFormData({ ...formData, medical: "종합검진" });
                }}
              />
              <span>※ 진료과를 선택해주세요.</span>
            </p>
          </li>
        )}
      </ul>

      <p className="appointmentBtnWrap">
        <input
          type="submit"
          value="예약하기"
          className="appointmentBtn"
          onClick={formDataPublish}
        />
      </p>
    </StyledAddWrite>
  );
}

function AddAppointment({ tab, onSendAppointment, lastId }) {
  const clear = {
    userName: "",
    medical: "",
    phone: "",
    aptNotes: "",
    aptDate: "",
  };
  const [formData, setFormData] = useState(clear);

  function formDataPublish() {
    const formDataInfo = {
      id: lastId + 1,
      userName: formData.userName,
      medical: formData.medical,
      phone: formData.phone,
      aptNotes: formData.aptNotes,
      aptDate: formData.aptDate + " " + formData.aptTime,
    };
    onSendAppointment(formDataInfo);
    setFormData(clear);
    alert("예약이 완료되었습니다.");
  }

  return (
    <AddWrap>
      <AddWrite
        tab={tab}
        formData={formData}
        formDataPublish={formDataPublish}
        setFormData={setFormData}
      />
    </AddWrap>
  );
}
export default AddAppointment;

const AddWrap = styled.div`
  padding: 10px 40px 0 40px;
`;
const StyledAddWrite = styled.div`
  .addWriteContainer {
    padding: 0;
    list-style: none;
    text-decoration: none;
    .addInputBox {
      width: 100%;
      margin: 6px 0 6px 0;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border: 1px solid lightgray;
      .inputName {
        width: 100px;
        line-height: 30px;
        text-align: center;
        font-size: 14px;
        font-weight: 300;
        background-color: lightgray;
        border-right: 1px solid lightgray;
      }
      .inputValueBox {
        width: 80%;
        padding-left: 30px;
        padding-right: 30px;
        border: 0;
        &:focus {
          outline: none;
        }
      }
    }
    .medicalBox {
      width: 100%;
      margin: 0 auto;
      text-align: center;
      .medicalSelect {
        width: 100%;
        margin: 10px 0 10px 0;

        .medicalName {
          font-size: 14px;
          color: #444;
          padding-left: 20px;
        }
        span {
          font-size: 14px;
          font-weight: 300;
          padding-left: 50px;
        }
      }
      .textareaWrap {
        width: 100%;
        margin: 0;
        .textareaBox {
          width: 92%;
          height: 100px;
          padding: 15px;
          border: 1px solid lightgray;
          &::placeholder {
            color: #666;
            font-weight: 300;
          }
          &:focus {
            outline: none;
          }
        }
      }
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
  }
  .appointmentBtnWrap {
    position: absolute;
    bottom: 14px;
    left: 140px;
    text-align: center;
    .appointmentBtn {
      width: 100px;
      height: 30px;
    }
  }
`;
