import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaPinterestP,
  FaGithub
} from "react-icons/fa";

const SocialShare = [
  { Social: <FaFacebookF />, link: "https://www.facebook.com/mtabor66" },
  // { Social: <FaTwitter />, link: "https://www.linkedin.com/in/mtabor66" },
  { Social: <FaInstagram />, link: "https://www.instagram.com/bortami" },
  { Social: <FaLinkedinIn />, link: "https://twitter.com/chelle_mico" },
  { Social: <FaPinterestP />, link: "https://www.pinterest.com/bortami" },
  {Social: <FaGithub />, link: "https://github.com/mtabor66"},
];

const Footer = () => {
  return (
    <>
      <div className="row align-items-center">
        <div className="col-md-6 my-2">
          <div className="nav justify-content-center justify-content-md-start">
            {SocialShare.map((val, i) => (
              <a key={i} href={`${val.link}`} rel="noreferrer" target="_blank">
                {val.Social}
              </a>
            ))}
          </div>
          {/* End .nav */}
        </div>
        {/* End .col */}

        <div className="col-md-6 my-2 text-center text-md-end">
          <p>
            © {new Date().getFullYear()}  {/*copyright{" "}
            <a
              href="https://themeforest.net/user/ib-themes/portfolio"
              target="_blank"
              rel="noreferrer"
            >
              ib-themes
            </a>{" "} 
            all right reserved */}
          </p>
        </div>
        {/* End .col */}
      </div>
      {/* End .row */}
    </>
  );
};

export default Footer;
