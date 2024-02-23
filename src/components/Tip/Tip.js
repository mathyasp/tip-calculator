import './Tip.css';

function Tip({ tip, setTip }) {
  const handleBillChange = (e) => {
    setTip(e.target.value);
  };

  const handleIncrement = () => {
    setTip(tip + 1);
  };

  const handleDecrement = () => {
    setTip(tip - 1);
  };

  return (
    <div className="Tip-Input">
      <p>Tip %</p>
        <button onClick={handleDecrement}>-</button>
        <input
          value={tip + '%'}
          placeholder={tip}
          onChange={handleBillChange}
        />
        <button onClick={handleIncrement}>+</button>
    </div>
  );
}

export default Tip;