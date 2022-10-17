import styled from "styled-components";

function AddAppointment() {
  return (
    <AddWrap>
      <h4>예약하기</h4>
      <ul>
        <li>
          <label htmlFor="userName">예약자명</label>
          <input type="text" id="userName" />
        </li>
        <li>
          <label htmlFor="date">예약일자</label>
          <input type="date" id="date" />
        </li>
        <li>
          <label htmlFor="time">예약시간</label>
          <input type="time" id="time" />
        </li>
        <li>
          <label htmlFor="textarea">진료내용</label>
          <input type="textarea" id="textarea" />
        </li>
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
