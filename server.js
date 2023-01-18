const jsonServer = require("json-server");
require("dotenv").config();

const server = jsonServer.create();
const dbFilePath = process.env.DB_FILE_PATH;
const router = jsonServer.router(dbFilePath);

const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);
server.listen(3000, () => {
  console.log("JSON Server is running");
});
