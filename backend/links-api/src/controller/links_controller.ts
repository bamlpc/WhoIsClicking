import log from "log";
import Link from "../model/link.ts";
import { RouterContext } from "deps";

const generateLinks = async ({ response }: RouterContext<"/generate">) => {
  const newLink = {
    hunter: getRandomString(50),
    prey: getRandomString(50),
    action: "",
  };
  try {
    await Link.create(newLink.hunter, newLink.prey, newLink.action);
    const _response = {
      success: true,
      newLink,
    };
    response.body = JSON.stringify(_response);
  } catch (error) {
    log.error(error);
    response.body = {
      success: false,
      error,
    };
  }
};

function getRandomString(s: number) {
  if (s % 2 == 1) {
    log.warning("Only even sizes are supported");
  }
  const buf = new Uint8Array(s / 2);
  crypto.getRandomValues(buf);
  let ret = "";
  for (let i = 0; i < buf.length; ++i) {
    ret += ("0" + buf[i].toString(16)).slice(-2);
  }
  return ret;
}

export default generateLinks;
