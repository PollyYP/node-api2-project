// require your server and launch it here
require("dotenv").config();

const server = require("./api/server");

const port = process.env.PORT;

server.listen(port, () => {
  console.log("Server started at localhost:3000");
});
