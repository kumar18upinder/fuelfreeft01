import React, { useState } from 'react';// You can create this CSS file to style your components

function Inputs() {
  const [text, setText] = useState('');
  const [style, setStyle] = useState({});
  const [showInputs, setShowInputs] = useState(false);

  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  const handleStyleChange = (event) => {
    const { name, value } = event.target;
    setStyle({ ...style, [name]: value });
  };

  const toggleInputs = () => {
    setShowInputs(!showInputs);
  };

  return (
    <div className="namita">
    <div>
      <button onClick={toggleInputs}>Toggle Inputs</button>
    </div>
    {showInputs && (
      <div>
        <input
          type="text"
          placeholder="Enter text"
          value={text}
          onChange={handleTextChange}
        />
      </div>
    )}
    {showInputs && (
      <div>
        <input
          type="text"
          name="color"
          placeholder="Enter text color"
          onChange={handleStyleChange}
        />
        <input
          type="text"
          name="fontSize"
          placeholder="Enter font size"
          onChange={handleStyleChange}
        />
          <input
          type="text"
          name="backgroundcolor"
          placeholder="Enter background color"
          onChange={handleStyleChange}
        />
      </div>
    )}
    <div>
      <p style={style}>{text}</p>
</div>
</div>
  );
}

export default Inputs;
