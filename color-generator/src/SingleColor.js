import React from "react";

export default function SingleColor({ rgb, weigh, index }) {
  const [alert, setAlert] = React.useState(false);
  const bcg = rgb.join(","); //converting the rgb to string
  return (
    <article
      className={"color"}
      style={{ backgroundColor: `rgb(${bcg})` }}
    ></article>
  );
}
