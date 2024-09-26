import { FaGithub } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import { styles, stylex } from "../styles";

const socialMedia = {
  Github: {
    icon: <FaGithub size={30} />,
    url: "https://github.com/pfrang",
  },
  Twitter: {
    icon: <BsTwitter size={30} />,
    url: "https://twitter.com/FrangPeder",
  },
};
type SocialMedia = keyof typeof socialMedia;

export const BottomSection = () => {
  return (
    <div className="flex items-center justify-center gap-4">
      {Object.keys(socialMedia).map((some) => {
        return (
          <div className="flex justify-center">
            <a
              className="flex flex-col items-center hover:text-blue-500"
              href={socialMedia[some as SocialMedia].url}
              target="_blank"
            >
              <p {...stylex.props(styles.p)} className={`text-xl`}>{some}</p>
              {socialMedia[some as SocialMedia].icon}
            </a>
          </div>
        );
      })}
    </div>
  );
};
