// add solution here
function theBeatlesPlay (musicians, instruments) {
  var counter = []
  for (let i = 0; i < musicians.length; i++) {
  counter.push(`${musicians[i]} plays ${instruments[i]}`)
}
  return counter
}

function johnLennonFacts (facts) {
  var factstest = []
  let i = 0
  while (i < facts.length) {
    factstest.push(`${facts[i]}!!!`)
  }
  return factstest
}
