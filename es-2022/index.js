// 通过 err1.cause 可以拿到 err0 ；如果这个异常被重新抛出了很多次，那通过 err1.cause.cause.... 就能拿到所有相关的异常。
function willThrowError() {
  console.log('start');
  try {
    throw new Error(1)
  } catch (err0) {
    throw new Error('one error', {cause: err0})
  }
}

try {
  willThrowError()
} catch (error1) {
  console.log('error1',error1);
}

