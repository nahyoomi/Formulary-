import { useForm } from "react-hook-form";
import "./UserFormulary.css";

const UserFormulary = ({ setUsers, setShowModal, users }) => {
  const {
    handleSubmit,
    register,
    formState: { errors }
  } = useForm();

  const customSubmit = (user) => {
    user = {
      ...user,
      id: Math.floor(Math.random() * 1000),
      address: {
        street: "Kulas Light",
        suite: "Apt. 556",
        city: "Gwenborough",
        zipcode: "92998-3874",
        geo: {
          lat: "-37.3159",
          lng: "81.1496"
        }
      },
      company: {
        name: "Romaguera-Crona",
        catchPhrase: "Multi-layered client-server neural-net",
        bs: "harness real-time e-markets"
      }
    };
    console.log("esta es dat", user);

    let copiedUsers = users;
    copiedUsers.unshift(user);
    setUsers(copiedUsers);
    setShowModal(false);
    console.log(users);
  };

  return (
    <form onSubmit={handleSubmit(customSubmit)} className="form_container">
      <div className="form_box">
        <div className="each_box">
          <label>Name</label>
          <input
            type="text"
            {...register("name", {
              required: true,
              minLenght: 3,
              pattern: /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/
            })}
          />
          {errors.name?.type === "required" && "This information is required"}
          {errors.name?.type === "minLenght" &&
            "Name must be more than 3 characters"}
          {errors.name?.type === "pattern" && "Only allow letters"}
        </div>
        <div className="each_box">
          <label>Username</label>
          <input
            type="text"
            {...register("username", {
              required: true,
              minLenght: 3
            })}
          />
          {errors.username?.type === "required" &&
            "This information is required"}
          {errors.username?.type === "minLenght" &&
            "Username must be more than 3 characters"}
        </div>
        <div className="each_box">
          <label>Email</label>
          <input
            type="email"
            {...register("email", {
              required: true,
              pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/i
            })}
          />
          {errors.email?.type === "required" && "This information is required"}
          {errors.email?.type === "pattern" && "Email format is not correct"}
        </div>
        <div className="each_box">
          <label>Phone</label>
          <input
            type="number"
            {...register("phone", {
              required: true,
              maxLenght: 10
            })}
          />
          {errors.phone?.type === "required" && "This information is required"}
          {errors.phone?.type === "maxLenght" &&
            "Phone should be at least 10 digits"}
        </div>
        <div className="each_box">
          <label>Website</label>
          <input
            type="text"
            {...register("website", {
              required: true
            })}
          />
          {errors.website?.type === "required" &&
            "This information is required"}
        </div>
      </div>
      <input type="submit" value="Submit" />
    </form>
  );
};

export default UserFormulary;