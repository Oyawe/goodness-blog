import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
const [blogs, setBlogs] = useState([
    {title: 'My new Website', body: 'lorem ipsur...', author: 'mario', id: 1},
    {title: 'Welcome Party!', body: 'lorem ipsur...', author: 'Jamie', id: 2},
    {title: 'REACT dev Tools', body: 'lorem ipsur...', author: 'mario', id: 3}
]);

const [name, setName] = useState('mario');

const handleDelete = (id) => {
    const newBlogs = blogs.filter(blog => blog.id !== id);
    setBlogs(newBlogs);
}

//useEffect hook fires on every render(any state change) 
//dependency array -> an array that can be passed into the useEffect hook as a second argument //empty array means the useState runs at the first re-render

useEffect(() => {
    console.log('use effect ran')
    // console.log(blogs)
    console.log(name);
}, [name]);

//props
    return (
        <div className="home">
            <BlogList blogs={blogs} title="All Blogs!" handleDelete={handleDelete}/> 
            {/* <BlogList blogs={blogs.filter((blog) => blog.author === 'mario')} title="Mario's Blogs!"/> */}
            <button onClick={() => setName('luigi')}>change name</button>
            <p>{name}</p>
        </div>
    );
}

export default Home;