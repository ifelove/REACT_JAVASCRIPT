import React, { useContext } from "react";
import { FaBars } from "react-icons/fa";
import { useGlobalContext } from "./context";
//import {AppContext, useGlobalContex } from "./context";(if we are to use the other way round)
const Home = () => {
  //const data=useContext(AppContext) in can assign it direectly instead of importing usecontext each time we need
//const data = useGlobalContex()

  //console.log(data);
  const {openModal,openSidebar} = useGlobalContext();
  return (
    <main>
      <button className="sidebar-toggle" onClick={openSidebar}>
        <FaBars />
      </button>
      <button className="btn" onClick={openModal}>Show modal</button>
    </main>
  );
};

export default Home;
