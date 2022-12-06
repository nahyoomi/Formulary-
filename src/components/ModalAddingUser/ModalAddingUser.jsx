import UserFormulary from "../UserFormulary/UserFormulary";
import "./ModalAddingUser.css";

const ModalAddingUser = ({ setShowModal, users, setUsers }) => {
  const handleClose = () => {
    setShowModal(false);
  };

  return (
    <div className="container">
      <div className="modal">
        <div className="modal_header">
          <button className="btnClose_modal" onClick={handleClose}>
            X
          </button>
        </div>
        <div className="content_form">
          <UserFormulary
            users={users}
            setUsers={setUsers}
            setShowModal={setShowModal}
          />
        </div>
      </div>
    </div>
  );
};

export default ModalAddingUser;