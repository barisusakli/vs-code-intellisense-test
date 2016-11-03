

var userModule = module.exports;
// this doesn't work
userModule.testFunction = function (a, b) {
    return a + b;
};

// this works 
// exports.testFunction = function (a, b) {
//     return a + b;
// };
