import React, { useState } from 'react';

const DynamicallyChanges = () => {
  // const [htmlCode, setHtmlCode] = useState();
  // const [cssCode, setCssCode] = useState();

  // const handleHtmlChange = (event) => {
  //   setHtmlCode(event.target.value);
  // };

  // const handleCssChange = (event) => {
  //   setCssCode(event.target.value);
  // };
  const data = {
    addHtmlCode: '<h1>Hello, world!</h1>'
  };

  return (
    <div>
      {/* <div className="code-editor">
        <h2>HTML</h2>
        <textarea value={htmlCode} onChange={handleHtmlChange} />
      </div>

      <div className="code-editor">
        <h2>CSS</h2>
        <textarea value={cssCode} onChange={handleCssChange} />
      </div>

      <div className="live-preview">
        <div dangerouslySetInnerHTML={{ __html: htmlCode }} />
        <style>{cssCode}</style>
      </div> */}

<div dangerouslySetInnerHTML={{ __html: data?.addHtmlCode }} />
    </div>
  );
};

export default DynamicallyChanges;