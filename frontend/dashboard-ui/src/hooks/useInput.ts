import useLocalStorage from "./useLocalStorage";

const useInput = (key, initValue) => {
  const [value, setValue] = useLocalStorage(key, initValue);

  const reset = () => setValue(initValue);ç

  const attributeObject = {
    value,
    onChange: (e) => setValue(e.target.value)
  }

  return [value, reset, attributeObject];
}

export default useInput;