import  css  from './Statistic.module.css';

export const Statistic = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage
}) => {
  return (
    <div className={css.statistic} >
      <span> Good {good}</span>
      <span> Neutral {neutral}</span>
      <span> Bad {bad}</span>
      <span> Total {total}</span>
      <span> Positive feedback {positivePercentage} %</span>
    </div>
  );
};
