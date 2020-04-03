
//  kebabize function it converts a camel case string into a kebab case.
function kebabize(str){
  let clone= str.replace(/(\W|\d)/g, '');
  let cloneTwo = clone.toLowerCase();
  let res = '';
  for(let i=0;i<clone.length;i++){
    if(cloneTwo[i] !== clone[i] && clone.indexOf(clone[i]) !== 0) {
      res+='-'+cloneTwo[i] 
    } else {
      res+=cloneTwo[i]
    }
    
  }
  return res;
}