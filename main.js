function paginate(array, page_size, page_number) {
    // human-readable page numbers usually start with 1, so we reduce 1 in the first argument
    return array.slice((page_number - 1) * page_size, page_number * page_size);
}

let items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(paginate(items, 2, 1)); // [1,2]
console.log(paginate(items, 2, 2)); // [3,4]
console.log(paginate(items, 2, 3)); // [5,6]