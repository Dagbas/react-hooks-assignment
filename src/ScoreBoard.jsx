import { useRef, useState } from "react";
//Bootstrap has already been downloaded for you
import "bootstrap/dist/css/bootstrap.min.css";
import Player from "./Player";
function ScoreBoard() {
  const [players, setPlayers] = useState([]);
  const inputRef = useRef();

  function newPlayer() {
    let playerName = inputRef.current.value || undefined;
    setPlayers([...players,{
      name: playerName,
      id :Date.now(),
    }
  ]);
    inputRef.current.value = "";
  }
  
  return (
    <div className="container">
      <div className="row  text-center">
        <h1>ScoreBoard</h1>
      </div>
      <div className="row">
        <div className="col-md-4 m-auto">
          <div class="input-group mb-3">
            {/* Modify input so that it is either connected to a ref or some kind of input state */}
            <input
              ref={inputRef}
              type="text"
              class="form-control"
              placeholder="New Player Name"
              aria-label="New Player Name"
              aria-describedby="addPlayer"
              required
            />
            {/*  Add Player event handling to this button */}
            <button
              class="btn btn-outline-primary"
              type="button"
              id="addPlayer"
              onClick={newPlayer}
            >
              Add Player
            </button>
          </div>
        </div>
      </div>
      <div className="row m-auto">
        {players.map((player) => {
          return (
            <div className="col-md-4">
              {/* Make sure to pass the unique id as a key */}
              <Player
                key={player.id}
                name={player.name}
                // Anonymous arrow function that we can hold off activating
                // until the user clicks a button inside of the Player component
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ScoreBoard;
