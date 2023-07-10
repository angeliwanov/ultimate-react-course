import "../styles/Pizza.css";

function Pizza({ pizza }) {
  return (
    <li className={`pizza ${pizza.soldOut ? "sold-out" : ""}`} key={pizza.name}>
      <img src={pizza.photoName} alt="pizza"></img>
      <div>
        <h3>{pizza.name}</h3>
        <p>{pizza.ingredients}</p>
        <span>{pizza.soldOut ? "SOLD OUT" : `$ ${pizza.price}`}</span>
      </div>
    </li>
  );
}

export default Pizza;
