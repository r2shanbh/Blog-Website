const _ = require("lodash");

module.exports.getPage = function(array, topic){
  let page = {};
  let found = false;

  for(var i=0; i< array.length; i++) {
    if ( _.lowerCase(array[i].title ) === topic){
      page = array[i];
      found = true;
      break;
    }
  }

  if (!found){
    page = { title : topic, content: "Entry doesn't exist !" }
  }

  return page;;
}
