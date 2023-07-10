import "../styles/Footer.css";
import Order from "./Order";

function Footer() {
  let currentHour = new Date().getHours();
  // let currentHour = 7;
  const openHour = 8;
  const closeHour = 20;
  const isOpen = currentHour >= openHour && currentHour <= closeHour;

  return (
    <footer className="footer">
      {isOpen ? (
        <Order openHour={openHour} closeHour={closeHour} />
      ) : (
        <h2>
          Sorry, we are currently closed. We will be working again tomorrow from
          8 until 20 o'clock.
        </h2>
      )}
    </footer>
  );
}

export default Footer;
