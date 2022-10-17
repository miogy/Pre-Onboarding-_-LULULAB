import styled from "styled-components";

function AppointmentList() {
  return (
    <ListWrap>
      <dl className="listContainer">
        <dt className="medical listvalue">진료과</dt>
        <dd className="listvalue">
          <span>예약자명 : </span>
        </dd>
        <dd className="listvalue">
          진료내용 <span>예약일자</span>
        </dd>
      </dl>
      <dl className="listContainer">
        <dt className="medical listvalue">진료과</dt>
        <dd className="listvalue">
          <span>예약자명 : </span>
        </dd>
        <dd className="listvalue">
          진료내용 <span>예약일자</span>
        </dd>
      </dl>
      <dl className="listContainer">
        <dt className="medical listvalue">진료과</dt>
        <dd className="listvalue">
          <span>예약자명 : </span>
        </dd>
        <dd className="listvalue">
          진료내용 <span>예약일자</span>
        </dd>
      </dl>
    </ListWrap>
  );
}
export default AppointmentList;

const ListWrap = styled.div`
  width: 100%;
  height: 260px;
  overflow: scroll;
  border: 1px solid lightgray;
  border-radius: 5px;
  .listContainer {
    margin: 30px;
    display: block;
    text-align: start;
    border-bottom: 1px solid lightgray;
    font-size: 14px;
    color: #333;
    font: 14px "Noto Sans KR", sans-serif;
    .medical {
      padding-left: 30px;
    }
    .listvalue {
      margin: 0;
      padding-left: 30px;
      margin-bottom: 6px;
    }
  }
`;
