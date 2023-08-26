import { useState } from "react";

function FunctionComponent({ nama }) {
  const [nilai, setValue] = useState(0);

  function handleAdd() {
    setValue(nilai + 1);
  }

  function handleRemove() {
    if (nilai > 0) {
      setValue(nilai - 1);
    }
  }

  return (
    <div className="Container">
      <h1>Function Component</h1>
      <p>Ini dibuat {nama} dengan Function Component</p>
      <button className="Btn" onClick={handleRemove}>
        -
      </button>
      <span className="ValueAngka">{nilai}</span>
      <button className="Btn" onClick={handleAdd}>
        +
      </button>
    </div>
  );
}

export default FunctionComponent;
