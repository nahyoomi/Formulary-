import { useState } from "react";
import ListOfUsers from "./components/ListOfUsers/ListOfUsers";
import ModalAddingUser from "./components/ModalAddingUser/ModalAddingUser";
import "./App.css";

export default function App() {
  const [showModal, setShowModal] = useState(false);
  const [users, setUsers] = useState(null);

  const handleAddBtn = () => {
    setShowModal(true);
  };

  return (
    <div className="App">
      <h2 className="h2-title">Students Registration</h2>
      <button className="btn-addUser" onClick={handleAddBtn}>
        Add a new user
      </button>
      {showModal && (
        <ModalAddingUser
          setShowModal={setShowModal}
          users={users}
          setUsers={setUsers}
        />
      )}
      <ListOfUsers users={users} setUsers={setUsers} />
    </div>
  );
}
