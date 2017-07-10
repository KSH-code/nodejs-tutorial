exports.Hello = (msg) => {
    console.time('greet');
    console.log(msg);
};
exports.Bye = (msg) => {
    console.log(msg);
    console.timeEnd('greet');
};