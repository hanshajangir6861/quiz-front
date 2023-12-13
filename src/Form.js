import React, { useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import "./From.css"


function Form() {

const [question , setQuestion] = useState("")

const [option1 , setOption1] = useState("")
const [option2 , setOption2] = useState("")
const [option3 , setOption3] = useState("")
const [option4 , setOption4] = useState("")

const [answer , setAnswer] = useState("")

// https://quiz-back-7jtd.onrender.com/data/add
const handleSubmit = async()=>{
  let result = await axios.post("http://localhost:8000/data/add" , {question,option1,option2,option3,option4 ,answer} )
result = result.data
console.log(result)
if(result)
alert("added the data")
}


  return (
    
    <div id= "quizform" >
      {/* <Link to="/Form">Form</Link>
      <Link to="/AllQuestion"> AllQuestion</Link> */}


        <label htmlFor="qusetions">Questions:</label>
        <input type='text' id='question' name='question' value={question}  onChange={(e)=>{setQuestion(e.target.value)}}/><br></br>

        <label htmlFor="option1">Option 1:</label>
        <input type='text' id='option1' name='option1' value={option1}  onChange={(e)=>{setOption1(e.target.value)}}/><br></br>

        <label htmlFor="option2">Option 2:</label>
        <input type='text' id='option2' name='option2' value={option2}  onChange={(e)=>{setOption2(e.target.value)}}/><br></br>

        <label htmlFor="option3">Option 3:</label>
        <input type='text' id='option3' name='option3' value={option3}  onChange={(e)=>{setOption3(e.target.value)}}/><br></br>

        <label htmlFor="option4">Option 4:</label>
        <input type='text' id='option4' name='option4' value={option4}  onChange={(e)=>{setOption4(e.target.value)}}/><br></br>

        <label htmlFor="Answer">Answer</label>
        <input type='text' id='Answer' name='Answer' value={answer}  onChange={(e)=>{setAnswer(e.target.value)}}/><br></br>


<button  className='submit' type='submit' onClick={(e)=>{e.preventDefault()
handleSubmit()}}>Submit</button>

    </div>
    
  )
}

export default Form