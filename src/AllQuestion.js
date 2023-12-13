import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './AllQuestion.css'

function AllQuestion() {

  ////////show questions///
  const [Question, setQuestion] = useState([])
  const [counter, setCounter] = useState(15)
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [totalScore, setTotalScore] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);

  // axios.get("https://quiz-back-7jtd.onrender.com/data/ques")
  // 

  useEffect(() => {
    axios.get("http://localhost:8000/data/ques")
      .then((result) => {
        setQuestion(result.data)
      })
  }, [])
  ///////////////////////




  useEffect(() => {
    const timer = setInterval(() => {
      if (counter >= 1) {
        setCounter((previousCount) => previousCount - 1);

      }
      if (counter === 0) {
        if (currentQuestion < Question.length - 1) {
          setCurrentQuestion((nextQuestion) => nextQuestion + 1)
          // console.log(currentQuestion)
          setCounter(15)
          setSelectedOption(null)

        }

      }
    }, 1000)

    return () => clearInterval(timer)


  }, [currentQuestion, counter, Question])

  const handleAnswerClick = (selectedOption) => {
    if (selectedOption === Question[currentQuestion].answer) {
      setTotalScore((score)=> score + 1)
      console.log("Correct Answer")
    }
    else {
      console.log("Wrong Answer")
    }
    setSelectedOption(selectedOption);
  };




  return (

    <div>
      <p>Total Score: {totalScore}</p>
      {/* <p>Correct Score: {correctScore}</p> */}
      

      {currentQuestion < Question.length && (
        <div key={currentQuestion}>
          <p>{Question[currentQuestion].question}</p>



          <button  className='chack' onClick={() => handleAnswerClick(Question[currentQuestion].option1)} disabled={selectedOption !== null}  >
            {Question[currentQuestion].option1}
          </button>
          {/* <br /> */}
          <button className='chack' onClick={() => handleAnswerClick(Question[currentQuestion].option2)}  disabled={selectedOption !== null} >
            {Question[currentQuestion].option2}
          </button>
         
          <button className='chack' onClick={() => handleAnswerClick(Question[currentQuestion].option3)}  disabled={selectedOption !== null} >
            {Question[currentQuestion].option3}
          </button>
          {/* <br /> */}

          <button className='chack' onClick={() => handleAnswerClick(Question[currentQuestion].option4)} disabled={selectedOption !== null} >
            {Question[currentQuestion].option4}
          </button>
          {/* <button>{Question[currentQuestion].option1}</button><br/>
          <button>{Question[currentQuestion].option2}</button><br/>
          <button>{Question[currentQuestion].option3}</button><br/>
          <button>{Question[currentQuestion].option4}</button><br/> */}

        </div>
      )}
<p>Counter:{counter}</p>
    </div>
  )
}

export default AllQuestion