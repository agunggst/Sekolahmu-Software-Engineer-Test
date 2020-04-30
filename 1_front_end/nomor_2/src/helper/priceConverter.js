function priceConverter (price_str){
  let reversed = price_str.split('').reverse().join('')
  let result = ''
  for(let i=0; i<reversed.length; i++){
    if(i%3 === 0 && i !== 0){
      result += '.'
    }
    result += reversed[i]
  }
  return `Rp. ${result.split('').reverse().join('')}`
}

export default priceConverter