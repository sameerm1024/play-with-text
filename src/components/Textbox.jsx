import React, { useState } from "react";
import { useSpeech } from "react-text-to-speech";

export const Textbox = (props) => {
  const [text, setText] = useState("");
  //storing the history in state to avoid re rendering issues
  const [history, setHistory] = useState([]);
  const [alert, setAlert] = useState(null);
  const {
    Text, // Component that returns the modified text property
    speechStatus, // String that stores current speech status
    isInQueue, // Boolean that stores whether a speech utterance is either being spoken or present in queue
    start, // Function to start the speech or put it in queue
    pause, // Function to pause the speech
    stop, // Function to stop the speech or remove it from queue
  } = useSpeech({ text });

  const updateHistory = (newText) => {
    setHistory([...history, newText]);
  };
  const handleOnChange = (e) => {
    setText(e.target.value);
  };

  const toUpper = () => {
    updateHistory(text);
    let newText = text.toUpperCase();
    setText(newText);
    setAlertMessage("Converted to Upper Case");
  };

  const toLower = () => {
    updateHistory(text);
    let newText = text.toLowerCase();
    setText(newText);
    setAlertMessage("Converted to Lower Case");
  };
  const replaceWord = () => {
    alert("Enter the word to be replaced and the new word in the prompt boxes");
    let word1 = prompt("Enter the word to be replaced");
    let word2 = prompt("Enter the new word");
    if (word1 && word2) {
      updateHistory(text);
      let newText = text.replaceAll(word1, word2);
      setText(newText);
      setAlertMessage("Word replaced successfully");
    }
  };
  const textToSpeech = () => {
    start();
  };

  const revertChanges = () => {
    if (history.length > 0) {
      let lasttext = history[history.length - 1];
      setText(lasttext);
      let newHistory = history.slice(0, history.length - 1);
      setHistory(newHistory);
    setAlertMessage("Reverted the last change");
    }
  };

  const copyMessage = () =>{
    navigator.clipboard.writeText(text)
    setAlertMessage("Text copied successfully")
  }
  const setAlertMessage = (message) =>{
    setAlert(message)
    setTimeout(() =>{
        setAlert(null)
    }, 1500)
  }

  const words =
    text.length === 0
      ? 0
      : text.trim().length === 0
      ? 0
      : text.trim().split(/\s+/).length;

  

  return (
    <div
      className={`min-h-screen ${
        props.dark ? "bg-gray-800 text-white" : "bg-white text-black"
      }`}
    >
      <div className="h-8" >
        {alert &&<> <div
        className={`p-4 text-sm rounded-lg absolute w-full ${props.dark?"text-green-800  bg-green-200":" bg-gray-800 text-green-400"}`}
        role="alert">
        <span className="font-medium">Success !</span> {alert}
        </div>
      </>}
      </div>
     
      <div
        className={`container mx-auto py-4 p-4 ${
          props.dark ? "bg-gray-800 text-white" : "bg-white text-black"
        }`}
      >
        <h2 className="text-2xl font-bold mb-4">Enter the text below</h2>
        <textarea
          className={`w-full h-48 p-2 border border-gray-300 rounded
            ${
              props.dark
                ? "bg-gray-700 text-white placeholder-gray-400"
                : "bg-white text-black placeholder-gray-500"
            }`}
          placeholder="Type or paste your text here..."
          value={text}
          onChange={handleOnChange}
        ></textarea>
        <button
          type="button"
          className="bg-blue-500 rounded-xl text-white p-2 mt-2 cursor-pointer"
          onClick={toUpper}
          disabled={text.length === 0}
        >
          Upper Case
        </button>
        <button
          type="button"
          className="bg-blue-500 rounded-xl text-white p-2 mx-2 mt-2 cursor-pointer"
          onClick={toLower}
          disabled={text.length === 0}
        >
          Lower Case
        </button>
        <button
          type="button"
          className="bg-blue-500 rounded-xl text-white p-2 mx-2 mt-2 cursor-pointer"
          onClick={replaceWord}
          disabled={text.length === 0}
        >
          Replace Words
        </button>
        <button
          type="button"
          className="bg-blue-500 rounded-xl text-white p-2 mx-2 mt-2 cursor-pointer"
          onClick={textToSpeech}
          disabled={text.length === 0}
        >
          Text to Speech
        </button>
         <button
          type="button"
          className="bg-blue-500 rounded-xl text-white p-2 mx-2 mt-2 cursor-pointer"
          onClick={copyMessage}
          disabled={text.length === 0}
        >
          Copy Text
        </button>
        <button
          type="button"
          className="bg-blue-500 rounded-xl text-white p-2 mx-2 mt-2 cursor-pointer"
          onClick={revertChanges}
          disabled={text.length === 0}
        >
          Reverse the Change
        </button>
      </div>
      <div className="container mx-auto my-4 p-4">
        <p>
          {words} Words and {text.length} Characters
        </p>
        <p>{0.008 * words} minutes to read</p>
        <h3 className="text-xl font-bold mt-4">Preview</h3>
        <p>{text.length > 0 ? text : "Nothing to preview!"}</p>
      </div>
    </div>
  );
};

export default Textbox;
