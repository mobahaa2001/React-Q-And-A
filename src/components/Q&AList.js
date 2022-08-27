import React from 'react'
import { Row, Accordion } from 'react-bootstrap'
import { question } from '../data'


const QAList = ({ data, deleteOneItem }) => {
  const dataLocal = JSON.parse(localStorage.getItem('items'))
  // To delete one item from Array
  const onDeleteItem = (ID) => {
    if (localStorage.getItem('items') != null) {
      const index = question.findIndex((item) => item.id === ID)
      question.splice(index, 1)
      deleteOneItem(question)
    }
  }
  return (
    <Row>
      <Accordion defaultActiveKey="0">
        {localStorage.getItem('items') != null ? (
          dataLocal.map((item, index) => {
            return (
              <Accordion.Item key={index} eventKey={item.id}>
                <Accordion.Header>
                  <div className="m-auto">{item.q}</div>
                </Accordion.Header>
                <Accordion.Body>
                  <div className="px-3 d-inline">{item.a}</div>
                  <button
                    onClick={() => onDeleteItem(item.id)}
                    className="btn-color"
                  >
                    Delete{' '}
                  </button>
                </Accordion.Body>
              </Accordion.Item>
            )
          })
        ) : (
          <h2 className="fs-4 text-center p-5">Defound any Quesions now</h2>
        )}
      </Accordion>
    </Row>
  )
}
export default QAList

//The First Question
//The Answer To Question
