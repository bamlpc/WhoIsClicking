import { RouterContext } from "deps";

const healthCheck = ({ response }: RouterContext<"/healthcheck">) => {
  const _response = {
    success: true,
  };
  response.body = _response;
};

export default healthCheck;
