import React, { useState, useEffect } from 'react';
import { Statistics } from 'components/Statistics/Statistics';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Section from './Section/Section';
import Notification from './Notification/Notification';
import { Box } from './Box';
import { GlobalStyle } from './GlobalStyles';
// import { isDocument } from '@testing-library/user-event/dist/utils';

export const App = () => {
  const step = 1;
  const initialValue = 0;

  const [good, setGood] = useState(initialValue);
  const [neutral, setNeutral] = useState(initialValue);
  const [bad, setBad] = useState(initialValue);
  const [total, setTotal] = useState(initialValue);
  const [positive, setPositive] = useState(initialValue);

  const handleFeedback = e => {
    const { textContent } = e.target;

    switch (textContent) {
      case 'Good':
        setGood(prevState => prevState + step);
        break;

      case 'Neutral':
        setNeutral(prevState => prevState + step);
        break;

      case 'Bad':
        setBad(prevState => prevState + step);
        break;

      default:
        return;
    }
  };

  useEffect(() => {
    const total = good + neutral + bad;
    document.title = `Total Feedback count ${total}`;
  }, [good, neutral, bad]);

  useEffect(() => {
    setTotal(good + neutral + bad);
  }, [good, neutral, bad]);

  useEffect(() => {
    setPositive(((good / total) * 100).toFixed(2));
  }, [good, total]);

  return (
    <>
      <Section title="Please leave feedback">
        <Box display="flex" gridGap="10px">
          <FeedbackOptions
            good={good}
            neutral={neutral}
            bad={bad}
            handleFeedback={handleFeedback}
          />
        </Box>
      </Section>
      <Section title="Statistics">
        {setTotal ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={positive}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
      <GlobalStyle />
    </>
  );
};

// import { Component } from 'react';
// import { Statistics } from 'components/Statistics/Statistics';
// import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
// import Section from './Section/Section';
// import Notification from './Notification/Notification';
// import { Box } from './Box';
// import { GlobalStyle } from './GlobalStyles';

// class App extends Component {
//   static defaultProps = {
//     step: 1,
//     initialValue: 0,
//   };

//   static propTypes = {};

//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };

//   handleFeedback = option => {
//     this.setState(prevState => ({ [option]: prevState[option] + 1 }));
//   };

//   countTotalFeedback = () => {
//     const values = Object.values(this.state);
//     return values.reduce((acc, value) => acc + value, 0);
//   };

//   countPositiveFeedbackPercentage = () => {
//     return ((this.state.good / this.countTotalFeedback()) * 100).toFixed();
//   };

//   render() {
//     const options = Object.keys(this.state);
//     return (
//       <>
//         <Section title="Please leave feedback">
//           <Box display="flex" gridGap="10px">
//             <FeedbackOptions
//               options={options}
//               onLeaveFeedback={this.handleFeedback}
//             />
//           </Box>
//         </Section>
//         <Section title="Statistics">
//           {this.countTotalFeedback() ? (
//             <Statistics
//               good={this.state.good}
//               neutral={this.state.neutral}
//               bad={this.state.bad}
//               total={this.countTotalFeedback()}
//               positivePercentage={this.countPositiveFeedbackPercentage()}
//             />
//           ) : (
//             <Notification message="There is no feedback" />
//           )}
//         </Section>
//         <GlobalStyle />
//       </>
//     );
//   }
// }

// export default App;
