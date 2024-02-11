import "./card.css";
import clsx from "clsx";
import useListingsStore from "~/(store)/store";

function CardType({ type }: { type: "NEW" | "FEATURED" }) {
  const isNew = type === "NEW";
  const isFeatured = type === "FEATURED";
  return (
    <li
      className={clsx("flex min-h-6 items-center rounded-2xl px-[0.513rem]", {
        "bg-primary-desaturated-dark-cyan": isNew,
        "bg-neutral-very-dark-grayish-cyan": isFeatured,
      })}
    >
      <span className="font-center-adjust relative text-sm font-bold text-white">
        {isNew ? "NEW!" : "FEATURED"}
      </span>
    </li>
  );
}

export default function Card({
  id,
  logo,
  company,
  new: isNew,
  featured: isFeatured,
  position,
  role,
  level,
  postedAt,
  contract,
  location,
  languages,
  tools,
}: Listing) {
  const { setFilter } = useListingsStore();

  function handleClick(e: React.MouseEvent<HTMLElement>) {
    // event delegation
    const { nodeName, textContent } = e.target as HTMLElement;
    console.log(nodeName);
    if ((nodeName === "BUTTON" || nodeName === "SPAN") && textContent) {
      setFilter(textContent);
    }
  }

  function getListingLabel() {
    let label;
    if (isNew && isFeatured) {
      label = "New and Featured Job Listing";
    } else if (isNew) {
      label = "New Job Listing";
    } else if (isFeatured) {
      label = "Featured Job Listing";
    } else {
      label = "Job Listing";
    }
    return label;
  }

  return (
    <article aria-label={`${getListingLabel()} ${id}`}>
      <div
        className={clsx(
          "box-shadow relative rounded-md bg-white p-6 md:flex md:items-center md:gap-[1.438rem] md:px-10 md:py-8",
          {
            "featured md:pl-[calc(2.5rem-0.313rem)]": isFeatured,
          },
        )}
      >
        {/* img */}
        <div className="absolute -top-6 md:relative md:top-0">
          <div className="h-12 w-12 rounded-full md:h-[5.5rem] md:w-[5.5rem]">
            <img src={logo} alt={`${company} logo`} className="h-full" />
          </div>
        </div>
        {/* content */}
        <div className="mt-2 flex flex-col gap-[0.875rem] md:mt-0 md:flex-1 md:gap-[0.75rem] lg:gap-[0.4rem]">
          <div className="flex flex-wrap items-center gap-[0.5rem] xs:gap-4">
            <h1 className="text-[0.938rem] font-bold leading-[0.875rem] text-primary-desaturated-dark-cyan md:text-lg md:leading-[1.063rem]">
              {company}
            </h1>
            {isNew || isFeatured ? (
              <ul className="flex gap-2" aria-hidden="true">
                {isNew && <CardType type={"NEW"} />}
                {isFeatured && <CardType type={"FEATURED"} />}
              </ul>
            ) : null}
          </div>
          <div className="flex flex-col gap-[1.125rem] md:gap-4 lg:flex-row lg:flex-wrap lg:items-center lg:justify-between lg:gap-[0.4rem]">
            <div className="md:order-1">
              <h2 className="w-fit cursor-pointer text-[0.938rem] font-bold leading-[0.875rem] text-neutral-very-dark-grayish-cyan hover:text-primary-desaturated-dark-cyan md:text-[1.375rem] md:leading-5">
                <a href="#" title={`Apply for this position.`}>
                  {position}
                </a>
              </h2>
            </div>
            <section
              id={`card-info-${id}`}
              aria-label={`Listing ${id} Information`}
              className="md:order-3 md:basis-full"
            >
              <ul className="info flex flex-wrap items-center gap-2 md:gap-[1.125rem]">
                {[
                  { label: "Date Posted", content: postedAt },
                  { label: "Contract Type", content: contract },
                  { label: "Location", content: location },
                ].map(({ label, content }, i) => (
                  <li key={i} aria-label={label}>
                    {content}
                  </li>
                ))}
              </ul>
            </section>
            <div className="md:order-2">
              <hr
                aria-hidden="true"
                className="mb-[1.125rem] h-[0.063rem] border-neutral-dark-grayish-cyan/60 md:hidden"
              />
              <section
                id={`card-cats-${id}`}
                aria-label={`Listing ${id} Categories`}
              >
                <ul className="categories">
                  {[role, level, languages, tools].flat().map((cat, i) => (
                    <li key={i} aria-label={cat}>
                      <button
                        className="min-h-[1.875rem]"
                        aria-label={`${cat} Filter`}
                        type="button"
                        aria-haspopup="dialog"
                        onClick={handleClick}
                      >
                        <span className="font-center-adjust">{cat}</span>
                      </button>
                    </li>
                  ))}
                </ul>
              </section>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
