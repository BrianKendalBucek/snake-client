const { MOVE_UP_KEY } = require("./constants");
const { MOVE_DOWN_KEY } = require("./constants");
const { MOVE_LEFT_KEY } = require("./constants");
const { MOVE_RIGHT_KEY } = require("./constants");
const { MESSAGE_1 } = require("./constants");
const { MESSAGE_2 } = require("./constants");

let connection;

const setupInput = function (conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

const handleUserInput = function(key) {
  if (key === '\u0003') {
    console.log("Thank you for playing");
    process.exit();
  }
  
  if (key === MOVE_UP_KEY) {
    connection.write("Move: up");
  }

  if (key === MOVE_DOWN_KEY) {
    connection.write("Move: down");
  }

  if (key === MOVE_LEFT_KEY) {
    connection.write("Move: left");
  }
  
  if (key === MOVE_RIGHT_KEY) {
    connection.write("Move: right");
  }

  if (key === MESSAGE_1) {
    connection.write("Say: Gimmie food");
  }
  if (key === MESSAGE_2) {
    connection.write("Say: So hungry");
  }
};


module.exports = { setupInput, connection } ;