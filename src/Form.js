import React, { useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'


function Form() {

const [question , setQuestion] = useState("")

const [option1 , setOption1] = useState("")
const [option2 , setOption2] = useState("")
const [option3 , setOption3] = useState("")
const [option4 , setOption4] = useState("")

const [answer , setAnswer] = useState("")


const handleSubmit = async()=>{
  let result = await axios.post("http://localhost:8000/data/add" , {question,option1,option2,option3,option4 ,answer} )
result = result.data
console.log(result)
if(result)
alert("added the data")
}


  return (
    
    <form id= "quizform">
      <Link to="/Form">Form</Link>
      <Link to="/AllQuestion"> AddQuestion</Link>


        <label htmlFor="qusetions">questions:</label>
        <input type='text' id='question' name='question' value={question}  onChange={(e)=>{setQuestion(e.target.value)}}/><br></br>

        <label htmlFor="option1">option 1:</label>
        <input type='text' id='option1' name='option1' value={option1}  onChange={(e)=>{setOption1(e.target.value)}}/><br></br>

        <label htmlFor="option2">option 2:</label>
        <input type='text' id='option2' name='option2' value={option2}  onChange={(e)=>{setOption2(e.target.value)}}/><br></br>

        <label htmlFor="option3">option 3:</label>
        <input type='text' id='option3' name='option3' value={option3}  onChange={(e)=>{setOption3(e.target.value)}}/><br></br>

        <label htmlFor="option4">option 4:</label>
        <input type='text' id='option4' name='option4' value={option4}  onChange={(e)=>{setOption4(e.target.value)}}/><br></br>

        <label htmlFor="Answer">Answer</label>
        <input type='text' id='Answer' name='Answer' value={answer}  onChange={(e)=>{setAnswer(e.target.value)}}/><br></br>


<button type='submit' onClick={(e)=>{e.preventDefault()
handleSubmit()}}>submit</button>

    </form>
    
  )
}

export default Form