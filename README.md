# This code demonstrates various asynchronous operations in JavaScript and their respective order of execution:


console.log(1);
function myFunction() {
  console.log(2);
}

myFunction();

//SetTimeOut - A web API to schedule callback to macrotask queue
setInterval(() => console.log(1), 5); // 5 is the delay
//callback to be pushed to the macrotask queue

queueMicrotask(() => console.log(1));
// Microtask get executed before the regular task queue

//Types of Microtasks

async function asyncFunc() {
  console.log(1);
  await console.log(2);
  console.log(3);
}

//.then(() => console.log(3));
//.catch (() => console.log(1));
//.finally(() => console.log(3));

new MutationObserver(() => console.log(2))
ProcessingInstruction.nextTick(() => console.log(1))

//Put the logs in a correct order

Promise.resolve()
  .then(() => console.log(1));
queueMicrotask(() => console.log(2));
setTimeout(() => console.log(3), 0);
console.log(4);
new Promise(() => console.log(5));
(async () => console.log(6))()

Promise.resolve().then(() => console.log(1));

This initiates a promise chain with Promise.resolve(), which immediately resolves. When resolved, it executes the callback function that logs 1 to the console. This operation is asynchronous.
queueMicrotask(() => console.log(2));

queueMicrotask() adds a microtask to the end of the microtask queue. This microtask contains the function that logs 2 to the console. Microtasks are executed after the current task and before the next event loop iteration. So, it's guaranteed to run after the current script but before I/O events.
setTimeout(() => console.log(3), 0);

setTimeout() schedules a task to be added to the event loop queue after a minimum of the specified time (in milliseconds). Even though it has a timeout of 0 milliseconds, it will still be pushed to the end of the event loop queue, after the current script and the microtask queue.
console.log(4);

This logs 4 to the console immediately, as it's a synchronous operation and executed sequentially.
new Promise(() => console.log(5));

This creates a new promise but does not resolve or reject it explicitly. The function provided to the Promise constructor logs 5 to the console synchronously when the promise is created. However, since there's no resolution logic and no .then() or .catch() attached, this promise doesn't trigger any asynchronous operation.
(async () => console.log(6))()

This is an immediately invoked asynchronous function expression (IIFE) which logs 6 to the console. Asynchronous functions always return a promise, so this function returns a promise that resolves with undefined after the console.log(6) statement executes.
The expected order of console output would be:

Copy code
4
5
6
1
2
3
4 is logged first as it's a synchronous operation.
5 is logged next because it's inside the constructor of a promise, which executes synchronously.
6 is logged from the immediately invoked asynchronous function expression (IIFE).
1 is logged from the .then() callback of the resolved promise.
2 is logged from the microtask queue.
3 is logged from the setTimeout callback, but it's delayed slightly because it's in the event loop queue and executes after microtasks.

## Which are of the following are not considered microtasks in JavaScript eventloop?

1. script loading
2. setTimeout callback
3. mouseevent event
4. requestAnimationFrame callback
5. UI rendering
6. then callback - only this is a microtask
7. new Promise executor function
8. fetch calls