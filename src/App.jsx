import { useState } from 'react'
import '../src/style/App.css' 

function App() {
  const [flag ,setFlag] = useState(true)
  let form = document.querySelectorAll('input')
  function input(){
    for (let i = 0; i < form.length; i++){
      console.log(form[i].value)
    } 
  }
  function render(){
    setFlag(!flag)
  }

  return (
    <div className="container">
      <form onSubmit="return false;">
        <div className="podBLockOneOne">
          <input type="name" placeholder="ИМЯ"/>
          <input type="surname" placeholder="ФАМИЛИЯ"/>
        </div>
        <div className="podBLockOneTwo">
          <input type="Telephone" placeholder="ТЕЛЕФОН"/>
          <input type="Email" placeholder="ЭЛЕКТРОННАЯ ПОЧТА"/>
        </div>
        <div className="podBLockOneThree">
          <input type="adres" placeholder="АДРЕС ДОСТАВКИ"/>
        </div>
        <div className="podBLockOneFour">
          <button onClick={input} className='FormSub' type='submit'>ОФОРМИТЬ ЗАКАЗ</button>
          <div className="sector">
            <div className="BR">ROZE</div>
            <div className="BB">BLUE</div>
            <div className="BBL">BLACK</div>
            <div className="BW">WHITE</div>
          </div>
        </div>
      </form>
      <div className='ButtD'><button className='ButtZ' onClick={render}>ЗАКАЗЫ</button></div>
      {!flag && <div className="Orders">
        <h1>psdhfsdgfsdgf</h1>
      </div>}
    </div>
      
  )
}

export default App
