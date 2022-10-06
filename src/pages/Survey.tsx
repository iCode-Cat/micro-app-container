import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
const MicroAppsSurvey = React.lazy(() => import('remote/MicroAppsSurvey'));
const Survey = ({ setState, state, loaded, setLoaded }: any) => {
  const navigate = useNavigate();

  const condition = state?.condition;
  useEffect(() => {
    if (condition?.allQuestionAnswered) {
      navigate('/steps');
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
