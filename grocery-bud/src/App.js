import React from "react";
import List from "./List";
import Alert from "./Alert";
import "./App.css";

const getLocalStorage = ()=>{
let list=localStorage.getItem("list");
if(list) return JSON.parse(list)
else return list=[]}
function App() {
  const [name, setName] = React.useState("");
  const [list, setList] = React.useState(getLocalStorage());
  const [isEditing, setIsEditing] = React.useState(false);
  const [editID, setEditID] = React.useState(null);
  const [alert, setAlert] = React.useState({
    show: false,
    msg: "",
    type: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("go");
    if (!name) {
      //Display Alert
      showAlert(true, "danger", "Please Enter Value");
    } else if (name && isEditing) {
      //Deal with Edit
      const newList = list.map((item) => {
        if (item.id === editID) return { ...item, title: name };
        //because we r editing only the name
        return item; //we need to return the item so all the item present will show
      });
      setList(newList);
      setName("");
      setEditID(null);
      setIsEditing(false);
      showAlert(true, "success", "value changed");
    } else {
      //show alert
      showAlert(true, "success", "Item Added");
      const newItem = { id: new Date().getTime().toString(), title: name };
      setList([...list, newItem]);
      setName("");
    }
  };

  const showAlert = (show = false, type = "", msg = "") => {
    setAlert({ show, type, msg });
  };
  function clearList() {
    showAlert(true, "danger", "Empty List");
    setList([]);
  }
  const removeItem = (id) => {
    showAlert(true, "danger", "Item removed");
    const newList = list.filter((item) => {
      if (item.id !== id) return item;
    });
    setList(newList);
  };
  const editItem = (id) => {
    const toBeEdited = list.find((item) => {
      if (item.id === id) return item;
    });
    setIsEditing(true);
    setEditID(id);
    setName(toBeEdited.title);
  };
  React.useEffect(()=>{

    localStorage.setItem("list",JSON.stringify(list))
  },[list])
  return (
    <section className="section-center">
      <form className="grocery-form" onSubmit={handleSubmit}>
        {alert.show && (
          <Alert alert={alert} /* {...alert}*/ removeAlert={showAlert} />
        )}

        <h3>Grocery Bud</h3>
        <div className="form-control">
          <input
            type="text"
            className="grocery"
            placeholder="e.g Egg"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button type="submit" className="submit-btn" onClick={handleSubmit}>
            {isEditing ? "Edit" : "Submit"}
          </button>
        </div>
      </form>
      {list.length > 0 && (
        <div className="grocery-container">
          <List
            items={list}
            removeItem={removeItem}
            list={list}
            editItem={editItem}
          />
          <button className="clear-btn" onClick={() => clearList()}>
            Clear Items
          </button>
        </div>
      )}
    </section>
  );
}

export default App;
