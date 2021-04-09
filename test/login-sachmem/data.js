module.exports = {
  url: "https://accounts.sachmem.vn/users/sign_in",
  testCase: {
    loginFail: {
      input: {
        username: "nguyenthaitiep206@gmail.com",
        password: "nguyentiep",
      },
      expected: "password err",
    },
    loginNoPassword: {
      input: {
        username: "nguyenthaitiep206@gmail.com",
        password: "",
      },
      expected: "password invalid",
    },
  },
};
