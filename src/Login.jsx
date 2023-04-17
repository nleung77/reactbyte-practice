import { useState } from 'react'

function Login(props) {

  const [username, setUsername] = useState('')
  const [imageURL, setImageURL] = useState('')

  const handleChange = e => setImageURL(e.target.value)
  const handleSubmit = e => {
    e.preventDefault();
    props.setUserInfo({
      username,
      imageURL,
    });
    setUsername('');
    setImageURL(''); 
  }
    return (
      
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username:</label>
        <input 
          type="text" 
          id="username" 
          value={username} 
          onChange={e => setUsername(e.target.value)} />
        <label htmlFor="imageURL">Image URL:</label>
        <input 
          type="text" 
          id="imageURL" 
          value={imageURL} 
          onChange={handleChange} />
        <button type="submit">Submit!</button>
      </form>
    );
  }
  
  export default Login;
  