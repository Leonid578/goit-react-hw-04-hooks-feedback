import { useState } from 'react';
import Statistics from './Statistics/Statistics';
import FeedbackOptions from "./FeedbackOptions/FeedbackOptions";
import Section from './Section/Section';
import Notification from './Notification/Notification';
import style from './App.module.css'

export function App(){
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const countTotalFeedback = () => good + neutral + bad;

  const countPositiveFeedbackPercentage = () => Math.round(good / countTotalFeedback() * 100);

  const onFeedbackHandle = (e) => {
    switch (e.currentTarget.name) {
      case "good":
        setGood(prev => prev + 1);
        break;
      case "neutral":
        setNeutral(prev => prev + 1);
        break;
      case "bad":
        setBad(prev => prev + 1);
        break;
      default:
        break;
    }
  }
  const btns = ["good", "neutral", "bad"];
  
    return (
      <div className={style.body}>
        <Section title="Please leave feedback">
          <FeedbackOptions options={btns} onLeaveFeedback={onFeedbackHandle}/>
        </Section>
        
        <Section title="Statistics">
          {countTotalFeedback() ?
            <Statistics good={good}
              neutral={neutral}
              bad={bad}
              total={countTotalFeedback}
              positivePercentage={countPositiveFeedbackPercentage} /> :
              <Notification message="There is no feedback"/> }
        </Section>
      </div>
    );
}


// export class App extends Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0
//   };
//   countTotalFeedback = () => {
//     return Object.values(this.state).reduce((total, el) => total + el, 0);
//   }

//   countPositiveFeedbackPercentage = () => (Math.round(this.state.good / this.countTotalFeedback() * 100));

//   onFeedbackHandle = (e) => {
//     const stateName = e.currentTarget.name;
//     this.setState(prev => ({ [stateName]: prev[stateName] + 1 }));
//   }
//   btns = () => Object.keys(this.state);
  
//   render() {
//     const {good, neutral, bad} = this.state
//     return (
//       <div className={style.body}>
//         <Section title="Please leave feedback">
//           <FeedbackOptions options={this.btns()} onLeaveFeedback={this.onFeedbackHandle}/>
//         </Section>
        
//         <Section title="Statistics">
//           {this.countTotalFeedback() ?
//             <Statistics good={good}
//               neutral={neutral}
//               bad={bad}
//               total={this.countTotalFeedback}
//               positivePercentage={this.countPositiveFeedbackPercentage} /> :
//               <Notification message="There is no feedback"/> }
//         </Section>
//       </div>
//     );
//   }
// }