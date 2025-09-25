import React,{useState} from 'react'
import { useSpeech } from 'react-text-to-speech';

export const Textbox = () => {
    const [text, setText] = useState('')
    //storing the history in state to avoid re rendering issues
    const [history, setHistory] = useState([])
    const {
            Text, // Component that returns the modified text property
            speechStatus, // String that stores current speech status
            isInQueue, // Boolean that stores whether a speech utterance is either being spoken or present in queue
            start, // Function to start the speech or put it in queue
            pause, // Function to pause the speech
            stop, // Function to stop the speech or remove it from queue
        } = useSpeech({text});

    const updateHistoryAndText = (newText) => {
        setHistory([...history, newText]);
        setText(newText);
    }
    const handleOnChange = (e) =>{
        setText(e.target.value)       
    }

    const toUpper = () =>{
        let newText = text.toUpperCase();
        updateHistoryAndText(newText);    
    }

    const toLower = () =>{
        let newText = text.toLowerCase();
        updateHistoryAndText(newText);    
    }
    const replaceWord = () =>{
        alert("Enter the word to be replaced and the new word in the prompt boxes")
        let word1 = prompt("Enter the word to be replaced")
        let word2 = prompt("Enter the new word")
        let newText = text.replaceAll(word1,word2);
        updateHistoryAndText(newText);
    }
    const textToSpeech = () =>{
        start();
    }

    const revertChanges = () =>{
        let lasttext = history[history.length-1];
        setText(lasttext);
        let newHistory = history.slice(0,history.length-1);
        setHistory(newHistory);
    }  
    console.log(history);  
    const words = text.length===0?0:(text.trim().length === 0 ? 0 : text.trim().split(/\s+/).length) 

    return (
    <>
        <div className='container mx-auto my-4 p-4'>
            <h2 className='text-2xl font-bold mb-4'>Enter the text to analyze below</h2>
            <textarea className='w-full h-48 p-2 border border-gray-300 rounded' 
            placeholder='Type or paste your text here...'
            value={text}
            onChange={handleOnChange}>
            </textarea>
            <button type='button' className='bg-blue-500 rounded-xl text-white p-2 mt-2 cursor-pointer' 
            onClick={toUpper}>Upper Case</button>
            <button type='button' className='bg-blue-500 rounded-xl text-white p-2 mx-2 mt-2 cursor-pointer' 
            onClick={toLower}>Lower Case</button>
            <button type='button' className='bg-blue-500 rounded-xl text-white p-2 mx-2 mt-2 cursor-pointer' 
            onClick={replaceWord}>Replace Words</button>
            <button type='button' className='bg-blue-500 rounded-xl text-white p-2 mx-2 mt-2 cursor-pointer' 
            onClick={textToSpeech}>Text to Speech</button>
            <button type='button' className='bg-blue-500 rounded-xl text-white p-2 mx-2 mt-2 cursor-pointer' 
            onClick={revertChanges}
            disabled={history.length===0}>Reverse the Changes</button>
        </div>
        <div className='container mx-auto my-4 p-4'>
            <p>{words} Words and {text.length} Characters</p>
            <p>{0.008*words} minutes to read</p>
            <h3 className='text-xl font-bold mt-4'>Preview</h3>
            <p>{text.length>0?text:"Nothing to preview!"}</p>
        </div>
    </>
  )
}

export default Textbox
