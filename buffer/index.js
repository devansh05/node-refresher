const { Buffer } = require("buffer");

// const buf = Buffer.alloc(2000);
// console.log("🟡🟡🟡 LOG 🟡🟡🟡 → buf - ", buf);
// const buf = Buffer.allocUnsafe(10);
// console.log("🟡🟡🟡 LOG 🟡🟡🟡 → buf - ", buf);

// const buf = Buffer.from("test");
// console.log("🟡🟡🟡 LOG 🟡🟡🟡 →  - BUF ", buf);
// console.log("🟡🟡🟡 LOG 🟡🟡🟡 →  - BUF Value ", buf.toString());
// buf[1] = 0x4a
// console.log("🟡🟡🟡 LOG 🟡🟡🟡 →  - BUF ", buf);
// console.log("🟡🟡🟡 LOG 🟡🟡🟡 →  - BUF Value ", buf.toString());

const buf = Buffer.alloc(5);
buf.write('abce')
console.log("🟡🟡🟡 LOG 🟡🟡🟡 → buf - ", buf.toString());