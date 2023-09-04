import React from 'react';
import Model01 from "../experiments/Model01";
import ModelFiber01 from "../experiments/Model-Fiber01";

function Home() {
    return (
        <div className='home'>
            <h1>Home</h1>
            {/*<Model01/>*/}
            <ModelFiber01/>
        </div>
    );
}

export default Home;
