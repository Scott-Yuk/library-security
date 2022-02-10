function analyzeSecurity() {
  let tp = _.pluck(analyzeSecurity, 'truePositives');
  let fp = _.pluck(analyzeSecurity, 'falsePositives');
  let tn = _.pluck(analyzeSecurity, 'trueNegatives');
  let fn = _.pluck(analyzeSecurity, 'falseNegatives');
  
}

console.log(analyzeSecurity([
  {
    truePositives: 1,
    falsePositives: 4,
    trueNegatives: 8,
    falseNegatives: 2,
  },
  {
    truePositives: 2,
    falsePositives: 4,
    trueNegatives: 16,
    falseNegatives: 1,
  }]));
