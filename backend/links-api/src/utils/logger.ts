import { log } from "deps";

// log.X to call the log function
// severity order for X: debug, info, warning, critical, error

await log.setup({
  //definning handlers for each log level
  handlers: {
    console: new log.handlers.ConsoleHandler("DEBUG", { //Log messages with level ≥DEBUG would be sent to console
      formatter: `{datetime} {levelName} {msg}`, //Define the format of the log message
    }),
  },

  //assing handlers to loggers
  loggers: {
    default: {
      level: "DEBUG",
      handlers: ["console"],
    },
    /*client: {
      level: "WARNING",
      handlers: ["file"]
  }*/
    //THIS IS THE WAY TO ASSIGN EXTRA HANDLERS TO LOGGERS
  },
});
/* //THIS IS HOW YOU ASSING/CALL THE NAME TO THE LOGGER
const dl=log.getLogger();
const cl=log.getLogger('client');
dl.info(10000000);
cl.info(10000000);
*/

export default log;
