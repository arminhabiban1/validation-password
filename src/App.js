import { useState } from 'react';
import Icon from 'react-icons-kit';
import { basic_eye } from 'react-icons-kit/linea/basic_eye';
import { basic_eye_closed } from 'react-icons-kit/linea/basic_eye_closed'

function App() {
  const [type, setType] = useState('password')

  //validation states
  const [lowervalidated, setlowervalidated] = useState(false)
  return (
    <div className="wrapper">

      <div className="box">
        <div className='input-with-icon-div form-contorl'>
          <input type={type} className='custom-inpute' onChange={(e) => handleChange(e.target.value)} />
          {type === 'password' ? (
            <span onClick={() => setType('text')} className='icon-span'>
              <Icon icon={basic_eye_closed} />
            </span >
          ) : (
            <span onClick={() => setType('password')} className='icon-span'>
              <Icon icon={basic_eye} />
            </span>
          )}
          <main className='tracker-box'>
            <div>At Least one Lowercase Letter</div>
            <div>At Least one Uppercase Letter</div>
            <div>At Least one one number</div>
            <div>At Least one special Character</div>
            <div>At Least B Characters</div>
          </main>

        </div>

      </div>












    </div >
  );
}

export default App;
