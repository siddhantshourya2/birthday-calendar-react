// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";

// Sample data for birthdays
const birthdaysData = [
  { date: "2024-05-28", name: "John Doe" },
  { date: "2024-05-28", name: "Jane Smith" },
  { date: "2024-05-29", name: "Alice Johnson" },
  { date: "2024-05-30", name: "Bob Brown" },
  // Add more birthdays here
];

const CalendarApp = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [favoriteBirthdays, setFavoriteBirthdays] = useState([]);

  // Filter birthdays for the selected date
  const filteredBirthdays = birthdaysData.filter(
    (birthday) => birthday.date === selectedDate
  );

  // Function to handle clicking on a date
  const handleDateClick = (date) => {
    setSelectedDate(date);
  };

  // Function to handle adding a birthday to favorites
  const addToFavorites = (name) => {
    setFavoriteBirthdays([...favoriteBirthdays, name]);
  };

  return (
    <div>
      {/* Calendar Component */}
      <Calendar onDateClick={handleDateClick} />

      {/* Displaying birthdays for selected date */}
      {selectedDate && (
        <div>
          <h2>Birthdays on {selectedDate}</h2>
          <ul>
            {filteredBirthdays.map((birthday, index) => (
              <li key={index}>
                {birthday.name}{" "}
                <button onClick={() => addToFavorites(birthday.name)}>
                  Add to Favorites
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Display favorite birthdays */}
      <div>
        <h2>Favorite Birthdays</h2>
        <ul>
          {favoriteBirthdays.map((name, index) => (
            <li key={index}>{name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

// Dummy Calendar Component - You can replace this with your actual calendar component
// eslint-disable-next-line react/prop-types
const Calendar = ({ onDateClick }) => {
  // Dummy function to generate some dates
  const generateDates = () => {
    const dates = [];
    for (let i = 1; i <= 31; i++) {
      dates.push(`2024-05-${i.toString().padStart(2, "0")}`);
    }
    return dates;
  };

  return (
    <div>
      <h2>Calendar</h2>
      <div>
        {generateDates().map((date, index) => (
          <div
            key={index}
            onClick={() => onDateClick(date)}
            style={{ cursor: "pointer" }}
          >
            {date}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CalendarApp;
