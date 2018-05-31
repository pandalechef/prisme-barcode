var object = {
  "0": {toto: 3}
}
var result = [];
result = [...result, object[0]];
console.log(result[0].toto);
