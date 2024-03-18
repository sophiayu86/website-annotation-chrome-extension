import { useState, useEffect } from "react";
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  const [note, setNote] = useState<string>("");
  const [selObj, setSelObj] = useState<Selection | null>(null);
 
  const onclick = async() => {
    const selTxt = getSelectionTxt();
    let [tab] = await chrome.tabs.query({ active: true });
    chrome.scripting.executeScript<(string | null)[], void>({
        target: { tabId: tab.id! },
        args: [note, selTxt],
        func: (note,selTxt) => {
            document.body.style.backgroundColor = note || "white";
            console.log("Sel:", selTxt);
        }
    });
  }
  const handleSelectionChange = () => {
    setSelObj(window.getSelection());
  };
  const getSelectionTxt = () => {
    return selObj ? selObj.toString() : null;
  };
  // const handleClick =() => {
  //   console.log("Select:",getSelectionTxt());
  // }

  useEffect(() => {
    document.addEventListener("selectionchange", handleSelectionChange);
    
    return () => {
      document.removeEventListener("selectionchange", handleSelectionChange);
    };
  }, []); 

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
      <button onClick={onclick}>
        </button>
        {/* <button onClick={handleClick}>
        </button> */}
        <input type="text" onChange={(e)=> setNote(e.target.value)} value={note}/>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
