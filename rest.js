// rest parameter can create function that take a variable
// number of arguments. These arguments are store in an array
// that can be accessed later from inside the function
var sum = function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return args.reduce(function (a, b) { return a + b; }, 0);
};
console.log(sum(1, 2, 3, 4, 5, 6, 7, 8, 9));
