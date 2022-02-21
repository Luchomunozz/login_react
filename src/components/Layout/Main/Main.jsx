import React from 'react'
import './../Main/Main.css'

export const Main = () => {
  return (
  <main>
    <div className='login'>
              <h1 className='subtitle'>Inicio de Sesión</h1>
              <div className='space'></div>
              <h2 className='user'>Username</h2>
              <input type="text" className='dateUser' placeholder='Username' />
              <h2 className='subtitle'>Password</h2>
              <input type="password" name="" className="dateUser" placeholder='Password'/>
              <button className='btn_enter'>Login</button>
      </div>
      </main>
  );
}
export default Main;