let sample_array = [2, 5, 9, 6];

function remove_array_element(arr, element_target) {

    for (let i = 0; i < arr.length; i++) {
        
        // if the specific element is found, remove it
        if (arr[i] === element_target) {
            arr.splice(i, 1);
        }
    }

    return arr;
}

console.log(remove_array_element(sample_array, 5)); // [2, 9, 6]