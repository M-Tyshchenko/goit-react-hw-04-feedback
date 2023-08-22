import { FeedbackOptions } from './Feedback/FeedbackOptions';
import { GlobalStyles } from './GlobalStyle';
import { Notification } from './Notification/Notification';
import { Section } from './Section/Section';
import { Statistics } from './Statistics/Statistics';
import { Component } from 'react';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  BtnHandleClick = key => {
    this.setState(prevState => {
      return {
        [key]: prevState[key] + 1,
      };
    });
  };

  countTotalFeedback = (good, neutral, bad) => {
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = (good, total) => {
    if (good === 0) {
      return 0;
    }
    return Math.round((good * 100) / total);
  };

  render() {
    const { good, neutral, bad } = this.state;

    return (
      <div>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.BtnHandleClick}
          />
        </Section>

        <Section title="Statistics">
          {!good && !neutral && !bad ? (
            <Notification message="There is no feedback" />
          ) : (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback(good, neutral, bad)}
              positivePerc={this.countPositiveFeedbackPercentage(
                good,
                this.countTotalFeedback(good, neutral, bad)
              )}
            />
          )}
        </Section>
        <GlobalStyles />
      </div>
    );
  }
}
