

var userModule = module.exports;
// this doesn't work
userModule.testFunction = function (a, b) {
    return a + b;
};

// this also works
// var a = {
//     testFunction: function(a, b) {
//         return a + b;
//     }
// };
// module.exports = a;

// this works 
// exports.testFunction = function (a, b) {
//     return a + b;
// };
