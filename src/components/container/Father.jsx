import React, { useState } from "react";
import Child from '../pure/Child';

function Father() {

const [name, setName] = useState('María')

  function showMessage(text) {
    alert(`Message received: ${text}`);
  }

  function updateName (newName) {
    setName(newName)
  }

  return (
  <div>
<Child name={name} send={showMessage} update={updateName}> </Child>
  </div>
  )
}

export default Father;
