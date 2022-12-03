import React from 'react';
import PropTypes from 'prop-types';
import scss from './Statistics.module.scss';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <div className={scss.statList}>
      <span className={scss.stat}>Good: {good}</span>
      <span className={scss.stat}>Neutral: {neutral}</span>
      <span className={scss.stat}>Bad: {bad}</span>
      <span className={scss.stat}>Total: {total}</span>
      <span className={scss.stat}>
        Positive feedback: {positivePercentage}%
      </span>
    </div>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  percentage: PropTypes.number.isRequired,
};
