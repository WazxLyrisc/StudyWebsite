let btn = document.querySelector("#btn");
let sidebar = document.querySelector(".sidebar");
let searchBtn = document.querySelector(".bx-search");

btn.onclick = function () {
    sidebar.classList.toggle("active");
}

//dữ liệu học tập mẫu
const studyLogs = [
    { date: '2025-03-21', subject: 'Toán', hours: 2 },
    { date: '2025-03-21', subject: 'Lý', hours: 1 },
    { date: '2025-03-22', subject: 'Hóa', hours: 3 },
    { date: '2025-03-22', subject: 'Sử', hours: 1 },
    { date: '2025-03-23', subject: 'Văn', hours: 2 },
];

//Xử lý dữ liệu để tính tổng giờ học theo từng ngày
const stats = {};

studyLogs.forEach(log => {
    const date = new Date(log.date);
    const weekday = date.toLocaleDateString('vi-VN', { weekday: 'long' });
    if (!stats[weekday]) stats[weekday] = 0;
    stats[weekday] += log.hours;
});

const labels = Object.keys(stats);
const data = Object.values(stats);

//Vẽ biểu đồ bằng chart.js

const ctx = document.getElementById('studyChart').getContext('2d');
const studyChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: labels,
        datasets: [{
            label: 'Giờ học',
            data: data,
            backgroundColor: '#ff80ab',
            borderRadius: 10
        }]
    },
    option: {
        scales: {
            y: {
                beginAtZero: true,
                title: { display: true, text: 'Giờ học' }
            }
        }
    }
});