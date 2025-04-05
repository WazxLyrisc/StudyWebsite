// const myFunction = (x, y) =>{
//     console.log(x + y);
// }
// myFunction(3,4);

// Arrow function
const add = (x, y) => x + y;
let test = add(3,4);
console.log(test);

let myFullName = 'Hoàng Giang Sơn'  //[]: mảng ; ()'': chuỗi
console.log(myFullName);

let firstName = "Sơn";
let middleName = "Giang";
let lastName = "Đào";

let message = `Tên đầy đủ của tôi là ${firstName} ${middleName} ${lastName}.`
console.log(message);


let product = "Laptop";
let cost = 1500;
let VAT = 0.1;
let totalPrice = cost + cost * VAT;

let result = `Sản phẩm: ${product}
Giá tiền: $${cost}
VAT: ${VAT * 100}%
Tổng giá trị sản phẩm: ${totalPrice}`
console.log(result);

//Array method
let numbers = [1,2,3,4,5];

// Method map
let uppdatedNumbers = numbers.map((num) => num + 2);
console.log(uppdatedNumbers);
console.log(numbers);

//Method filters
let filteredNumbers = numbers.filter((num) => num > 2);
console.log(numbers);
console.log(filteredNumbers);

//Method find
let foundNumber = numbers.find((num) => num % 2 == 0);
console.log(foundNumber);

