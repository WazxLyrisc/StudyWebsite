  let cargoHold = [
    'oxygen tanks',
    'space suits',
    'parrot',
    'instruction manual',
    'meal packs',
    'slinky',
    'security blanket'
  ];
  
  // 1. Thay 'slinky' bằng 'space tether' và in mảng
  let slinkyIndex = cargoHold.indexOf('slinky');
  if (slinkyIndex !== -1) {
    cargoHold[slinkyIndex] = 'space tether';
  }
  console.log("After replacing 'slinky':", cargoHold);
  
  // 2. Xóa phần tử cuối dùng pop(), in phần tử bị xóa và mảng mới
  let removedLast = cargoHold.pop();
  console.log("Removed last item:", removedLast);
  console.log("After pop():", cargoHold);
  
  // 3. Xóa phần tử đầu dùng shift(), in phần tử bị xóa và mảng mới
  let removedFirst = cargoHold.shift();
  console.log("Removed first item:", removedFirst);
  console.log("After shift():", cargoHold);
  
  // 4. Thêm '1138' vào đầu và '20 meters' vào cuối, in mảng
  cargoHold.unshift('1138');
  cargoHold.push('20 meters');
  console.log("After adding '1138' and '20 meters':", cargoHold);
  
  // 5. In mảng cuối cùng kèm chiều dài bằng template literal
  console.log(`Final cargoHold: ${cargoHold}, Length: ${cargoHold.length}`);
    