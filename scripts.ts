// scripts.ts for velocitaptor run
//TODO: verify permission requirements
export default {
    scripts: {
      start: "deno run --import-map ./import_map.ts --allow-net server.ts",
      test: "deno test --import-map ./import_map.ts --allow-net server_test.ts",
    },
  };