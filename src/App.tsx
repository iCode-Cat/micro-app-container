import React, { useRef, useEffect, useState, Suspense } from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter,
  Navigate,
  NavLink,
  Route,
  Routes,
} from 'react-router-dom';
import Step from 'step/Step';
import './index.css';
import Survey from './pages/Survey';

const App = () => {
  const [state, setState] = useState<any>();
  const [loaded, setLoaded] = React.useState(false);
  const [redirected, setRedirected] = React.useState(false);
  const condition = state?.condition;

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <>
        <BrowserRouter>
          <div className='container'>
            <Routes>
              <Route
                path='/'
                element={
                  <Survey
                    setState={setState}
                    state={state}
                    setLoaded={setLoaded}
                    loaded={loaded}
                    setRedirected={setRedirected}
                    redirected={redirected}
                  />
                }
              />
              <Route
                path='/steps'
                element={
                  <div>
                    <Step stepId='301' />
                  </div>
                }
              />
            </Routes>
          </div>
        </BrowserRouter>
      </>
    </Suspense>
  );
};
ReactDOM.render(<App />, document.getElementById('app'));
