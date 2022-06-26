//TODO: fix the types
//import mongoDatabase from '../helper/mongodb.ts'
import { validateTodo } from "../utils/validation.ts";
import { ITodo } from "../model/models.ts";
import log from "log";

const get = (context: any) => {
  log.info("Getting a todo");
  try {
    const todo = {
      tittle: "My todo",
      description: "Todo description",
      created_at: new Date(),
    };
    const response = {
      success: true,
      todo,
    };
    context.response.body = JSON.stringify(response);
  } catch (error) {
    const response = {
      success: false,
      error,
    };
    context.response.status = 500;
    context.response.body = JSON.stringify(response);
  }
};

const post = async (context: any) => {
  log.info("Adding a TODO");

  const body = context.request.body();
  const data = <ITodo> await body.value;
  let response: Object;
  try {
    await validateTodo(data);
    response = {
      succes: true,
      data,
    };
  } catch (error) {
    response = {
      success: false,
      error,
    };
  }
  context.response.body = JSON.stringify(response);
};

const healthCheck = (context: any) => {
  const response = {
    success: true
  };
  context.response.body = response;
  
}

export { get, post, healthCheck };
