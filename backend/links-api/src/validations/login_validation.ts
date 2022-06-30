import { isEmail, required, RouterContext, validate } from "deps";

const LoginValidation = async (
  { request, response }: RouterContext<"/login">,
  next: Function,
) => {
  const body = await request.body().value;

  const [passes, errors] = await validate(body, {
    username: [required, isEmail],
    password: [required],
  });
  if (!passes) {
    response.status = 400;
    response.body = errors;
    return;
  }

  await next();
};

export default LoginValidation;
