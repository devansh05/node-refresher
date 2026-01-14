const EventEmitter = require("events");
const ChatRoom = require("./chat-room");

const chatRoom = new ChatRoom();

chatRoom.on("join", (user) => {
  console.log("🟡🟡🟡 LOG 🟡🟡🟡 →  - ", user, " joined the chat ");
});

chatRoom.on("sendMessage", (user, message) => {
  console.log("🟡🟡🟡 LOG 🟡🟡🟡 →  - ", user, " sent message - ", message);
});

chatRoom.on("userLeft", (user) => {
  console.log("🟡🟡🟡 LOG 🟡🟡🟡 →  - ", user, " left the chat ");
});

// Simulating frontend and user events

chatRoom.join("Alice");
chatRoom.join("Bob");

chatRoom.sendMessage("Alice", "Hi this is Alice");
chatRoom.sendMessage("Bob", "Hi this is Bob");

chatRoom.leave("Alice");
chatRoom.leave("Bob");

chatRoom.sendMessage("Alice", "Am I removed");
chatRoom.sendMessage("Bob", "Am I removed");
