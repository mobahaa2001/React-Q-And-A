import React from 'react'
import { Row, Form, Col } from 'react-bootstrap'
import { useState } from 'react'
import { question } from '../data'

const InfoInput = ({ onAdd, notify }) => {
  // useState from React Hooks---- To add Question
  const [que, setQue] = useState('')

  // useState from React Hooks---- To add Answer
  const [ans, setAns] = useState('')

  // To push Data to Array
  const addNewItem = () => {
    if (que === '' || ans === '') {
      notify('Please... Continue Data', 'Error')
      return
    }
    question.push({ id: Math.random(), q: que, a: ans })
    setQue('')
    setAns('')
    onAdd()
  }
  return (
    <Row className="my-3">
      <Col sm="5">
        <Form.Control
          value={que}
          onChange={(e) => setQue(e.target.value)}
          type="text"
          placeholder="Enter Question"
        />
      </Col>
      <Col sm="5">
        <Form.Control
          value={ans}
          onChange={(e) => setAns(e.target.value)}
          type="text"
          placeholder="Enter Answer"
        />
      </Col>
      <Col sm="2">
        <button onClick={addNewItem} className="btn-color w-100" type="submit">
          Add
        </button>
      </Col>
    </Row>
  )
}

export default InfoInput
