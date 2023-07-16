import "./YearFilter.css";

const YearFilter = (props) => {
  const yearChangeHandler = (event) => {
    props.onChangeFilter(event.target.value);
  };

  return (
    <div className="year-filter">
      <div className="year-filter__control">
        <label>Filter by year</label>
        <select value={props.selected} onChange={yearChangeHandler}>
          <option value="2023">2023</option>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
        </select>
      </div>
    </div>
  );
};

export default YearFilter;
