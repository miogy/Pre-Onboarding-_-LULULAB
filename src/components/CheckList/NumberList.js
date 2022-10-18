import styled from "styled-components";

function NumberList() {
  return (
    <ListWrap>
      <div>list</div>
    </ListWrap>
  );
}
export default NumberList;

const ListWrap = styled.div`
  width: 90%;
  margin: 0 auto;
  border-radius: 5px;
  div {
    width: 100%;
    text-align: center;
    padding-top: 30px;
  }
`;
