import React from 'react';
import { useParams } from 'react-router';
import Step from 'step/Step';
import FooterComp from '../components/Footer';

const StepContainer = () => {
  let { id } = useParams();
  return (
    <div>
      <Step stepId={id} />
    </div>
  );
};

export default StepContainer;
