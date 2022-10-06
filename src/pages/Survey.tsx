import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
const MicroAppsSurvey = React.lazy(() => import('remote/MicroAppsSurvey'));
const Survey = ({
  setState,
  state,
  loaded,
  setLoaded,
  redirected,
  setRedirected,
}: any) => {
  const navigate = useNavigate();
  const condition = state?.condition;

  useEffect(() => {
    // Clear redux state
    if (redirected) {
      window.location.href = '/';
    }
  }, []);

  useEffect(() => {
    if (condition?.allQuestionAnswered && !redirected) {
      navigate('/steps');
      setRedirected(true);
    }
  }, [condition?.allQuestionAnswered]);

  return (
    <div>
      <MicroAppsSurvey
        flow='playbook'
        setState={setState}
        loaded={loaded}
        setLoaded={setLoaded}
      />
    </div>
  );
};

export default Survey;
