module.exports = function check(str, bracketsConfig) {

  const openBrackets = []
  for (let i = 0; i < bracketsConfig.length; i++) {
    openBrackets.push(bracketsConfig[i][0])
  }
  console.log('openBrackets', openBrackets)

  const bracketsPair = {}
  const identicalPairs = []
  for (let i = 0; i < bracketsConfig.length; i++) {
    if (bracketsConfig[i][0] === bracketsConfig[i][1]) {
      identicalPairs.push(bracketsConfig[i][0])
    }

    bracketsPair[bracketsConfig[i][1]] = bracketsConfig[i][0]
  }
  console.log('bracketsPair', bracketsPair)
  console.log('identicalPairs', identicalPairs)


  let stack = []

  for (let k = 0; k < str.length; k++) {
    let currentSymbol = str[k]
    let topElement = stack[stack.length - 1]

    if (identicalPairs.includes(currentSymbol) && currentSymbol === topElement) {
      stack.pop()
    } else {
      if (openBrackets.includes(currentSymbol)) {
        stack.push(currentSymbol)
      } else {
        
        if (stack.length === 0) {
          return false
        }
  
        
  
        if (bracketsPair[currentSymbol] === topElement) {
          stack.pop()
        } else {
          return false
        }
      }
    } 

  }

  return stack.length === 0;
}