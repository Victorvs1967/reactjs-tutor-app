const Greet = ({ name, children }) => (

    <>
        <h1>Hello, {name}!</h1>
        <p>{children}</p>
    </>
);

export default Greet;