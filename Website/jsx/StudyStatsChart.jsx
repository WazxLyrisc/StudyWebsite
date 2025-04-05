// 📁 StudyStatsChart.jsx
import React from "react";
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend
} from "recharts";

// Dữ liệu mẫu – sau này bạn sẽ thay bằng dữ liệu thật
const studyLogs = [
  { date: '2025-03-21', subject: 'Toán', hours: 2 },
  { date: '2025-03-21', subject: 'Lý', hours: 1 },
  { date: '2025-03-22', subject: 'Hoá', hours: 3 },
  { date: '2025-03-22', subject: 'Sử', hours: 1 },
  { date: '2025-03-23', subject: 'Văn', hours: 2 },
];

// Xử lý dữ liệu để tạo biểu đồ
const processData = (logs) => {
  const stats = {};

  logs.forEach(log => {
    const day = new Date(log.date).toLocaleDateString('vi-VN', { weekday: 'long' });
    if (!stats[day]) stats[day] = 0;
    stats[day] += log.hours;
  });

  return Object.entries(stats).map(([day, hours]) => ({ day, hours }));
};

const dataForChart = processData(studyLogs);

export default function StudyStatsChart() {
  return (
    <div className="p-6 bg-pink-100 rounded-2xl shadow-xl">
      <h2 className="text-2xl font-bold text-pink-700 mb-4">📊 Thống kê giờ học trong tuần</h2>
      
      <BarChart width={600} height={300} data={dataForChart}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="day" />
        <YAxis label={{ value: 'Giờ học', angle: -90, position: 'insideLeft' }} />
        <Tooltip />
        <Legend />
        <Bar dataKey="hours" fill="#FF69B4" name="Giờ học" />
      </BarChart>

      {/* Anime-style motivation below chart */}
      <div className="mt-4 text-pink-600 italic text-center">
        {/* 🌸 “Senpai học giỏi quá đi! Em cổ vũ hết mình cho senpai nè~” 🌸 */}
        Nhanh lên Bro!
      </div>
    </div>
  );
}
