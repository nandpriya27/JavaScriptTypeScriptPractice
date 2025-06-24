/*You are given an array of test results from an automated test suite. Each item in the array is either 'pass', 'fail', or 'skipped'.

let testResults = ['pass', 'fail', 'pass', 'pass', 'fail', 'skipped', 'pass']Using reduce(), write a JavaScript function to count how many times each status appears, and return the result as an object like this:
{
  pass: 4,
  fail: 2,
  skipped: 1
}*/

function countTestResults(testResults: string[]): Record<string, number> {
  return testResults.reduce((acc: Record<string, number>, result: string) => {
    acc[result] = (acc[result] || 0) + 1;
    return acc;
  }, {});
}

let testResults = ['pass', 'fail', 'pass', 'pass', 'fail', 'skipped', 'pass'];
let result = countTestResults(testResults);
console.log(result); // { pass: 4, fail: 2, skipped: 1 }
