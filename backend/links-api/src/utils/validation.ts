import { firstMessages, validate } from "deps";
import { todoSchema, loginSchema, Login } from "../model/models.ts";

const validateTodo = async (todo: Object) => {
  const [passes, errors] = await validate(todo, todoSchema);
  if (!passes) {
    throw firstMessages(errors);
  }
  return true;
};

// validating email and password before creating the account
const validateLoginInformation = async (login: Login) => {
  const [passes, errors] = await validate(login, loginSchema);
  if (!passes) {
    throw firstMessages(errors);
  }
  return true;
};

export { validateTodo, validateLoginInformation };


