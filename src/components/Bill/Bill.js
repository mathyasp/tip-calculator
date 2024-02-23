import { useState } from 'react';

function Bill() {
  const [bill, setBill] = useState('');

  const handleBillChange = (e) => {
    setBill(e.target.value);
  };

  return (
    <div className="Bill-Input">
      <p>Bill</p>
      <form>
        <input
          value={bill}
          placeholder="0.00"
          onChange={handleBillChange}
        />
      </form>
    </div>
  );
}

export default Bill;