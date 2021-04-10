module.exports = {
  url: "https://www.google.com/",
  testCase: {
    findText: {
      input: "Facebook",
      x: 6,
      expected: true,
    },
    findPeople: {
      input: "Nguyễn Thái Tiệp github",
      expected: true,
      x: 6,
    },
    findRandom: {
      input: "âfsagassfasgasgasgasg",
      expected: false,
      x: 6,
    },
  },
};
