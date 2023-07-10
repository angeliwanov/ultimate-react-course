import "../styles/Order.css";

function Order({ openHour, closeHour }) {
  return (
    <div className="order">
      <h2>{`We are open from ${openHour} until ${closeHour}. You can visit us or order online`}</h2>
      <button className="btn">Order</button>
    </div>
  );
}

export default Order;
