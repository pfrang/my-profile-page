import { h1, p } from "../fonts/fonts.ts";

export const TopSection = () => {
  return (
    <section className="pt-8 text-center">
      <h1 className={`${h1.className} text-[#0c3b66] text-2xl`}>
        Welcome to my profile page
      </h1>

      <span className="pt-6 block" />
      <div className={p.className}>
        <p className="text-xl">Have a look at my projects below</p>
      </div>
    </section>
  );
};
