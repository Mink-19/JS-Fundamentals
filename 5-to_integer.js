const arg=process.argv[2];
const num=Number(arg);
if (!isNaN(arg) && arg.trim() !== '') {
    console.log(`My number: ${parseint(arg)} `);
}else {
     console.log('Not a Number');
}