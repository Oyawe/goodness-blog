import React, { useState } from 'react';
import { useHistory, useParams } from 'react-router-dom/cjs/react-router-dom.min';
import useFetch from './useFetch';

const BlogDetails = () => {
    const { id } = useParams();
    const { data: blog, error, isPending } = useFetch('http://localhost:8000/blogs/' + id);
    const [isLoading, setIsLoading] = useState(false);
    const history = useHistory();

    const handleClick = () => {

        setIsLoading(true);

        setTimeout(() => {
            fetch('http://localhost:8000/blogs/' + blog.id, {
                method: "DELETE"
            }).then(() => {
                setIsLoading(false);
                history.push('/')
            })
        }, 1000);
    }


    return (
        <div className="blog-details">
            {isPending && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {blog && (
                <article>
                    <h2>{blog.title}</h2>
                    <p>Written by {blog.author}</p>
                    <div>{blog.body}</div>
                    {!isLoading && <button onClick={handleClick}>Delete Blog</button>}
                    {isLoading && <button onClick={handleClick} disabled>Deleting Blog...</button>}
                </article>
            )}
        </div>
    );
}

export default BlogDetails;