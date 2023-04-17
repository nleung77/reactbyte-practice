function Navbar(props) {
    const { imageURL, username } =props.userInfo;
    return (
      <nav>
        <h4>Hello, {username}!</h4>
        <img src={imageURL} alt="avatar"/>
      </nav>
    )
  }
  
  export default Navbar;
  