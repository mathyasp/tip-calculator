import { useState } from 'react';

function People() {
  const [people, setPeople] = useState(1);

  const handlePeopleChange = (e) => {
    setPeople(e.target.value);
  };

  const handleIncrement = () => {
    setPeople(people + 1);
  };

  const handleDecrement = () => {
    setPeople(people - 1);
  };

  return (
    <div className="People-Input">
      <p>Number of People</p>
        <button onClick={handleDecrement}>-</button>
        <input
          value={people}
          placeholder={people}
          onChange={handlePeopleChange}
        />
        <button onClick={handleIncrement}>+</button>
    </div>
  );
}

export default People;