import { styles, stylex } from "../styles";


export const TopSection = () => {
  return (
    <div className="pt-8 text-center overflow-hidden">
          <h1 style={{
              transform: 'perspective(2000px) rotateY(-25deg)',
              textShadow: '10px 2px 10px #000',
          }} className="text-3xl font-star-jedi font-bold text-gray-100 border-black" >
        Welcome to my profile page
      </h1>

      <span className="pt-6 block" />
      <div >
        <p {...stylex.props(styles.p)} className="text-xl">Have a look at my projects below</p>
      </div>
    </div >
  );
};