const students = [
    {
      name: "An",
      scores: {
        Toan: { score: 7.4, evaluation: "Đ" },
        NguVan: { score: 8.9, evaluation: "Đ" },
        NgoaiNgu: { score: 8.5, evaluation: "Đ" },
        VatLy: { score: 9.0, evaluation: "Đ" },
        HoaHoc: { score: 3.9, evaluation: "KĐ" },
        SinhHoc: { score: 5.0, evaluation: "Đ" },
        LichSu: { score: 8.3, evaluation: "Đ" },
        DiaLy: { score: 9.4, evaluation: "Đ" },
        GDCD: { score: 6.6, evaluation: "Đ" },
      },
    },
    {
        name: "Binh",
        scores: {
          Toan: { score: 3.4, evaluation: "KĐ" },
          NguVan: { score: 5.9, evaluation: "Đ" },
          NgoaiNgu: { score: 5.4, evaluation: "Đ" },
          VatLy: { score: 7.4, evaluation: "Đ" },
          HoaHoc: { score: 9.3, evaluation: "Đ" },
          SinhHoc: { score: 8.6, evaluation: "Đ" },
          LichSu: { score: 5.2, evaluation: "Đ" },
          DiaLy: { score: 7.1, evaluation: "Đ" },
          GDCD: { score: 6.7, evaluation: "Đ" },
        },
      },
      {
        name: "Chi",
        scores: {
          Toan: { score: 5.5, evaluation: "Đ" },
          NguVan: { score: 3.7, evaluation: "KĐ" },
          NgoaiNgu: { score: 3.9, evaluation: "KĐ" },
          VatLy: { score: 8.1, evaluation: "Đ" },
          HoaHoc: { score: 7.4, evaluation: "Đ" },
          SinhHoc: { score: 7.6, evaluation: "Đ" },
          LichSu: { score: 3.9, evaluation: "KĐ" },
          DiaLy: { score: 8.4, evaluation: "Đ" },
          GDCD: { score: 5.2, evaluation: "Đ" },
        },
      },
      {
        name: "Dung",
        scores: {
        Toan: { score: 9.1, evaluation: "Đ" },
        NguVan: { score: 5.5, evaluation: "Đ" },
        NgoaiNgu: { score: 4.4, evaluation: "KĐ" },
        VatLy: { score: 4.6, evaluation: "KĐ" },
        HoaHoc: { score: 6.4, evaluation: "Đ" },
        SinhHoc: { score: 3.2, evaluation: "KĐ" },
        LichSu: { score: 6.3, evaluation: "Đ" },
        DiaLy: { score: 9.4, evaluation: "Đ" },
        GDCD: { score: 8.7, evaluation: "Đ" },
        },
    },
    {
        name: "Em",
        scores: {
          Toan: { score: 7.1, evaluation: "Đ" },
          NguVan: { score: 9.2, evaluation: "Đ" },
          NgoaiNgu: { score: 8.7, evaluation: "Đ" },
          VatLy: { score: 4.4, evaluation: "KĐ" },
          HoaHoc: { score: 6.4, evaluation: "Đ" },
          SinhHoc: { score: 3.0, evaluation: "KĐ" },
          LichSu: { score: 5.0, evaluation: "Đ" },
          DiaLy: { score: 9.8, evaluation: "Đ" },
          GDCD: { score: 7.0, evaluation: "Đ" },
        },
      },
      {
        name: "Phuc",
        scores: {
          Toan: { score: 5.5, evaluation: "Đ" },
          NguVan: { score: 4.7, evaluation: "KĐ" },
          NgoaiNgu: { score: 4.2, evaluation: "KĐ" },
          VatLy: { score: 6.5, evaluation: "Đ" },
          HoaHoc: { score: 3.5, evaluation: "KĐ" },
          SinhHoc: { score: 8.1, evaluation: "Đ" },
          LichSu: { score: 6.4, evaluation: "Đ" },
          DiaLy: { score: 7.0, evaluation: "Đ" },
          GDCD: { score: 8.0, evaluation: "Đ" },
        },
      },
      {
        name: "Hieu",
        scores: {
          Toan: { score: 6.9, evaluation: "Đ" },
          NguVan: { score: 7.7, evaluation: "Đ" },
          NgoaiNgu: { score: 6.3, evaluation: "Đ" },
          VatLy: { score: 3.7, evaluation: "KĐ" },
          HoaHoc: { score: 6.8, evaluation: "Đ" },
          SinhHoc: { score: 6.3, evaluation: "Đ" },
          LichSu: { score: 3.5, evaluation: "KĐ" },
          DiaLy: { score: 7.9, evaluation: "Đ" },
          GDCD: { score: 9.6, evaluation: "Đ" },
        },
      },
      {
            name: "Hoang",
        scores: {
        Toan: { score: 5.5, evaluation: "Đ" },
        NguVan: { score: 7.3, evaluation: "Đ" },
        NgoaiNgu: { score: 7.0, evaluation: "Đ" },
        VatLy: { score: 5.8, evaluation: "Đ" },
        HoaHoc: { score: 7.5, evaluation: "Đ" },
        SinhHoc: { score: 5.2, evaluation: "Đ" },
        LichSu: { score: 7.6, evaluation: "Đ" },
        DiaLy: { score: 3.8, evaluation: "KĐ" },
        GDCD: { score: 9.9, evaluation: "Đ" },
        },
    },
    {
        name: "Khanh",
        scores: {
          Toan: { score: 7.0, evaluation: "Đ" },
          NguVan: { score: 3.7, evaluation: "KĐ" },
          NgoaiNgu: { score: 10.0, evaluation: "Đ" },
          VatLy: { score: 7.7, evaluation: "Đ" },
          HoaHoc: { score: 9.0, evaluation: "Đ" },
          SinhHoc: { score: 4.6, evaluation: "KĐ" },
          LichSu: { score: 6.4, evaluation: "Đ" },
          DiaLy: { score: 6.6, evaluation: "Đ" },
          GDCD: { score: 5.9, evaluation: "Đ" },
        },
      },
    ];

    //1. Lọc danh sách 3 học sinh đạt điểm TBHK cao nhất
    const top3Students = students.map((student) =>{
        let totalScore = 0;
        const subjects = Object.values(student.scores);
        //tính tổng điểm từng môn
        for (let i = 0; i < subjects.length; i++){
            totalScore += subjects[i].score;
        }
        return{
            name : student.name,
            average: average.toFixed(2), //Tính điểm trung bình
        };
    });
    //Sắp xếp học sinh theo điểm trung bình giảm dần và lấy 3 học sinh đầu
    top3Students.sort((a,b) => b.average - a.average);
    const top3 = top3Students.slice(0,3);

    console.log("3 học sinh đạt điểm TBHK cao nhất:", top3);

    //2. Tìm học sinh đạt điểm TBHK thấp nhất
    const lowestStudent = students.map((student) => {
      let totalScore = 0;
      const subjects = Object.values(student.scores);

      //Tính tổng điểm cho từng môn
      for (let i = 0; i < subjects.length; i++){
        totalScore += subjects[i].score;
      }
      const average = totalScore / subjects.length;
      return {
        name: student.name,
        average: average.toFixed(2), //Tính điểm trung bình
      };
    });

    //Sắp xếp học sinh theo điểm trung bình tăng dần và lấy học sinh đầu tiên (thấp nhất)
    lowestStudent.sort((a,b) => a.average - b.average);
    const lowest = lowestStudent[0];

    console.log("Học sinh đạt điểm TBHK thấp nhất:", lowest);

    //3. Tính điểm trung bình HK của toàn bộ 10 bạn học sinh trong lớp.
    let totalAverage = 0;

    //Tính tổng điểm trung bình của từng học sinh
    for (let student of student){
      let totalScore = 0;
      const subjects = Object.values(student.scores);

      //Tính tổng điểm từng môn
      for (let i = 0; i < subjects.length; i++){
        totalScore += subjects[i].score;
      }

      //Tính điểm trung bình cho học sinh hiện tại
      const average = totalScore / subjects.length;
      totalAverage += average; //Cộng dồn điểm trung bình vào totalAverage
    }

    //Tính điểm trung bình của lớp
    const classAverage = totalAverage / students.length;
    console.log("Điểm trung bình HK của toàn bộ lớp:", classAverage.toFixed(2));

    //In ra tên các học sinh đạt danh hiệu học lực: Giỏi - Khá - Trung Bình
    const honors = students.map((student) => {
      //Tính tổng điểm bằng cách duyệt qua các môn
      let totalScore = 0;
      let subjectCount = 0;

      for (const subject in student.scores){
        totalScore += student.scores[subject].score;
        subjectCount += 1;
      }

      //Tính điểm trung bình
      const average = totalScore / subjectCount;

      //Đánh giá học lực
      let evaluation;
      if (average >= 8){
        evaluation = "Giỏi";
      } else if (average >= 6.5){
        evaluation = "khá";
      } else {
        evaluation = "Trung Bình";
      }

      //Trả về tên học sinh và danh hiệu học lực
      return {name: student.name, evaluation};
    });

    console.log("Danh sách học sinh theo danh hiệu học lực:", honors);

    //5. Lọc danh sách học sinh có số điểm TBHK >= 7 (chỉ cần hiển thị tên).
    const studentsAbove7 = [];

    //lặp qua từng học sinh trong danh sách
    for(let student of student){
      let totalScore = 0;
      const subjects = Object.values(student.scores);

      //Tính tổng điểm cho từng môn 
      for (let i = 0; i < subjects.length; i++){
        totalScore += subjects[i].score;
      }

      //Tính điểm trung bình cho học sinh hiện tại
      const average = totalScore / subjects.length;

      //Kiểm tra nếu điểm trung bình >= 7
      if (average >= 7){
        studentsAbove7.push(student.name); //Thêm tên học sinh vào danh sách
      }
    }
    console.log("Danh sách học sinh có TBHK >= 7:", studentsAbove7);