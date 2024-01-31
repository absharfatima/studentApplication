import React, { useState } from 'react';

const ActivityList = () => {
  const [activity, setActivity] = useState('');
  const [activityList, setActivityList] = useState([]);

  const handleInputChange = (e) => {
    setActivity(e.target.value);
  };

  const handleAddActivity = () => {
    if (activity.trim() !== '') {
      // Update the activity list
      setActivityList([...activityList, activity]);

      // Clear the activity input
      setActivity('');
    }
  };

  return (
    <div>
      <h2>Activity List</h2>

      {/* Activity input */}
      <label>
        Activity:
        <input type="text" value={activity} onChange={handleInputChange} />
      </label>

      {/* Button to add activity */}
      <button onClick={handleAddActivity}>Click Me</button>

      {/* Display count of activities */}
      <p>Count: {activityList.length}</p>

      {/* Display the list of activities */}
      <ul>
        {activityList.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default ActivityList;
