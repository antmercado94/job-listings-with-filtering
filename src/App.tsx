import Banner from "~/components/Banner";
import Filters from "~/components/Filters";
import Listings from "./components/Listings";

function App() {
  return (
    <main>
      <Banner />
      <Filters />
      <Listings />
      <aside className="sr-only" aria-label="attribution">
        Challenge by Frontend Mentor. Coded by Antonio Mercado.
        <a
          href="https://www.frontendmentor.io?ref=challenge"
          aria-label="View Front End Mentor Website"
        />
      </aside>
    </main>
  );
}

export default App;
