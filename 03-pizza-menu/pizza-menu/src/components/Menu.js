import Pizza from "./Pizza";
import "../styles/Menu.css";

function Menu({ pizzaData }) {
  return (
    <main className="menu">
      <h2>Our Menu</h2>
      {pizzaData.length > 0 ? (
        <>
          <p>
            Authentic Italian cuisine. 6 creative dishes to choose from. All
            from our stone oven, all organic, all delicious.
          </p>
          <ul className="pizzas">
            {pizzaData.map((pizza) => (
              <Pizza pizza={pizza} />
            ))}
          </ul>
        </>
      ) : (
        <p>We are still working on our menu. Please visit us again later.</p>
      )}
    </main>
  );
}

export default Menu;
