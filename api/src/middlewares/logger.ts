import {log} from "deps";

await log.setup({
  handlers: {
    console: new log.handlers.ConsoleHandler("INFO"),
  },
  loggers: {
    default:{
      level: "INFO",
      handlers: ["console"]
    },
  },
})


export default log;