import React from "react";
import { FaBars, FaAccessibleIcon, FaTwitter } from "react-icons/fa";

import { links, social } from "./data";
import logo from "./logo.svg";

export default function Navbar() {
  const [showLinks, setShowLinks] = React.useState(false);
  const linkContainerRef = React.useRef(null);
  const linksRef = React.useRef(null);
  React.useEffect(() => {
    const linkHeight = linksRef.current.getBoundingClientRect().height;
    console.log(linkHeight);
    if(showLinks){linkContainerRef.current.style.height=`${linkHeight}px`}
    else linkContainerRef.current.style.height='0px'
  }, [showLinks]);
  return (
    <nav>
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} alt="logo" />
          <button
            className="nav-toggle"
            onClick={() => setShowLinks(!showLinks)}
          >
            <FaBars />
          </button>
        </div>

        {/** <div className= {`${showLinks ?  'links-container show-container':'links-container'}`}> */}
        <div className="links-container" ref={linkContainerRef}>
          <ul className="links " ref={linksRef}>
            {/* <li>
              <a href="#">home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
            <li>
              <a href="#">Product</a>
  </li> */}
            {links.map((link) => {
              const { id, url, text } = link;
              return (
                <li key={id}>
                  <a href={url}>{text}</a>
                </li>
              );
            })}
          </ul>
        </div>

        <ul className="social-icons">
          {social.map((eachIcon) => {
            const { id, url, icon } = eachIcon;
            return (
              <li key={id}>
                <a href={url}>{icon}</a>
              </li>
            );
          })}
          {/*

          <li>
            <a href="https://twitter.com/?lang=en">
              <FaTwitter />
            </a>
          </li>
          <li>
            <a href="https://twitter.com/?lang=en">
              <FaTwitter />
            </a>
          </li>
          <li>
            <a href="https://twitter.com/?lang=en">
              <FaTwitter />
            </a>
          </li>
          
          */}
        </ul>
        {/**</div> */}
      </div>
    </nav>
  );
}
