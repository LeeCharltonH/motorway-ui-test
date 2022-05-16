import { useState } from "react";

const useInput = (validate) => {
    const [enteredVal, setEnteredVal] = useState('');
    const [touched, setTouched] = useState(false);

    const valueValidity = validate(enteredVal);
    const error = !valueValidity && touched;

    const changeHandler = e => {
        setEnteredVal(e.target.value)
    }
    const blurHandler = e => {
        setTouched(true);
    }

    const reset = () => {
        setEnteredVal('');
        setTouched(false);
    }

    return {
        value: enteredVal,
        isValid: valueValidity,
        error,
        changeHandler,
        blurHandler,
        reset
    }
 }

export default useInput;