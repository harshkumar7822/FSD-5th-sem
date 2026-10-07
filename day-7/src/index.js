import React from 'react'
import ChildCompont from './ChildCompont'

const App = () => {
  const user = [{
    username: "Harsh",
    email: "harsh@example.com",
    section: "A"
  },
  {
    username: "abc",
    email: "abc@example.com",
    section: "A"
  }]
  return (
    <div>
      {/* <ChildCompont>user{user[0]}</ChildCompont> */}
      <ChildCompont {...user[1]} section="CSE-17" />
    </div>
  )
}

export default App