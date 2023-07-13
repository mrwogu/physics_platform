import React  from 'react';
import Navbar from "./Navbar";


const Header = () => {

    return (

        <div className="has-text-centered m-6">
            {
                    <h1 className="title" >
                        <div className="has-text-left">
                            <div className="columns" color="lightgrey">
                                <div></div>
                                <button className="button mt-5 ml-5" style={{position: "absolute", right: 10}}>
                                    Logout
                                </button>
                            </div>
                            <div className="columns is-" style={{position: "absolute", left: 10}}>
                                <Navbar/>
                            </div>
                        </div>
                    </h1>
            }
        </div>
    );
};

export default Header;