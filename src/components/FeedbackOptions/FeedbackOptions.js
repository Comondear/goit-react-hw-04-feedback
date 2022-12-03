import React from 'react';
import PropTypes from 'prop-types';
import { Button } from './FeedbackOptions.styled';
import { ImSmile, ImTongue, ImSad } from 'react-icons/im';
import { theme } from 'theme';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return options.map((option, idx) => {
    return (
      <Button key={idx} onClick={() => onLeaveFeedback(option)} type="button">
        {renderIcon(option)}
        {capitalizeFirstLetter(option)}
      </Button>
    );
  });
};

function renderIcon(param) {
  switch (param) {
    case 'good':
      return <ImSmile fill={`${theme.colors.green}`} />;
    case 'neutral':
      return <ImTongue fill={`${theme.colors.yellow}`} />;
    case 'bad':
      return <ImSad fill={`${theme.colors.red}`} />;
    default:
      throw new Error('Unexpected value of option');
  }
}

function capitalizeFirstLetter(str) {
  return str[0].toUpperCase() + str.substring(1);
}

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
