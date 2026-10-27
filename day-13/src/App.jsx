import React, { useState } from 'react'
import questions from './question.json'
import './App.css'

const App = () => {
  const [current, setCurrent] = useState(0)
  const [score, setScore] = useState(0)
  const [selected, setSelected] = useState(null)
  const [finished, setFinished] = useState(false)

  const q = questions[current]
  const progress = (current / questions.length) * 100

  const handleSelect = (option) => {
    if (selected) return
    setSelected(option)
    if (option === q.correct_answer) setScore((s) => s + 1)
  }

  const handleNext = () => {
    if (current + 1 < questions.length) {
      setCurrent(current + 1)
      setSelected(null)
    } else {
      setFinished(true)
    }
  }

  const handleRestart = () => {
    setCurrent(0)
    setScore(0)
    setSelected(null)
    setFinished(false)
  }

  if (finished) {
    const percent = Math.round((score / questions.length) * 100)
    return (
      <div className="quiz">
        <h2>Quiz Complete!</h2>
        <p className="score">{score} / {questions.length} ({percent}%)</p>
        <button className="next" onClick={handleRestart}>Restart</button>
      </div>
    )
  }

  return (
    <div className="quiz">
      <div className="progress">
        <div className="progress-bar" style={{ width: `${progress}%` }} />
      </div>

      <div className="meta">
        <span>Question {current + 1} of {questions.length}</span>
        <span className={`badge ${q.difficulty.toLowerCase()}`}>{q.difficulty}</span>
      </div>
      <p className="category">{q.category}</p>

      <h2>{q.question}</h2>

      {q.options.map((option) => {
        let className = 'option'
        if (selected) {
          if (option === q.correct_answer) className += ' correct'
          else if (option === selected) className += ' wrong'
        }
        return (
          <button
            key={option}
            className={className}
            onClick={() => handleSelect(option)}
          >
            {option}
          </button>
        )
      })}

      {selected && (
        <button className="next" onClick={handleNext}>
          {current + 1 === questions.length ? 'Finish' : 'Next'}
        </button>
      )}
    </div>
  )
}

export default App