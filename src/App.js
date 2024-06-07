// import React, { useState, useEffect } from "react";
// import "./App.css";

// const SpeechRecognition =
//   window.SpeechRecognition || window.webkitSpeechRecognition;
// const mic = new SpeechRecognition();

// mic.continuous = true;
// mic.interimResults = true;
// mic.lang = "auto";

// function App() {
//   const [isListening, setIsListening] = useState(false);
//   const [note, setNote] = useState(null);
//   const [savedNotes, setSavedNotes] = useState([]);

//   useEffect(() => {
//     handleListen();
//   }, [isListening]);

//   const handleListen = () => {
//     if (isListening) {
//       mic.start();
//       mic.onend = () => {
//         console.log("continue..");
//         mic.start();
//       };
//     } else {
//       mic.stop();
//       mic.onend = () => {
//         console.log("Stopped Mic on Click");
//       };
//     }
//     mic.onstart = () => {
//       console.log("Mics on");
//     };

//     mic.onresult = (event) => {
//       const transcript = Array.from(event.results)
//         .map((result) => result[0])
//         .map((result) => result.transcript)
//         .join("");
//       console.log(transcript);
//       setNote(transcript);
//       mic.onerror = (event) => {
//         console.log(event.error);
//       };
//     };
//   };

//   const handleSaveNote = () => {
//     setSavedNotes([...savedNotes, note]);
//     setNote("");
//   };

//   return (
//     <>
//       <h1>Voice Notes</h1>
//       <div className="container">
//         <div className="box">
//           <h2>Current Note</h2>
//           {isListening ? <span>🎙️</span> : <span>🛑🎙️</span>}
//           <button onClick={handleSaveNote} disabled={!note}>
//             Save Note
//           </button>
//           <button onClick={() => setIsListening((prevState) => !prevState)}>
//             Start/Stop
//           </button>
//           <p>{note}</p>
//         </div>
//         <div className="box">
//           <h2>Notes</h2>
//           {savedNotes.map((n) => (
//             <p key={n}>{n}</p>
//           ))}
//         </div>
//       </div>
//     </>
//   );
// }

// export default App;




// import React, { useState, useEffect, useRef } from "react";
// import "./App.css";

// const SpeechRecognition =
//   window.SpeechRecognition || window.webkitSpeechRecognition;
// const mic = new SpeechRecognition();

// mic.continuous = true;
// mic.interimResults = true;
// mic.lang = "en-IN";

// function App() {
//   const [note, setNote] = useState("");
//   const recognitionStartedRef = useRef(false);

//   useEffect(() => {
//     const handleListen = () => {
//       mic.onresult = (event) => {
//         const transcript = Array.from(event.results)
//           .map((result) => result[0])
//           .map((result) => result.transcript)
//           .join("");

//         setNote(transcript);
//       };

//       mic.onerror = (event) => {
//         console.log(event.error);
//       };

//       if (!recognitionStartedRef.current) {
//         mic.start();
//         recognitionStartedRef.current = true;
//       }
//     };

//     handleListen();

//     // Clean up event listeners
//     return () => {
//       mic.onresult = null;
//       mic.onerror = null;
//     };
//   }, []);

//   return (
//     <>
//       <h1>Voice Notes</h1>
//       <div className="container">
//         <div className="box">
//           <h2>Current Note</h2>
//           <span>🎙️</span>
//           <p>{note}</p>
//         </div>
//       </div>
//     </>
//   );
// }

// export default App;






import React,{useEffect} from 'react';

function App() {
  useEffect(() => {
    navigator.usb.getDevices().then((devices) => {
      console.log(`Total devices: ${devices.length}`);
      devices.forEach((device) => {
        console.log(
          `Product name: ${device.productName}, serial number ${device.serialNumber}`,
        );
      });
    });
          });

  return (
    <div>

    </div>
  )
}


export default App;