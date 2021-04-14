var str = '1234567'
str = str.replace(/\B(?=(?:\d{3})+\b)/g, ',')
console.log(str)