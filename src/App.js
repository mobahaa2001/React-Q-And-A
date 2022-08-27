import { Col, Container, Row } from 'react-bootstrap'
import InfoInput from './components/InfoInput'
import QAList from './components/Q&AList'
import { question } from './data'
import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function App() {
  // useState from React Hooks---- To Get Data
  const [data, setData] = useState(question)

  // To add new items
  const addItem = () => {
    localStorage.setItem('items', JSON.stringify([...question]))
    setData([...question])
    notify('Your Question Is Add', 'Success')
  }

  // To remove all items
  const deleteAllItems = () => {
    localStorage.removeItem('items')
    question.splice(0, question.length)
    setData([])
    notify('Everything Is Deleted', 'Success')
  }

  // To remove any item from Data
  const deleteOneItem = (items) => {
    localStorage.setItem('items', JSON.stringify([...items]))

    setData([...items])
    notify('Your Question Is Deleted', 'Success')
    if (items.length <= 0) {
      deleteAllItems()
    }
  }
  // To push Notifaction
  const notify = (message, type) => {
    if (type === 'Error') toast.error(message)
    else if (type === 'Success') toast.success(message)
  }
  return (
    <div className="font text-center color-body">
      <Container className="p-5">
        <Row className="justify-content-center">
          <Col sm="4">
            <div className="fs-4 text-center py-2">Question & Answer App</div>
          </Col>
          <Col sm="8">
            <InfoInput onAdd={addItem} notify={notify} />
            <QAList data={data} deleteOneItem={deleteOneItem} />
            {localStorage.getItem('items') != null ? (
              <button
                onClick={deleteAllItems}
                className="btn-color w-100 my-3 "
              >
                Delete All{' '}
              </button>
            ) : null}
          </Col>
        </Row>
        <ToastContainer />
      </Container>
    </div>
  )
}

export default App
