import React, {useId, useState} from 'react';
import "../styles/AddModel.css";

function AddModel(setErrorMessage) {

    const [modelName, setModelName] = useState("");
    const [creator, setCreator] = useState("");
    const [creationDate, setCreationDate] = useState("");
    const [status, setStatus] = useState("");
    const [modelCode, setModelCode] = useState("");

    const handleCreateModel= async (e) => {
        e.preventDefault();
        setStatus("A");
        setCreationDate(Date());
        setCreator("Test");
        const requestOptions = {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({model_name: modelName, creator: creator, creation_date: creationDate, status: status, model_code: modelCode})
        };
        const response = await fetch("http://localhost:8000/models", requestOptions);
        if(!response) {
            setErrorMessage("Model cannot be created")
        }
    };

    const newModelAreaId = useId();
    return (
        <div className='addmodel'>
            <form method="post" onSubmit={handleCreateModel}>
                <h1>Add a new model here</h1>
                <div className="item">
                <label>
                    Post title:
                </label>
                </div>
                <div className="item">
                    <input
                        type="text"
                        name="modelName"
                        defaultValue="Simple collision"
                        value={modelName}
                        onChange={(e)=>setModelName(e.target.value)}
                        required
                    />
                </div>
                <div className="item">
                    <label htmlFor={newModelAreaId}>
                        Add your code:
                    </label>
                </div>
                <div className="item">
                    <textarea
                        id={newModelAreaId}
                        name="newModel"
                        value={modelCode}
                        onChange={(e)=>setModelCode(e.target.value)}
                        required
                        rows={4}
                        cols={40}/>
                </div>
                <button class="button-3" type='reset'>Reset edits</button>
                <button class="button-3" type='submit' onClick={handleCreateModel}>Save post</button>
            </form>
        </div>
    );
}

export default AddModel;