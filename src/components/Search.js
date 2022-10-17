import styled from "styled-components";
import { AiOutlineSearch } from "react-icons/ai";
import AppointmentList from "./AppointmentList";
import { useState } from "react";

//filter
function DropDown() {
  return (
    <StyledDropDown>
      <li>예약자명</li>
      <li>날짜별</li>
      <li>오름차순</li>
      <li>내림차순</li>
    </StyledDropDown>
  );
}

function Search() {
  const [dropdown, setDropdown] = useState(false);
  const dropdownHandler = () => {
    setDropdown(!dropdown);
  };
  return (
    <SearchWrap>
      <h4>예약확인</h4>
      <div className="searchContainer">
        <p>
          <AiOutlineSearch className="searchIcon" />
          <input type="text" placeholder="search" className="searchInput" />
        </p>
        <input
          type="submit"
          value="정렬하기"
          className="sortBtn"
          onClick={dropdownHandler}
        />
        {dropdown ? <DropDown /> : null}
      </div>
      <AppointmentList />
    </SearchWrap>
  );
}
export default Search;

const SearchWrap = styled.div`
  padding: 10px 40px 0 40px;
  h4 {
    font-weight: 400;
    margin: 0;
    color: #333;
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
      .searchInput {
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
`;

const StyledDropDown = styled.div`
  position: absolute;
  padding: 10px 33px 10px 34px;
  top: 55px;
  right: 0;
  background-color: rgba(255, 255, 255, 0.2);
  //border: 1px solid pink;
  //box-shadow: 1px 2px 5px pink;
  list-style: none;
  text-decoration: none;
  li {
    padding: 5px 0;
    text-align: center;
    font-size: 14px;
    color: #666;
  }
`;
