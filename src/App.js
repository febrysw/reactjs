import './App.css';
import Content from './components/Content';
import Header from './components/Header';
import Footer from './components/Footer';
import { useEffect, useState } from 'react';

function App() {
  const [getTitle, setTitle] = useState("");

  const clickButton = () => {
    // console.log('berhasil');
    setTitle("About Me");
    // console.log(getTitle);
  }

  const [getTyping, setTyping] = useState("");
  const [show, setShow] = useState(false);

  useEffect(() => {
    (getTyping === 'show') ? setShow(true) : setShow(false);
  }, [getTyping]);

  return(
    <>
      <Header customTitle={getTitle}></Header>
      <Content text="text content"></Content>
      {/* <h5>{getTitle}</h5> */}
      {show ? (<button onClick={() => clickButton()}>Klik disini</button>) : ("")}
      <br/>
      <br/>
      <h5>{getTyping}</h5>
      <input type="text" onChange={ (typing) => setTyping(typing.target.value)}></input>
      <br/>
      <br/>
      <Footer></Footer>
    </>
  );
}

export default App;
