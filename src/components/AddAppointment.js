import styled from "styled-components";

function AddAppointment({ tab }) {
  return (
    <AddWrap>
      <h4>예약하기</h4>
      <ul>
        <li>
          <label htmlFor="userName">예약자명</label>
          <input type="text" id="userName" />
        </li>
        <li>
          <label htmlFor="userPhone">휴대폰 번호</label>
          <input type="tel" id="userPhone" />
        </li>
        <li>
          <label htmlFor="userDate">예약일자</label>
          <input type="date" id="userDate" />
        </li>
        <li>
          <label htmlFor="userTime">예약시간</label>
          <input type="time" id="userTime" />
        </li>
        {tab === 0 ? (
          <li>
            <label htmlFor="medical">내과</label>
            <input type="checkbox" id="medical" />
            <label htmlFor="skincare">피부과</label>
            <input type="checkbox" id="skincare" />
            <label htmlFor="userDes"></label>
            <textarea
              id="userDes"
              cols="30"
              rows="10"
              placeholder="진료 내용"
            />
          </li>
        ) : (
          <li>
            <label htmlFor="default">건강검진</label>
            <input type="checkbox" id="default" />
            <label htmlFor="full">종합검진</label>
            <input type="checkbox" id="full" />
          </li>
        )}
      </ul>
      <p>
        <input type="submit" value="예약하기" />
        <input type="reset" />
      </p>
    </AddWrap>
  );
}
export default AddAppointment;

const AddWrap = styled.div`
  padding: 10px 40px 0 40px;
  h4 {
    font-weight: 400;
    margin: 0;
    color: #333;
  }
`;
