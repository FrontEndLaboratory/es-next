function fn() {
  console.log(1);
  
  return Promise.resolve();
}

// 以前需要通过 IIFE 实现
(async function () {
  await fn();
})();

// 支持顶层 await 后，可以直接调用
await fn();
export { };

