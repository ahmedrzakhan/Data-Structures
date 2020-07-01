function processData(input) {
    //Enter your code here
    input = input.split("\n");

    var numberOfElements = Number(input[0]);
    var givenArray = input[1].split(" ").map(Number);
    // console.log( numberOfElements, givenArray );

    for (var i = 0; i < numberOfElements - 1; i++) {
        var minimum = i;

        for (var j = i + 1; j < numberOfElements; j++) {
            if (givenArray[minimum] > givenArray[j]) {
                minimum = j;
            }
        }

        var temp = givenArray[minimum];
        givenArray[minimum] = givenArray[i];
        givenArray[i] = temp;
    }

    console.log(givenArray.join(" "));
}

processData("5\n3 5 0 9 8");

function processData(input) {
    //Enter your code here
    input = input.split('\n');

    var n = Number(input[0]);

    var arr = input[1].split(' ').map(Number);
    // console.log(arr, n);

    for (var i = 0; i < n - 1; i++) {
        var min = i;
        for (var j = i + 1; j < n; j++) {
            if (arr[j] < arr[min]) {
                swap(arr, j, min);
            }
        }
    }
    console.log(arr.join(' '));
}

var swap = function(arr, i, j) {
    var temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}