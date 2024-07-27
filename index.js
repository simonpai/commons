export default function resolution() {
  let resolve, reject;
  const promise = new Promise((_resolve, _reject) => {
    resolve = _resolve;
    reject = _reject;
  });
  return Object.freeze({ promise, resolve, reject });
}
