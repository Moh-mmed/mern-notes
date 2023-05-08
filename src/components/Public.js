import { Link } from "react-router-dom";

const Public = () => {
  const content = (
    <section className="public">
      <header>
        <h1>
          Welcome to <span className="nowrap">MERN notes application!</span>
        </h1>
      </header>
      <main className="public__main">
        <p>
          Located in heart of downtown City, MERN notes provides a trained staff
          ready to meet your tech needs.
        </p>
        <address className="public__addr">
          MERN notes application
          <br />
          123 Main Street
          <br />
          Anytown, USA 98765
          <br />
          <a href="tel:+15555555555">(555) 555-5555</a>
        </address>
        <br />
        <p>Owner: Mohammed Ben Aoumeur</p>
      </main>
      <footer>
        <Link to="/login">Employee Login</Link>
      </footer>
    </section>
  );
  return content;
};
export default Public;
