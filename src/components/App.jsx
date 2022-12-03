import { Component } from 'react';
import { Statistics } from 'components/Statistics/Statistics';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Section from './Section/Section';
import Notification from './Notification/Notification';
import { Box } from './Box';
import { GlobalStyle } from './GlobalStyles';

class App extends Component {
  static defaultProps = {
    step: 1,
    initialValue: 0,
  };

  static propTypes = {};

  state = {
    good: this.props.initialValue,
    neutral: this.props.initialValue,
    bad: this.props.initialValue,
  };

  stateEntries = () => {
    return Object.entries(this.state);
  };

  handleFeedback = option => {
    this.setState(prevState => ({ [option]: prevState[option] + 1 }));
  };

  countFeedback = key => {
    this.setState(prevState => ({
      [key]: prevState[key] + 1,
    }));
  };

  countTotalFeedback = () => {
    const values = Object.values(this.state);
    return values.reduce((acc, value) => acc + value, 0);
  };

  // countPositiveFeedbackPercentage = (total, good) => {
  //   const percentage = Math.round((good / total) * 100);
  //   return percentage;
  // };

  countPositiveFeedbackPercentage = () => {
    const positiveFeedback = this.stateEntries().reduce(
      (acc, [key, value]) => (key === 'good' ? acc + value : acc),
      0
    );
    return ((positiveFeedback / this.countTotalFeedback()) * 100).toFixed();
  };

  // checkForData = () => {
  //   return Object.values(this.state).some(item => item > 0);
  // };

  render() {
    const options = Object.keys(this.state);
    return (
      // <div className={scss.counter}>
      //   <h2 className={scss.mainTitle}>Please leave feedback</h2>
      //   <FeedbackOptions />
      //   <h3 className={scss.statistics}>Statistics</h3>
      <>
        <Section title="Please leave feedback">
          <Box display="flex" gridGap="10px">
            <FeedbackOptions
              options={options}
              onLeaveFeedback={this.handleFeedback}
            />
          </Box>
        </Section>
        <Section title="Statistics">
          {this.countTotalFeedback() ? (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
        <GlobalStyle />
      </>
    );
  }
}
//   render() {
//     return (
//       <>
//         <Expresso />
//       </>
//     );
//   }
// }

export default App;
