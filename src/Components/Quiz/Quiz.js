import React from 'react';
import './index.scss';

const questions = [
  {
    title: 'Выберите правильный вариант ответа',
    variants: ['Правильный вариант', 'Не правильный вариант', 'Тоже не правильный вариант'],
    correct: 0,
  },
  {
    title: 'Сколько вам лет ?',
    variants: ['Не знаю', 'От 1 до 100 лет', 'От 100 до 200 лет'],
    correct: 1,
  },
  {
    title: 'Правильный вариант ответа - третий вариант ответа',
    variants: [
      'Первый вариатн',
      'Второй вариант',
      'Третий вариант',
    ],
    correct: 2,
  },
];

function Result({correct}) {
  return (
    <div className="result">
      <img className='img' alt='#' src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png" />
      <h2 className='h2'>Вы отгадали {correct} ответа из {questions.length}</h2>
      <a className='a' href='/'>
      
      </a>
      
    </div>
  );
}

function Game({ step, question, onClickVariant}) {
  const percentage = Math.round((step / questions.length) * 100);
  

  return (
    <>
      <div className="progress">
        <div style={{ width: `${percentage}%` }} className="progress__inner"></div>
      </div>
      <h1 className='h1'>{question.title}</h1>
      <ul className='ul'>
      {question.variants.map((text, index) => <li className='li' onClick={()=>onClickVariant(index)} key={text}>{text}</li>)}
      </ul>
    </>
  );
}

function Quiz() {
  const [step, setStep] = React.useState(0);
  const [correct, setCorrect] = React.useState(0);
  const question = questions[step];
  
  const onClickVariant = (index) => {
    console.log(step, index);
    setStep(step + 1);
    if (index === question.correct) {
      setCorrect(correct + 1);
    }
  }
  return (
    <div className="Quiz">
     {
      step !== questions.length ?  (
        <Game step = {step} question = {question} onClickVariant= {onClickVariant}/>
        ) : (
          <Result correct={correct} />
        )}
      
    </div>
  );
}

export default Quiz;
