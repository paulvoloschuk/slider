function createExtendedElement(name, options = false){
  let element = document.createElement(name);
  if(options)
    for (let key in options)
      element[key] = options[key];
  return element
}
function UnixTimeStamp(){return Math.round(new Date().getTime())};
