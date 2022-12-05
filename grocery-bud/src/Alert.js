import React from "react";

export default function Alert({ alert, removeAlert ,list} /* { msg,type}*/) {
  React.useEffect(() => {
    const timeout = setTimeout(() => {
      removeAlert();
    }, 3000);
    return ()=> clearTimeout(timeout);
  }, [list]);
  const { type, msg } = alert;
  return <p className={`alert alert-${type}`}>{msg}</p>;
}
