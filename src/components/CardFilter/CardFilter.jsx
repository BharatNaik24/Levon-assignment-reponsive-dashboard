function CardFilter({ filterChange }) {
  return (
    <div className="filter">
      <a className="icon" href="#" data-bs-toggle="dropdown">
        <i className="bi bi-three-dots"></i>
      </a>
      <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
        <li className="dropdown-header text-start">
          <h6>Filter</h6>
        </li>
        <li className="dropdown-item" onClick={() => filterChange("Today")}>
          <a>Today</a>
        </li>
        <li
          className="dropdown-item"
          onClick={() => filterChange("This Month")}
        >
          <a>This Month</a>
        </li>
        <li className="dropdown-item" onClick={() => filterChange("This Year")}>
          <a>This Year</a>
        </li>
      </ul>
    </div>
  );
}

export default CardFilter;
