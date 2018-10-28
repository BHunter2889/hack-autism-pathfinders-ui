function convert(res) {
  function convertSingle(arr) {
    return res[0].columns.reduce((accum,col,index)=>({[col]:arr[index],...accum}),{})
  }
  if(res.length > 0) return res[0].values.map(convertSingle);
  else return []
}

//replace all the keys with the replacements specified in the keymap
function switchKeys(keyMap,objects) {
  function convertSingle(obj) {
    return Object.keys(obj).reduce((accum,col)=>({[keyMap[col]]:obj[col],...accum}),{})
  }
  return objects.map(convertSingle)
}

module.exports={convert,switchKeys}