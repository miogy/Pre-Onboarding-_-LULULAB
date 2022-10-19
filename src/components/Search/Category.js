function Category({ tab, setTab }) {
  return (
    <ul className="categoryTab">
      <li
        className={tab === 0 ? "active" : ""}
        onClick={() => {
          setTab(0);
        }}
      >
        예약확인
      </li>
      <li
        className={tab === 1 ? "active" : ""}
        onClick={() => {
          setTab(1);
        }}
      >
        예약취소
      </li>
    </ul>
  );
}
export default Category;
