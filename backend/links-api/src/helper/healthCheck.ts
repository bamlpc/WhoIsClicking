const HEALTHCHECK_URL = Deno.env.get("LINKS_URL") + "/api/healthcheck";

const healthCheck = async () => {
  const response = await fetch(HEALTHCHECK_URL);
  response.status === 200 ? Deno.exit(0) : Deno.exit(1);
};
healthCheck();
