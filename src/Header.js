//You can write multiple components in one file, but it is convention that each component get its own file in the components folder.
function Header() {
    return (<h1> React Tac Toe </h1>);
    }
    
    export default Header;
    ReactDOM.render(<Header />, document.getElementById('root'));