import './Total.css';

function Total({ people, total }) {
  let displayTotal = Number(total / people).toFixed(2);

  return (
    <div className="Total">
      <div>
        <p>Total</p>
        {people > 1 ? <p className='subtext'>per person</p> : null}
      </div>
      <p>${displayTotal}</p>
    </div>
  );
};

export default Total;