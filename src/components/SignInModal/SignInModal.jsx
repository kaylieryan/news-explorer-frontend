import { useEffect, useContext } from "react";
import "./SignInModal.css";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { useForm } from "../../Hooks/useForm";
import { currentUserContext } from "../../contexts/currentUserContext";
const SignInModal = ({
  isOpen,
  onClose,
  onRegisterClick,
  onLogInClick,
  IsLoading,
  onLogIn,
}) => {
  const currentUser = useContext(currentUserContext);
  const inputValues = {
    email: "",
    password: "",
  };

  const { values, handleChange, errors, isValid, resetForm } = useForm(
    inputValues,
    currentUser
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isValid) {
      onLogIn(values);
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
      title="Sign in"
      buttonText={IsLoading ? "Loading..." : "Sign in"}
      ButtonText2="or Sign up">
      <label htmlFor="email1" className="modal__label">
        Email
        <input
          className={`modal__input ${errors.email ? "modal__input-error" : ""}`}
          type="email"
          name="email"
          id="email1"
          placeholder="Email"
          value={values.email}
          onChange={handleChange}
          required
        />
      </label>
      <label htmlFor="password" className="modal__label">
        Password
        <input
          className={`modal__input ${
            errors.password ? "modal__input-error" : ""
          }`}
          type="password"
          name="password"
          id="password"
          placeholder="Password"
          value={values.password}
          onChange={handleChange}
          required
        />
      </label>
      <button type="submit" onClick={onLogInClick} className="Login__button">
        Sign in
      </button>
      <button onClick={onRegisterClick} className="Or-Sign-Up__button">
        {" "}
        or Sign up
      </button>
    </ModalWithForm>
  );
};

export default SignInModal;
