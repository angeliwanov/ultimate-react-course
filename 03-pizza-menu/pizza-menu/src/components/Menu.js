import Pizza from "./Pizza";
import "../styles/Menu.css";

function Menu({ pizzaData }) {
  return (
    <main className="menu">
      <h2>Our Menu</h2>
      <ul className="pizzas">
        {pizzaData.map((pizza) => (
          <Pizza pizza={pizza} />
        ))}
      </ul>
    </main>
  );
}

export default Menu;
