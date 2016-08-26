
var sum = 0;
var array = process.argv;
for (var index = 2; index < array.length; index++) {
    sum += parseInt(array[index]);
}

console.log(sum);