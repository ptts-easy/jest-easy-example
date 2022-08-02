console.log("#npm test");

/**
 * Summary.
 *
 * Description.
 *
 * @author  ptts
 * @since   2022-07-01
 * @class, static, global
 *
 * @param {function} myResolve  callback successed result
 * @param {function} myReject   callback error result
 *
 * @return {string} Promise
 */

/*
let fetchController = new Promise(function(myResolve, myReject) {
  let x = 0;

  if (x == 0) {
//    console.log("success.");

    myResolve("peanut butter");
  } else {
//    console.log("error.");

    myReject("error");
  }
});

function fetchData()
{
  return fetchController;
}
*/

async function fetchData(x) {
  let myPromise = new Promise((resolve, reject) => {
    if (x == 1) {
      resolve("peanut butter");
    } else {
      reject("error");
    }
  });

  return await myPromise;
}

/*
async function fetchData() {
  return "peanut butter";
}
*/

function fetchData1(x, callback) {
  if (x == 1) {
    callback(false, "peanut butter");
  } else {
    callback(true, "error");
  }
}

module.exports = {fetchData, fetchData1};