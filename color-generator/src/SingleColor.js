import React from "react";
import rgbToHEX from "./utils";

export default function SingleColor({ rgb, weight, index, hexColor }) {
  const [alert, setAlert] = React.useState(false);
  const bcg = rgb.join(","); //converting the rgb to string
  const hex = rgbToHEX(...rgb);
  console.log(hexColor);
  //WE VAN USE hex from the untils,rgbToHEX() function or using hexColor from the property of color object
  React.useEffect(() => {
    const timeout = setTimeout(() => {
      setAlert(false);
    }, 3000);
    return () => clearTimeout(timeout);
  }, [alert]);
  // React.useEffect(() => {
  // const timeout = setTimeout(() => {
  //   setAlert(false);
  // }, 3000);
  //  return () => clearTimeout(timeout);
  //}, [alert]);
  return (
    <article
      className={`color ${index > 10 && "color-light"}`}
      style={{ backgroundColor: `rgb(${bcg})` }}
      onClick={() => {
        setAlert(true);
        navigator.clipboard.writeText(hex);
      }}
    >
      <p className="percent-value">{weight}%</p>
      <p className="color-value"> {hex}</p>
      {alert && <p className="alert"> copied to clipboard</p>}
    </article>
  );
}
