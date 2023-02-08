import React from 'react';
import GameMain from "./components/GameMain";
import RefreshButton from "./components/RefreshButton";
import Score from "./components/Score";

function App(props) {
    return (
        <div style={{textAlign: 'center'}}>
            <Score />
            <GameMain />
            <RefreshButton />
        </div>
    );
}

export default App;
