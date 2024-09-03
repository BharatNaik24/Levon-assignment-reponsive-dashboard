import "./RecentSalesTable.css";

// Function to handle status and return corresponding badge class
const handleStatus = (status) => {
  switch (status) {
    case "Approved":
      return "success";
    case "Pending":
      return "warning";
    case "Rejected":
      return "danger";
    default:
      return "success";
  }
};

function RecentSalesTable({ recentSale }) {
  return (
    <table
      className="table table-borderless datatable"
      style={{
        fontSize: "14px",
      }}
    >
      <thead className="table-light">
        <tr>
          <th className="col">S.no</th>
          <th className="col">Customer</th>
          <th className="col">Product</th>
          <th className="col">Price</th>
          <th className="col">Status</th>
        </tr>
      </thead>
      <tbody>
        {recentSale && recentSale.length > 0 ? (
          recentSale.map((eachItem) => (
            <tr key={eachItem._id}>
              <th scope="row">
                <a
                  href=""
                  style={{
                    fontWeight: "700",
                  }}
                >
                  {eachItem.number}
                </a>
              </th>
              <td>
                <a
                  href=""
                  style={{
                    color: "#000",
                    fontWeight: "700",
                  }}
                >
                  {eachItem.customer}
                </a>
              </td>
              <td>
                <a
                  href=""
                  style={{
                    color: "",
                    fontWeight: "700",
                  }}
                >
                  {eachItem.product}
                </a>
              </td>
              <td>
                <a
                  href=""
                  style={{
                    color: "#000",
                    fontWeight: "700",
                  }}
                >
                  ${parseFloat(eachItem.price).toFixed(2)}
                </a>
              </td>
              <td>
                <span
                  className={`badge bg-${handleStatus(eachItem.status)}`}
                  style={{
                    fontWeight: "700",
                    fontSize: "14px",
                  }}
                >
                  {eachItem.status}
                </span>
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan="5">No recent sales data available</td>
          </tr>
        )}
      </tbody>
    </table>
  );
}

export default RecentSalesTable;
