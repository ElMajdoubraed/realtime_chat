import React, { useRef } from 'react'
import { Container, Button } from 'react-bootstrap'
import { v4 as uuidV4 } from 'uuid'

export default function Login({ onIdSubmit }) {
  const idRef = useRef()

  function handleSubmit(e) {
    e.preventDefault()
    if (!idRef.current.value || idRef.current.value === "0"  ){
      alert("Please provide a valid id")
    }else{
      onIdSubmit(idRef.current.value)
    }
  }

  function createNewId() {
    onIdSubmit(uuidV4())
  }

  return (
    <Container className="align-items-center d-flex" style={{ height: '100vh' }}>
      <form onSubmit={handleSubmit} className="w-100">
        
        <div className='card-login'>
        <h2 className='text-center title mb-3'>Let's have a cool chat !</h2>
          <label htmlFor="id" className='label'>Enter Your Id :</label>
          <input id='id' className='input mb-3' type="text" ref={idRef} placeholder="Enter Your Id" required /> 
        <Button type="submit" className="mr-2">Login</Button>
        <Button onClick={createNewId} variant="secondary">Create A New Id</Button>
        </div>
      </form>     
    </Container>
  )
}
