// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";

const birthdaysData = [
  { date: "2024-05-28", name: "John Doe" },
  { date: "2024-05-28", name: "Jane Smith" },
  { date: "2024-05-29", name: "Alice Johnson" },
  { date: "2024-05-30", name: "Bob Brown" },
];

const CalendarApp = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [favoriteBirthdays, setFavoriteBirthdays] = useState([]);

  const filteredBirthdays = birthdaysData.filter(
    (birthday) => birthday.date === selectedDate
  );

  const handleDateClick = (date) => {
    setSelectedDate(date);
  };

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

const Calendar = ({ onDateClick }) => {
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
