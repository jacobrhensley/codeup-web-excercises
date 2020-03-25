function showMultiplicationTable(number) {
    for (i = 1; i <= 10; i++) {
        console.log(number + ' x ' + i + ' = ' + (number * i));
    }
}

showMultiplicationTable(9);
showMultiplicationTable(12);


    for (i = 1; i <= 10; i++) {
        var random = Math.floor(Math.random() * 200) + 20;
        if(random % 2 === 0){
        console.log(random + ' is even');
            } else
                console.log(random + ' is odd')
    }

    for (i = 1; i < 10; i++){
        console.log(i.toString().repeat(i));
    }


for (i = 100; i >= 5; i - 5){
    console.log(i);
    i -= 5;
}