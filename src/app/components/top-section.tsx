import { styles, stylex } from "../styles";


export const TopSection = () => {
  return (
    <div className="pt-8 text-center">
      <h1 {...stylex.props(styles.h1)} >
        Welcome to my profile page
      </h1>

      <span className="pt-6 block" />
      <div >
        <p {...stylex.props(styles.p)} className="text-xl">Have a look at my projects below</p>
      </div>
    </div >
  );
};
