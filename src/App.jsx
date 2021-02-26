import { useState} from "react";
import Timeline from "./components/Timeline";



const App = () => {

    const [userName, setUserName] = useState (' ');
    const [newChirp, setNewChirps] = useState (' ');
    const [chirp, setChirp] = useState ([
        {userName: 'Bear', newChirp: 'I think i am due a break'},
        {userName: 'Kendall', newChirp: 'its not Digorno, its d-struggle',}
        {userName: 'Ethan', newChirp: 'good morning this afternoon'}''
    ]);

    let SubmitChirp = (e) => {
        // e.preventDefault()
        let brandNewChirps = {
            userName:newUserName,
            chirp:newChirps,
        };

        setChirps([...chirps, newChirp]);
    };
    
    return (
        <>
        <div id="create-chirp=div" className="m-5">
          <h1>Chirpr</h1>
          <input
            type="text"
            placeholder="Username"
            onChange={(e) => setUsername(e.target.value)}
          ></input>
          <input
            type="text"
            placeholder={Whats on your mind?}
            onChange={(e) => setChirp(e.target.value)}
          ></input>
          <button className="btn btn-primary" onClick={submitChirp}>
            Submit Chirp
          </button>
        </div>
        { chirps.map((chirp) =><Timeline chirp={chirp}/> )}
      </>
    );
    

    


};

export default App;