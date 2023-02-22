import { GlobalStyle } from './GlobalStyle';
import 'modern-normalize';
import { Component } from 'react';
import { Counter } from './Counter/Counter';
import { Statistic } from './Counter/Statistic';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  addGoodFellback = () => {
    this.setState(prevState => {
      return {
        good: prevState.good + 1,
      };
    });
  };

  addNeutralFellback = () => {
    this.setState(prevState => {
      return {
        neutral: prevState.neutral + 1,
      };
    });
  };

  addBadFellback = () => {
    this.setState(prevState => {
      return {
        bad: prevState.bad + 1,
      };
    });
  };

  countTotalFeedback = () => {
    return this.bad + this.good + this.neutral;
  };

  render() {
    return (
      <div>
        <Counter
          addGoodFellback={this.addGoodFellback}
          addNeutralFellback={this.addNeutralFellback}
          addBadFellback={this.addBadFellback}
        />

        <Statistic
          good={this.state.good}
          neutral={this.state.neutral}
          bad={this.state.bad}
        />

        <GlobalStyle />
      </div>
    );
  }
}
