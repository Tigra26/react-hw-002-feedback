import React, { Component } from 'react';
import   Section   from './components/section/Section';
import  FeedbackOptions  from './components/feedbackOptions/FeedbackOptions';
import  Statistics  from './components/statistics/Statistics';
import  Notification  from './components/notification/Notification';



export class App extends Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0
      }

    
  leaveFeedback = ({ target: { name } }) => {
    this.setState(prevState => ({
      [name]: prevState[name] + 1,
    }));
  };

  countTotalFeedback = () => {
    return Object.values(this.state).reduce((total, curr) => (total += curr));
  };


  countPositiveFeedbackPercentage = totalFeedback => {
    const { good } = this.state;

    if (totalFeedback > 0) return Math.round((good / totalFeedback) * 100);
    return 0;
  };

    render(){
        const { good, neutral, bad } = this.state;
        const totalFeedback = this.countTotalFeedback();
        const positivePercentage = this.countPositiveFeedbackPercentage(totalFeedback);

       return (
        <>
        <Section title="Leave your feedback, please!">
             <FeedbackOptions
            options={Object.keys(this.state)}
            leaveFeedback={this.leaveFeedback}
          />
        </Section>
        <Section title="Statistics">
        {totalFeedback ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={totalFeedback}
            positivePercentage={positivePercentage}
          />
        ) : (
          <Notification message="There is no feedback yet :(" />
        )}
      </Section>
      </>
       ) 
    }
}
 


