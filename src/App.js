import React, { useRef, useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import Quiz from 'quiz_mf/Quiz';
import './index.css';

const App = () => {
  const [state, setState] = useState(null);
  console.log(state);
  return (
    <div className='container'>
      <div>Name: host</div>
      <div>Framework: react</div>
      <div>Language: TypeScript</div>
      <div>CSS: Empty CSS</div>
      <Quiz setState={setState} />
    </div>
  );
};
ReactDOM.render(<App />, document.getElementById('app'));
