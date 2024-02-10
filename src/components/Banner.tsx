export default function Banner() {
  return (
    <div
      className="relative flex h-[9.75rem] w-full bg-primary-desaturated-dark-cyan"
      aria-hidden="true"
    >
      <picture className="relative flex w-full">
        <source media="(max-width: 640px)" srcSet="/bg/bg-header-mobile.svg" />
        <source media="(min-width: 640px)" srcSet="/bg/bg-header-desktop.svg" />
        <img
          style={{ objectFit: "cover", width: "100%" }}
          src="/bg/bg-header-desktop.svg"
          alt=""
        />
      </picture>
    </div>
  );
}
