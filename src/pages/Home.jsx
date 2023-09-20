import React from 'react'
import InputText from '../components/InputText/InputText'



const Home = () => {
  return (
    <>  
      
      <div className='container-fluid homebg m-0 p-0' style={{border:'1px solid black',
    width: "100%",
    height: "90vh", 
    backgroundImage:`url('../../public/home.png')`, 
    backgroundSize: 'cover',
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
    }}>
      <InputText/>
      </div>
    </>
  )
}

export default Home