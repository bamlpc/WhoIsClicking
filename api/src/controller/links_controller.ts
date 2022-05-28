import { Application, Router } from "deps";

import { Link } from "../model/link.ts";

export async function generateLinks() {
  const probe = getRandomString(50);
  const review = getRandomString(50);
  const action = '';
  try {
    await Link.create(probe, review, action);
  } catch (error) {
    console.log(error);
  }

}

function getRandomString(s: number) {
  if (s % 2 == 1) {
    throw new Deno.errors.InvalidData("Only even sizes are supported");
  }
  const buf = new Uint8Array(s / 2);
  crypto.getRandomValues(buf);
  let ret = "";
  for (let i = 0; i < buf.length; ++i) {
    ret += ("0" + buf[i].toString(16)).slice(-2);
  }
  return ret;
}

