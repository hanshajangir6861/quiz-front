import axios from 'axios'
import React, { useEffect, useState } from 'react'





function AllQuestion() {

  ////////show questions///
  const [Question, setQuestion] = useState([])
  const [counter, setCounter] = useState(15)
  const [currentQuestion, setCurrentQuestion] = useState(0)


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

        }

      }
    }, 1000)

    return () => clearInterval(timer)


  }, [currentQuestion, counter, Question])


  return (

    <div>
      <p>Counter:{counter}</p>

      {currentQuestion < Question.length && (
        <div key={currentQuestion}>
          <p>{Question[currentQuestion].question}</p>
          <button>{Question[currentQuestion].option1}</button><br/>
          <button>{Question[currentQuestion].option2}</button><br/>
          <button>{Question[currentQuestion].option3}</button><br/>
          <button>{Question[currentQuestion].option4}</button><br/>

        </div>
      )}

    </div>
  )
}

export default AllQuestion