import "./RegisterModal.css";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { useEffect, useContext } from "react";
import { useForm } from "../../Hooks/useForm";
import { currentUserContext } from "../../contexts/currentUserContext";

function RegisterModal({
  onClose,
  isOpen,
  onLoginClick,
  IsLoading,
  onRegister,
}) {
  const currentUser = useContext(currentUserContext);
  const inputValues = {
    email: "",
    password: "",
    username: "",
  };

  const { values, handleChange, errors, isValid, resetForm } = useForm(
    inputValues,
    currentUser
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isValid) {
      onRegister(values);
    }
  };

  useEffect(() => {
    resetForm(inputValues);
  }, [isOpen]);

  return (
    <ModalWithForm
      isOpen={isOpen}
      onSubmit={handleSubmit}
      onClose={onClose}
      title="Sign up"
      name="signup"
      buttonText={IsLoading ? "Loading..." : "Sign up"}
      buttonText2={"or Log in"}>
      <label htmlFor="email2" className="modal__label">
        Email
        <input
          className={`modal__input ${
            errors.email ? "modal__input_type_error" : ""
          }`}
          type="email"
          name="email"
          id="email2"
          placeholder="Email"
          value={values.email}
          onChange={handleChange}
          required
        />
        <span className="modal__error">{errors.email}</span>
      </label>
      <label htmlFor="password2" className="modal__label">
        Password
        <input
          className="modal__input"
          type="password"
          name="password"
          id="password2"
          placeholder="Password"
          value={values.password}
          onChange={handleChange}
          required
        />
        <span className="modal__error">{errors.password}</span>
      </label>
      <label htmlFor="username1" className="modal__label">
        Username
        <input
          className="modal__input"
          type="text"
          name="username"
          id="username1"
          placeholder="Username"
          value={values.username}
          onChange={handleChange}
          required
        />
        <span className="modal__error">{errors.username}</span>
      </label>
      <button type="submit" className="register-modal__signup-button">
        Sign up
      </button>
      <button
        onClick={onLoginClick}
        type="button"
        className="register-modal__login-button">
        {" "}
        or Log in
      </button>
    </ModalWithForm>
  );
}
export default RegisterModal;
