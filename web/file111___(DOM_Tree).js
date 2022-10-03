const rootNode = document.getRootNode();
// console.log(rootNode);

// This is how we get the root node

//_________________________________________

// const headElementNode = rootNode.childNodes;

// This is an array like object so we can use indexing and in order to get the further children we have to use indexing

const htmlElementNode = rootNode.childNodes[0];
// console.log(htmlElementNode);

//______________________________________________

// console.log(htmlElementNode.childNodes);

const headElementNode = htmlElementNode.childNodes[0];
// console.log(headElementNode.childNodes);

const textNode1 = headElementNode.childNodes;

const bodyElementNode = headElementNode.childNodes[2];

// console.log(headElementNode);
// console.log(textNode1);
// console.log(bodyElementNode);

//_______________________________________________

//Parent Relationship

const parentOfHeadElement = headElementNode.parentElement;
console.log(parentOfHeadElement);

// This will print html element

//__________________________________________

console.log(textNode1.parentElement);