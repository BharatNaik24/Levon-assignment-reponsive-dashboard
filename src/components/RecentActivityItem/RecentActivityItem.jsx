import "./recentActivityItem.css";

function RecentActivityItem({ reacentAct }) {
  return (
    <div className="activity-item d-flex">
      <div className="activity-label">{reacentAct.time}</div>
      <i
        className={`bi bi-circle-fill activity-badge ${reacentAct.color} align-self-start`}
      ></i>
      {reacentAct.highlight === "" ? (
        <div className="activity-content">{reacentAct.content}</div>
      ) : (
        <div className="activity-content">
          {reacentAct.content.substring(
            0,
            reacentAct.content.indexOf(reacentAct.highlight)
          )}
          <a href="#" className="fw-bold text-dark">
            {reacentAct.highlight}
          </a>
          {reacentAct.content.slice(
            reacentAct.content.indexOf(reacentAct.highlight) +
              reacentAct.highlight.length
          )}
        </div>
      )}
    </div>
  );
}

export default RecentActivityItem;
