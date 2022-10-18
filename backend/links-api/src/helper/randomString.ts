const getRandomString = (s: number): string => {
  if (s % 2 === 1) {
    //log.warning("Only even sizes are supported");
    s++;
  }
  const buf = new Uint8Array(s / 2);
  crypto.getRandomValues(buf);
  let ret = "";
  for (let i = 0; i < buf.length; ++i) {
    ret += ("0" + buf[i].toString(16)).slice(-2);
  }
  return ret;
}

export default getRandomString;
