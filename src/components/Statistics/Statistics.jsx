import React from 'react';
import s from './Statistics.module.css';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <ul className={s.statistics}>
      <li>Good:{good} </li>
      <li>Neutral: {neutral}</li>
      <li>Bad: {bad}</li>
      <li>TotalFeedback: {total}</li>
      <li>PositivePercentage: {positivePercentage}%</li>
    </ul>
  );
};
export default Statistics;
