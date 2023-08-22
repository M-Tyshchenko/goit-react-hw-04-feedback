import { useState } from 'react';
import { FeedbackOptions } from './Feedback/FeedbackOptions';
import { GlobalStyles } from './GlobalStyle';
import { Notification } from './Notification/Notification';
import { Section } from './Section/Section';
import { Statistics } from './Statistics/Statistics';

const options = ['good', 'neutral', 'bad'];

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const BtnHandleClick = option => {
    switch (option) {
      case 'good':
        setGood(prevState => prevState + 1);
        break;

      case 'neutral':
        setNeutral(prevState => prevState + 1);
        break;

      case 'bad':
        setBad(prevState => prevState + 1);
        break;

      default:
        console.log('undefined option');
    }
  };

  const countTotalFeedback = (good, neutral, bad) => good + neutral + bad;

  const countPositiveFeedbackPercentage = (good, total) => {
    if (good === 0) {
      return 0;
    }
    return Math.round((good * 100) / total);
  };

  return (
    <div>
      <Section title="Please leave feedback">
        <FeedbackOptions options={options} onLeaveFeedback={BtnHandleClick} />
      </Section>

      <Section title="Statistics">
        {!good && !neutral && !bad ? (
          <Notification message="There is no feedback" />
        ) : (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback(good, neutral, bad)}
            positivePerc={countPositiveFeedbackPercentage(
              good,
              countTotalFeedback(good, neutral, bad)
            )}
          />
        )}
      </Section>
      <GlobalStyles />
    </div>
  );
};
