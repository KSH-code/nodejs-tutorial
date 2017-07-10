process.argv.forEach((item, index) => {
    if (item == '--exit') {//node process.js --exit Number
        setTimeout(() => {
            process.exit();//Process exit
        }, Number(process.argv[index + 1]));//Number
    }
});