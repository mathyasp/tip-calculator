import './Bill.css';

function Bill({ bill, setBill }) {

  const handleBillChange = (e) => {
    setBill(e.target.value);
  };

  return (
    <div className="Bill-Input">
      <p>Bill</p>
      <form>
        <input
          value={bill}
          placeholder={bill}
          onChange={handleBillChange}
        />
      </form>
    </div>
  );
}

export default Bill;