import useListingsStore from "~/(store)/store";
import RemoveIcon from "~/assets/icons/icon-remove.svg?react";

export default function Filters() {
  const { filters, removeFilter, clearFiltered } = useListingsStore();

  return (
    <>
      {filters.length > 0 && (
        <div role="dialog" aria-label="Filters" aria-modal="true">
          <div className="relative -top-9 -mb-9 w-full md:-mb-[4.5rem]">
            <div className="page-margin box-shadow flex items-center justify-between rounded-md bg-white p-5 md:min-h-0 md:px-10 md:py-5">
              <ul
                className="categories categories--filters"
                aria-label="Applied Filters"
              >
                {filters.map((filter) => (
                  <li key={filter}>
                    <span className="font-center-adjust">{filter}</span>
                    <button
                      onClick={() => removeFilter(filter)}
                      aria-label={`Remove ${filter} Filter`}
                    >
                      <RemoveIcon aria-hidden="true" />
                    </button>
                  </li>
                ))}
              </ul>
              <button
                className="mx-[0.375rem] h-min font-bold text-neutral-dark-grayish-cyan hover:text-primary-desaturated-dark-cyan hover:underline"
                onClick={clearFiltered}
              >
                Clear
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
