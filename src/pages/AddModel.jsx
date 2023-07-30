import React, {useId} from 'react';
import "../styles/AddModel.css";

function AddModel() {

    function handleSubmit(e) {
        // Prevent the browser from reloading the page
        e.preventDefault();

        // Read the form data
        const form = e.target;
        const formData = new FormData(form);

        // You can pass formData as a fetch body directly:
        fetch('/some-api', { method: form.method, body: formData });

        // Or you can work with it as a plain object:
        const formJson = Object.fromEntries(formData.entries());
        console.log(formJson);
    }

    const newModelAreaId = useId();
    return (
        <div className='addmodel'>
            <form method="post" onSubmit={handleSubmit}>
                <h1>Add a new model here</h1>
                <div className="item">
                <label>
                    Post title:
                </label>
                </div>
                <div className="item">
                    <input name="modelName" defaultValue="Simple collision" />
                </div>
                <div className="item">
                    <label htmlFor={newModelAreaId}>
                        Add your code:
                    </label>
                </div>
                <div className="item">
                    <textarea id={newModelAreaId} name="newModel" rows={4} cols={40}/>
                </div>
                <button class="button-3" type='reset'>Reset edits</button>
                <button class="button-3" type='submit'>Save post</button>
            </form>
        </div>
    );
}

export default AddModel;