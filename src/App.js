//TODO: STEP 1 - Import the useState hook.
import React, {useState} from "react";
import BottomRow from "./BottomRow";
import "./App.css";

function App() {
  //TODO: STEP 2 - Establish your application's state with some useState hooks.  You'll need one for the home score and another for the away score.


const [homePoints, setHomePoints] = useState(0);
const makeTouchDown = e => {
  setHomePoints(homePoints + 7);
};
const makeFieldGoal = e => {
  setHomePoints(homePoints + 3);
};

const [awayPoints, setAwayPoints] = useState(0);
const awayTouchDown = e => {
  setAwayPoints(awayPoints + 7);
};
const awayFieldGoal = e => {
  setAwayPoints(awayPoints + 3);
};



  return (
		<div className="container">
			<section className="scoreboard">
				<div className="topRow">
					<div className="home">
						<h2 className="home__name">Lions</h2>

						{/* TODO STEP 3 - We need to change the hard-code values in these <div>'s to accept dynamic values from our state. */}
						<div className="home__score">
							{' '}
							<span>{homePoints}</span>
						</div>
					</div>
					<div className="timer">00:03</div>
					<div className="away">
						<h2 className="away__name">Tigers</h2>
						<div className="away__score">{awayPoints}</div>
					</div>
				</div>
				<BottomRow />
			</section>
			<section className="buttons">
				<div className="homeButtons">
					{/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
					<button className="homeButtons__touchdown" onClick={makeTouchDown}>
						Home Touchdown
					</button>
					<button className="homeButtons__fieldGoal" onClick={makeFieldGoal}>
						Home Field Goal
					</button>
				</div>
				<div className="awayButtons">
					<button className="awayButtons__touchdown" onClick={awayTouchDown}>
						Away Touchdown
					</button>
					<button className="awayButtons__fieldGoal" onClick={awayFieldGoal}>
						Away Field Goal
					</button>
				</div>
			</section>
		</div>
	);
}

export default App;
