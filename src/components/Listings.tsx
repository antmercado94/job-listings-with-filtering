import useListingsStore from "~/(store)/store";
import Card from "~/components/card/Card";

export default function Listings() {
  const { listings, getFiltered } = useListingsStore();
  const filteredListings = getFiltered();

  return (
    <section
      className="page-margin my-[3.5rem] md:my-[4.688rem]"
      aria-label="Job listings"
    >
      <div className="flex flex-col gap-10 md:gap-6">
        {filteredListings
          ? filteredListings.map((listing) => (
              <Card key={listing.id} {...listing} />
            ))
          : listings.map((listing) => <Card key={listing.id} {...listing} />)}
      </div>
    </section>
  );
}
