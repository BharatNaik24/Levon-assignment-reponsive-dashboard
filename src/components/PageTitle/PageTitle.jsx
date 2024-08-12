import PropTypes from "prop-types";
import "./PageTitle.css";

function PageTitle({ page }) {
  return (
    <div className="pagetitle">
      <h1>{page}</h1>
      <nav>
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <a href="/">
              <i className="bi bi-house-door doorIcon"></i>
            </a>
          </li>
          <li className="breadcrumb-item active">{page}</li>
        </ol>
      </nav>
    </div>
  );
}

PageTitle.propTypes = {
  page: PropTypes.string.isRequired,
};

export default PageTitle;
