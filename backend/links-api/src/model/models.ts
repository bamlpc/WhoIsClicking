import {
  isEmail,
  isString,
  isDate,
  isBool,
  nullable,
  lengthBetween,
  required,
} from "deps";

// creating interface and Schema to check and validate types of the login information
interface Login{
  username: string;
  password: string;
}

const loginSchema = {
  username: [ required, isEmail, lengthBetween(7, 100) ],
  password: [ required, isString, lengthBetween(6, 100) ]
}



//just an example of the interfaces and schemas to makeit easier to remember
interface ITodo {
  name: string;
  tittle: string;
  description?: string;
  done: boolean;
  color?: string;
  end_at?: Date;
  created_at: Date;
  updated_at?: Date;
}

const todoSchema = {
  name: [lengthBetween(5, 100), isString, required],
  tittle: [lengthBetween(5, 100), isString, required],
  description: [isString, nullable],
  done: [isBool, required],
  color: [isString, nullable],
  end_at: [isDate, nullable],
  created_at: [isDate, required],
  updated_at: [isDate, nullable],
};


export { loginSchema, todoSchema };
export type { Login, ITodo };
