const EventEmitter = require("events");

class ChatRoom extends EventEmitter {
  constructor() {
    super();
    this.users = new Set();
  }

  join(user) {
    if (!this.users.has(user)) {
      this.users.add(user);
      this.emit("userJoined", user);
    }
  }

  sendMessage(user, message) {
    if (this.users.has(user)) {
      this.emit("sendMessage", user, message);
    } else {
      console.log("🟡🟡🟡 LOG 🟡🟡🟡 →  - sendMessage No such user ", user);
    }
  }

  leave(user) {
    if (this.users.has(user)) {
      this.users.delete(user);
      this.emit("userLeft", user);
    } else {
      console.log("🟡🟡🟡 LOG 🟡🟡🟡 →  - userLeft No such user ", user);
    }
  }
}

module.exports = ChatRoom;
