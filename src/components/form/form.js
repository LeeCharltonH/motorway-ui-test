import styles from "./form.module.css";
import useInput from "../hooks/useInput";

const Form = (props) => {
  const date = new Date();

  const {
    value: enteredName,
    isValid: nameValidity,
    error: nameHasError,
    changeHandler: nameChanged,
    blurHandler: nameBlurred,
    reset: resetName,
  } = useInput((value) => value.trim() !== "");

  const nameStyles = nameHasError ? `${styles.error}` : "";

  const {
    value: enteredEmail,
    isValid: emailValidity,
    error: emailHasError,
    changeHandler: emailChanged,
    blurHandler: emailBlurred,
    reset: resetEmail,
  } = useInput((value) => value.includes("@"));

  const emailStyles = emailHasError ? `${styles.error}` : "";

  const {
    value: enteredBirthday,
    isValid: birthdayValidity,
    error: birthdayHasError,
    changeHandler: birthdayChanged,
    blurHandler: birthdayBlurred,
    reset: resetBirthday,
  } = useInput((value) => Date.parse(value) < Date.parse(date));

  const birthdayStyles = birthdayHasError ? `${styles.error}` : "";

  const {
    value: enteredColor,
    isValid: colorValidity,
    error: colorHasError,
    changeHandler: colorChanged,
    blurHandler: colorBlurred,
    reset: resetColor,
  } = useInput((value) => value.trim() !== "");

  const colorStyles = colorHasError ? `${styles.error}` : "";

  const {
    value: enteredSalary,
    isValid: salaryValidity,
    error: salaryHasError,
    changeHandler: salaryChanged,
    blurHandler: salaryBlurred,
    reset: resetSalary,
  } = useInput((value) => value > 0);

  const salaryStyles = salaryHasError ? `${styles.error}` : "";

  const submitHandler = (e) => {
    e.preventDefault();

    const formData = {
      name: enteredName,
      email: enteredEmail,
      birthday: enteredBirthday,
      colour: enteredColor,
      salary: parseInt(enteredSalary),
    };

    console.log(formData);

    resetName();
    resetEmail();
    resetBirthday();
    resetColor();
    resetSalary();
  };

  let formValid = false;

  if (
    nameValidity &&
    emailValidity &&
    birthdayValidity &&
    colorValidity &&
    salaryValidity
  ) {
      formValid = true;
  }

  return (
    <div className={styles.formBackdrop}>
      <form onSubmit={submitHandler}>
        <button
          onClick={() => props.setForm((state) => !state)}
          className={styles.closeBtn}
        >
          Close
        </button>
        <div className={styles.inputContainer}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={enteredName}
            onChange={nameChanged}
            onBlur={nameBlurred}
            className={nameStyles}
          />
          {nameStyles && <p>Please enter a valid name</p>}
        </div>
        <div className={styles.inputContainer}>
          <label htmlFor="email">Email</label>
          <input
            type="text"
            id="email"
            name="email"
            value={enteredEmail}
            onChange={emailChanged}
            onBlur={emailBlurred}
            className={emailStyles}
          />
          {emailStyles && <p>Please enter a valid email</p>}
        </div>
        <div className={styles.inputContainer}>
          <label htmlFor="birthday">Birthday</label>
          <input
            type="date"
            id="birthday"
            name="birthday"
            value={enteredBirthday}
            onChange={birthdayChanged}
            onBlur={birthdayBlurred}
            className={birthdayStyles}
          />
          {birthdayStyles && <p>Entered birthday must be before today</p>}
        </div>
        <div className={styles.inputContainer}>
          <label htmlFor="favcolor">Select your favourite colour:</label>
          <div>
            <input
              type="color"
              id="favcolor"
              name="favcolor"
              value={enteredColor}
              onChange={colorChanged}
              onBlur={colorBlurred}
              className={colorStyles}
            />
            {colorStyles && (
              <p>Please use the colour picker to select a colour</p>
            )}
          </div>
        </div>
        <div className={styles.inputContainer}>
          <label htmlFor="salary">Salary</label>
          <div className={styles.range}>
            £0
            <div>
              <input
                type="range"
                id="salary"
                name="salary"
                min="0"
                max="100000"
                onChange={salaryChanged}
                onBlur={salaryBlurred}
                className={salaryStyles}
              />
            </div>
            £100,000
          </div>
          {salaryStyles && <p>Please select a salary greater than £0</p>}
          <div className={styles.salaryOutput}>
            {`Selected salary £${
              enteredSalary == 0
                ? "0"
                : parseInt(enteredSalary).toLocaleString("en-UK")
            }`}
          </div>
        </div>
        <button disabled={!formValid} type="submit" className={styles.submitBtn}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
