import './TipDisplay.css';

function TipDisplay({ people, tipAmount }) {
  return (
    <div className="Tip-Display">
      <div>
        <p>Tip</p>
        {people > 1 ? <p className='subtext'>per person</p> : null}
      </div>
      <p>${(tipAmount / people).toFixed(2)}</p>
    </div>
  );
};

export default TipDisplay;