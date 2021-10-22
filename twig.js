function groupArrayElements (arr,N) {
    var result = [];
    var temp = [];
    var count = 0;
    for (var i = 0; i < arr.length; i++) {
        temp.push(arr[i]);
        count++;
        if (count === N) {
            result.push(temp);
            temp = [];
            count = 0;
        }else{
            if (i === arr.length - 1) {
                result.push(temp);
            }
        }
    }
    return result;
}