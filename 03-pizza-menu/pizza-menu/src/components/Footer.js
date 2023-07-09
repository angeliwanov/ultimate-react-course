import "../styles/Footer.css";

function Footer() {
  let currentHour = new Date().getHours();
  const isOpen = currentHour >= 8 && currentHour <= 20;

  return (
    <footer className="footer">
      <div className="order">
        <h2>
          {isOpen
            ? "We are open until 20:00. You can visit us or order online."
            : "Sorry, we are closed :("}
        </h2>
        <button className="btn">Order</button>
      </div>
    </footer>
  );
}

export default Footer;
