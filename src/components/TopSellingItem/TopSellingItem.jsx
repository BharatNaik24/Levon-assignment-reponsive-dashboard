import "./TopSellingItem.css";

function TopSellingItem({ topSell }) {
  return (
    <tr>
      <th scope="row">
        <a href="#">
          <img src={topSell.preview} alt="ppv" />
        </a>
      </th>
      <td>
        <a href="#" className="text-primary fw-bold">
          {topSell.name}
        </a>
      </td>
      <td>${topSell.price.toFixed(2)}</td>
      <td className="fw-bold">{topSell.sold}</td>
      <td>${(topSell.price * topSell.sold).toLocaleString("en-US")}</td>
    </tr>
  );
}

export default TopSellingItem;
