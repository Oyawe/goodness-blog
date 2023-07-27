//controlled inputs(forms)
//useHistory hook -  allows users to go back and forth  to a new route 
import React from 'react';
import { useState } from 'react';
import {useHistory} from 'react-router-dom'

const Create = () => {

    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('');
    const [isPending, setIsPending]  = useState(false);
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault(); // prevents thee page from being refreshed
        const blog = {title, body, author};

        // console.log(blog)
        setIsPending(true);

        setTimeout (() => {
            fetch('http://localhost:8000/blogs', {
                method: 'POST',
                headers:{'Content-Type': 'application/json'},
                body: JSON.stringify(blog),
            }).then(() => {
                console.log('new blog added')
                setIsPending(false);
                // history.go(-1); //goes to the last state, the last window, the last injection
                history.push('/');
            })
        }, 500);

    }

    return (
        <div className="create">
            <h2>Add a new Blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog title:</label>
                <input 
                    type="text" 
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <label>Blog body:</label>
                <textarea 
                    required
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                ></textarea>
                <label>Blog author:</label>
                <input 
                    type="text" 
                    required
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                />
                {!isPending && <button>Add Blog</button>}
                {isPending && <button disabled>Adding Blog...</button>}
                {/* <p>{title}</p> */}
                {/* <p>{body}</p> */}
                {/* <p>{author}</p> */}
            </form>
        </div>
    );
}

export default Create;