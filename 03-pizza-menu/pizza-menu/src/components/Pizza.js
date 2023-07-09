import "../styles/Pizza.css";

function Pizza({ pizza }) {
  return (
    !pizza.soldOut && (
      <li className="pizza" key={pizza.name}>
        <img src={pizza.photoName} alt="pizza"></img>
        <div>
          <h3>{pizza.name}</h3>
          <p>{pizza.ingredients}</p>
          <span>$ {pizza.price}</span>
        </div>
      </li>
    )
  );
}

export default Pizza;
