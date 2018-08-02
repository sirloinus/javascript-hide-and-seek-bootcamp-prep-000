function getFirstSelector(selector) {
  const firstElement = document.querySelector(selector)
  return firstElement
}

// function getFirstSelector(selector) {
//   return document.querySelector(selector)
// }

function nestedTarget() {
  return document.querySelector('#nested .target')
}

// note on above  ---- when using querySelectorAll & querySelector you can only ever pass ONE argument. anything more than this will be ignored.    in above example, nested and target are part of the same string 


function deepestChild() {
  let grandNode = document.querySelector('#grand-node') 
  let nextNode = grandNode.children[0]
  
  while (nextNode) {
    grandNode = nextNode
    nextNode = grandNode.children[0]
  }
  return grandNode
}


function increaseRankBy(n) {
  const rankedLists = document.querySelectorAll('.ranked-list')
  const firstRankedList = rankedLists[0]
  const secondRankedList = rankedLists[1]
  
  let firstRankedListChildren = firstRankedList.children
  for (let i = 0; i < firstRankedListChildren.length; i++) {
    let value = parseInt(firstRankedListChildren[i].innerHTML)
    return value + n
  }
  
}




