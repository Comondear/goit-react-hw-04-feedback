import PropTypes from 'prop-types';
import React from 'react';
import { Button } from './FeedbackOptions.styled';

const FeedbackOptions = ({ good, neutral, bad, handleFeedback }) => {
  return (
    <>
      <Button onClick={handleFeedback}>Good</Button>
      <Button onClick={handleFeedback}>Neutral</Button>
      <Button onClick={handleFeedback}>Bad</Button>
    </>
  );
};

FeedbackOptions.propTypes = {
  handleFeedback: PropTypes.func,
};

export default FeedbackOptions;
