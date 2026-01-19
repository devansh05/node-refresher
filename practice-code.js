/*
const reverseStr = (str) => {
  let revStr = [];
  for (let i = str.length - 1; i >= 0; i--) {
    revStr.push(str[i]);
  }
  return revStr.join("");
};

reverseStr("javascript");
Input:
"javascript"

Output:
"tpircsavaj"

const countFrequency = (str) => {
  const res = {};
  for (let i = 0; i < str.length; i++) {
    const c = str[i];
    res[c] = (res[c] || 0) + 1;
  }
  return res;
};

countFrequency("aabccc");
Input:
"aabccc"

Output:{ a: 2, b: 1, c: 3 }

const missingNumber = (arr) => {
  const res = [];
  //assuming that array has length > 1 and array is uniform of numbers
  const diff = arr[arr.length - 1] - arr[arr.length - 2];

  for (let i = 0; i < arr.length; i++) {
    const a = arr[i] + arr[i] + diff;
    if (arr[i + 1] && arr[i] + diff !== arr[i + 1]) {
      res.push(arr[i] + diff);
    }
  }
};

missingNumber([1, 2, 4, 5, 6, 8, 9,  10]);

Input:
[1, 2, 4, 5]

Output:
3

function palindromeCheck(str) {
  const strTemp = str.replaceAll(" ", "").toLowerCase();
  for (let i = 0; i < strTemp.length / 2; i++) {
    const j = strTemp.length - i - 1;
    if (strTemp[i] !== strTemp[j]) {
      return false;
    }
  }
  return "Palindrome";
}

palindromeCheck("A man a plan a canal Panama");

// ---------------------------------------------------------------------------------

let timer = null;
const debounceFunc = (callback, delay) => {
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      callback(...args);
    }, delay);
  };
};

const searchStr = (str) => {
  console.log("🟡🟡🟡 LOG 🟡🟡🟡 →  - HIT API HERE  INPUT CALLED ", str);
};

const debounceVar = debounceFunc(searchStr, 500);

const getInput = (str) => {
  debounceVar(str);
};

const str = "deboucnedStr";
let currentStr = "";
for (let i = 0; i < str.length; i++) {
  setTimeout(() => {
    currentStr = `${currentStr}${str[i]}`;
    getInput(currentStr);
  }, [300]);
}

const flattenArray = (arr) => {
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    const item = arr[i];
    if (Array.isArray(item)) {
      res.push(...flattenArray(item));
    } else {
      res.push(item);
    }
  }
  return res;
};

console.log(
  "🟡 LOG -  result : ",
  flattenArray([1, 3, 5, [2, 4, [9, 8, [6]], 10], 7])
);

const nonRepeatingCharacter = (str) => {
  const res = [];
  let rightPos = 0;

  for (let leftPos = 0; leftPos < str.length; leftPos++) {
    for (let j = leftPos; j < str.length; j++) {
      if (str[leftPos] === str[j]) {
        rightPos = j;
      } else {
        continue;
      }
    }
    const firstNonRepeatingStr = str.slice(leftPos, rightPos + 1);
    if (firstNonRepeatingStr.length === 1) {
      return firstNonRepeatingStr;
    }
    leftPos = rightPos;
  }
};

const nonRepeatingCharacter = (str) => {
  let initPos = 0;
  for (let leftPos = 0; leftPos < str.length; leftPos++) {
    let rightPos = leftPos + 1;
    if (str[leftPos] !== str[rightPos]) {
      const tempStr = str.slice(initPos, leftPos + 1);
      initPos = rightPos;
      if (tempStr.length === 1) return tempStr;
    }
  }
};

console.log("🟡 LOG -  ANS : ", nonRepeatingCharacter("aabbbbccddeeef"));

const allNonRepeatingCharacters = (str) => {
  let tempArr = [];
  let initPos = 0;

  for (let leftPos = 0; leftPos < str.length; leftPos++) {
    let rightPos = leftPos + 1;
    if (str[leftPos] !== str[rightPos]) {
      const tempStr = str.slice(initPos, leftPos + 1);
      if (tempStr.length === 1) {
        tempArr.push(str.slice(initPos, leftPos + 1));
      }
      initPos = rightPos;
    }
  }
  return tempArr;
};

console.log("🟡 LOG -  ANS : ", allNonRepeatingCharacters("abbbbcddef"));

const didRun = (callback) => {
  let didRun = false;
  return (...args) => {
    if (!didRun) {
      didRun = true;
      callback(...args);
    }
  };
};

const once = (str) => {
  console.log("🟡 LOG -  RAN ONCE : ", str);
};

const didRunFlag = didRun(once);

didRunFlag("first time");
didRunFlag("second time");
didRunFlag("third time");

//PROMISE CHAINING

const promise1 = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("🟡 LOG -  PROMISE 1 : ");
      resolve("Response 1");
    }, 1000);
  });
};

const promise2 = (res2) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("🟡 LOG -  PROMISE 2 : ", res2);
      resolve("Response 2");
    }, 1000);
  });
};
const promise3 = (res3) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("🟡 LOG -  PROMISE 3 : ", res3);
      resolve("Response 3");
    }, 1000);
  });
};

const promiseChain = () => {
  return promise1()
    .then((res1) => {
      console.log("🟡 LOG -  RESOLVED PROMISE 1 : ", res1);
      return promise2(res1);
    })
    .then((res2) => {
      console.log("🟡 LOG -  RESOLVED PROMISE 2 : ", res2);
      return promise3(res2);
    })
    .then((res3) => {
      console.log("🟡 LOG -  RESOLVED PROMISE 3 : ", res3);
      return res3;
    })
    .catch((err) => console.error("🟡 LOG -  ERROR : ", err))
    .finally(() => console.log("🟡 LOG -  FINAl - CLEANUP : "));
};

promiseChain();

RETRY API CALL

const addDelay = (delay) =>
  new Promise((resolve) => setTimeout(resolve, delay));

const fetchApiData = async (retries = 0, initDelay = 1000) => {
  console.log(`🟡 LOG - CALLED : ${retries}`);
  return await fetch("https://jsonplaceholder.typicode.com/usersss")
    .then((res) => {
      if (!res.ok) {
        throw new Error("error response");
      }
    })
    .then((data) => data)
    .catch(async (err) => {
      if (retries < 3) {
        //delay
        const newDelay = initDelay * 2 ** retries;
        await addDelay(newDelay);
        return fetchApiData(retries + 1, newDelay);
      } else {
        throw err;
      }
    })
    .finally(() => console.log("🟡 LOG -  CLEAN UP : "));
};

fetchApiData()
  .then(() => {})
  .catch((err) => console.error(err));

const tasks = [
  () => new Promise((res) => setTimeout(() => res("Resolved 1"), 3000)),
  () => new Promise((res) => setTimeout(() => res("Resolved 2"), 4000)),
  () => new Promise((res) => setTimeout(() => res("Resolved 3"), 2000)),
  () => new Promise((res, rej) => setTimeout(() => rej("Resolved 4"), 3000)),
  () => new Promise((res) => setTimeout(() => res("Resolved 5"), 5000)),
  () => new Promise((res) => setTimeout(() => res("Resolved 6"), 6000)),
  () => new Promise((res) => setTimeout(() => res("Resolved 7"), 9000)),
  () => new Promise((res, rej) => setTimeout(() => rej("Resolved 8"), 8000)),
  () => new Promise((res) => setTimeout(() => res("Resolved 9"), 8000)),
  () => new Promise((res) => setTimeout(() => res("Resolved 10"), 7000)),
];

const executeTasksInBatch = (tasks, batch) => {
  const results = [];
  let index = 0;
  let running = 0;

  return new Promise((res, rej) => {
    function runTasks() {
      //if all tasks finished
      if (index === tasks.length && running === 0) {
        res(results);
        return;
      }

      while (index < tasks.length && running < batch) {
        const currentIndex = index;
        const taskToPerform = tasks[index];
        index++;
        running++;

        //perform task now
        taskToPerform()
          .then(
            (resolve) =>
              (results[currentIndex] = {
                status: "fulfilled",
                value: resolve,
              }),
          )
          .catch(
            (reject) =>
              (results[currentIndex] = { status: "failed", value: reject }),
          )
          .finally(() => {
            running--;
            runTasks();
          });
      }
    }
    runTasks();
  });
};

executeTasksInBatch(tasks, 2).then(console.log);

const p = new Promise((resolve) => {
  console.log("inside promise");
  resolve();
});

p.then(() => console.log("then"));

console.log("after");

after inside then

Promise.resolve(10)
  .then((x) => x + 5)
  .then((x) => {
    console.log(x);
    return x * 2;
  })
  .then(console.log);

Promise.reject("error")
  .then(() => console.log("then"))
  .catch((e) => console.log(e))
  .then(() => console.log("after catch"));

Promise.resolve()
  .then(() => {
    throw "boom";
  })
  .catch((e) => {
    console.log(e);
    return "recovered";
  })
  .then(console.log);

boom
recoverd

Promise.resolve(1)
.then((x) => {
  x + 1;
})
.then((x) => {
  console.log(x);
});

async function test() {
  return 5;
}

console.log(test());

async function foo() {
  console.log("A");
  await Promise.resolve();
  console.log("B");
}

console.log("start");
foo();
console.log("end");

start a end b

async function run() {
  try {
    await Promise.reject("fail");
  } catch (e) {
    console.log("caught");
  }
  console.log("after");
}

run();


Promise.all([
  Promise.resolve(1),
  Promise.reject("fail"),
  Promise.resolve(3),
]).then(console.log).catch(console.error);
//all or nothing - so it fails


for ( var i = 0; i < 3; i++) {
  Promise.resolve().then(() => console.log(i));
}

*/