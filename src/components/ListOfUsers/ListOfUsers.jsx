import { useEffect } from "react";
import * as API from "../../services/utils";
import {deleteUser} from '../../services/utils';
import "./ListOfUsers.css";

const ListOfUsers = ({ users, setUsers }) => {
  useEffect(() => {
    API.getAllUsers().then(setUsers).catch(console.log);
  }, []);

  if (users === null) {
    return <span>Charging</span>;
  } else if (users.length === 0) {
    return <span>No users registered</span>;
  }

  const handleDelete = (id) => {
    alert(`Deleting ${id}`);
    let array = deleteUser(users, id);
    setUsers(array);
  };

  return (
    <ul className="list_container">
      {users.map((user) => (
        <li className="list_item" key={user.id}>
          <div className="item_info">
            <p className="p_name">{user.name}</p>
            <button
              className="btn_delete"
              onClick={() => {
                handleDelete(user.id);
              }}
            >
              Delete
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default ListOfUsers;