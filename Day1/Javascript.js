function countTrue(arr) {
    // Sử dụng filter để lấy các giá trị true, sau đó đếm độ dài của mảng
    return arr.filter(value => value === true).length;
}

// Kiểm tra với các ví dụ từ đề bài
console.log(countTrue([true, false, false, true, false])); // Kết quả: 2    
console.log(countTrue([false, false, false, false]));      // Kết quả: 0
console.log(countTrue([]));                                // Kết quả: 0
