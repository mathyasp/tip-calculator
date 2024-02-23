import { useState } from 'react';
import './App.css';
import Bill from '../Bill';
import Tip from '../Tip';
import People from '../People';
import TipDisplay from '../TipDisplay';
import Total from '../Total';

function App() {
  const [bill, setBill] = useState(0.00);
  const [tip, setTip] = useState(15);
  const [people, setPeople] = useState(1);

  const tipAmount = Number(bill) * (Number(tip) / 100);
  const total = Number(bill) + tipAmount;

  return (
    <div className="App">
      <div className="Input">
        <Bill bill={bill} setBill={setBill} />
        <Tip tip={tip} setTip={setTip} />
        <People people={people} setPeople={setPeople} />
      </div>
      <div className="Display">
        <TipDisplay people={people} tipAmount={tipAmount} />
        <Total bill={bill} people={people} total={total}/>
      </div>
    </div>
  );
}

export default App;
