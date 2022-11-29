import React from "react";
import "./App.css";
import Menu from "./Menu";
import Categories from "./Categories";
import items from "./data";

const allCategories = ["all", ...new Set(items.map((item) => item.category))];
console.log(allCategories);

function App() {
  const [menuItems, setMenuItems] = React.useState(items);
  const [categories, setCategories] = React.useState(allCategories);

  function filterItems(category) {
    if (category === "all") {
      setMenuItems(items);
      return;
    }
    const newItem = items.filter((item) => {
      if (item.category === category) return item;
    });
    setMenuItems(newItem);
  }

  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>Our Menu</h2>
          <div className="underline"></div>
        </div>
        <Categories categories={categories} filterItems={filterItems} />
        <Menu items={menuItems} />
      </section>
    </main>
  );
}

export default App;
