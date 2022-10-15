import React from 'react';
import { useParams } from 'react-router';
import Step from 'step/Step';

const StepContainer = () => {
  let { id } = useParams();
  return (
    <div>
      <Step stepId={id} />
    </div>
  );
};

export default StepContainer;
