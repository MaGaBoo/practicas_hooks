import React, { useRef } from 'react'

function Child({ name, send, update }) {

    const messageRef = useRef('');
    const nameRef = useRef('')

    function pressButton() {
        const text = messageRef.current.value;
        alert(`Text in input: ${text}`)
    }

    function pressButtonParams(text) {
        alert(`Text: ${text}`)
    }

    function submitName(e) {
        e.preventDefault();
        update(nameRef.current.value )
    }

  return (
    <div>
        <p onMouseOver={() => console.log('I´m over the 🐁')}>Hello, {name}</p>
        <button onClick={() => console.log('You pressed btn 1') }>Button 1</button>
        <button onClick={pressButton}>Button 2</button>
        <input
        placeholder='Say something to the father element '
        onFocus={() => console.log('Input focused')}
        onChange={(e) => console.log('Input changed:', e.target.value)}     
        onCopy={() => console.log('Copied text from input')}
        ref={messageRef} />
        <button onClick={() => send(messageRef.current.value)}>Send Message</button>
        <div style={{marginTop: '20px'}}>
        <form onSubmit={submitName}>
            <input ref={nameRef} placeholder='New name' />
            <button type='submit'>Update name</button>
        </form>
        
        </div>
    </div>
  )
}

export default Child 