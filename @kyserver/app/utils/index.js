/**
 * @desc 延迟方法
 * @param ms {number}
 */
const sleep = async (ms, data) => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(data)
    }, ms)
  })
}

module.exports = {
  sleep,
}