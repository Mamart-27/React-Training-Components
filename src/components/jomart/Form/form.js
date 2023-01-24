import React, { useState } from 'react';
import './form.css';

function MyForm() {
  const [textFieldValue, setTextFieldValue] = useState('');
  const [textAreaValue, setTextAreaValue] = useState('');

  return (
    <form>
      <label>
        Text Field:
        <input type="text" value={textFieldValue} onChange={e => setTextFieldValue(e.target.value)} />
      </label>
      <br />
      <label>
        Text Area:
        <textarea value={textAreaValue} onChange={e => setTextAreaValue(e.target.value)} />
      </label>
    </form>
  );
}

export default MyForm;
