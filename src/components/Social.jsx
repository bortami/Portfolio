import React from "react";
import {
  FaFacebookF,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaPinterestP,
} from "react-icons/fa";

const SocialShare = [
  { Social: <FaFacebookF />, link: "https://www.facebook.com/mtabor66" },
  { Social: <FaGithub />, link: "https://github.com/mtabor66" },
  { Social: <FaInstagram />, link: "https://www.instagram.com/bortami" },
  { Social: <FaLinkedinIn />, link: "https://www.linkedin.com/in/mtabor66" },
  { Social: <FaPinterestP />, link: "https://www.pinterest.com/bortami" },
];

const Social = () => {
  return (
    <div className="nav social-icons justify-content-center">
      {SocialShare.map((val, i) => (
        <a key={i} href={`${val.link}`} rel="noreferrer" target="_blank">
          {val.Social}
        </a>
      ))}
    </div>
  );
};

export default Social;
