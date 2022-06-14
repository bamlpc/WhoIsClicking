import log from "log";
import Link from "../model/link.ts";

const generateLinks = async (ctx: any) => {
  const newLink = {
    probe: getRandomString(50),
    review: getRandomString(50),
    action: "",
  };
  try {
    await Link.create(newLink.probe, newLink.review, newLink.action);
    log.info(newLink);
    const response = {
      success: true,
      newLink,
    };
    ctx.response.body = JSON.stringify(response);
  } catch (error) {
    log.error(error);
    ctx.response.body = {
      success: false,
      error,
    };
  } finally {
    try {
      await fetch("http://nft_ip:80/qr", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newLink),
      });
      log.warning("Generated links");
      const response = {
        success: true,
        newLink,
      };
      ctx.response.body = JSON.stringify(response);
    } catch (error) {
      log.error(error);
      ctx.response.body = {
        success: false,
        error,
      };
    }
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
