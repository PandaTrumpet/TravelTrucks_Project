import React, { useState } from "react";
import css from "./Calendar.module.css";

export default function Calendar() {
  const [currentDate, setCurrentDate] = useState(new Date());

  // Получаем название месяца и год
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const month = currentDate.getMonth();
  const year = currentDate.getFullYear();

  // Функция для получения количества дней в месяце
  const getDaysInMonth = (year, month) => {
    return new Date(year, month + 1, 0).getDate();
  };

  // Переключение месяца назад
  const prevMonth = () => {
    setCurrentDate(new Date(year, month - 1, 1));
  };

  // Переключение месяца вперед
  const nextMonth = () => {
    setCurrentDate(new Date(year, month + 1, 1));
  };

  // Функция для рендера дней месяца
  const renderDays = () => {
    const daysInMonth = getDaysInMonth(year, month);
    const startDay = new Date(year, month, 1).getDay(); // День недели начала месяца
    const days = [];

    // Заполняем пустые ячейки до первого дня месяца
    for (let i = 0; i < startDay; i++) {
      days.push(<div key={`empty-${i}`} className={css.empty}></div>);
    }

    // Добавляем дни месяца
    for (let i = 1; i <= daysInMonth; i++) {
      days.push(
        <div key={i} className={css.day}>
          {i}
        </div>
      );
    }

    return days;
  };

  return (
    <div className={css.calendar}>
      <div className={css.header}>
        <button onClick={prevMonth}>&lt;</button>
        <h2>
          {monthNames[month]} {year}
        </h2>
        <button onClick={nextMonth}>&gt;</button>
      </div>
      <div className={css.weekdays}>
        <div>Sun</div>
        <div>Mon</div>
        <div>Tue</div>
        <div>Wed</div>
        <div>Thu</div>
        <div>Fri</div>
        <div>Sat</div>
      </div>
      <div className={css.days}>{renderDays()}</div>
    </div>
  );
}
