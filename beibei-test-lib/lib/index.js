module.exports = {
  sum(a, b) {
    return a + b;
  },
  deduce() {
    return 90
  },
  deduce2() {
    return 80
  },
  init({ option, param }) {
    console.log('执行init流程', option, param);
  }
}