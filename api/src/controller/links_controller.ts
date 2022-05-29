import { Application, Router } from "deps";
import log from 'log';

import { Link } from "../model/link.ts";

export async function generateLinks() {
  const newLink = {
    probe: getRandomString(50),
    review: getRandomString(50),
    action: ''
  };
  try {
    await Link.create(newLink.probe, newLink.review, newLink.action);
    log.info(newLink);
    return JSON.stringify(newLink);
  } catch (error) {
    log.error(error);
  }

}

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

