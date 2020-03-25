
var skipNumber = prompt('please enter a number 1-50 to skip!')

for (var i = 1; i <= 50; i++) {
    if (i % 2 !== 0) {
        if (i === parseInt(skipNumber)) {
            console.log('Yikes! Skipping number: ' + skipNumber);
            continue;
        }
        console.log('Heres an odd number: ' + i);
    }
}
