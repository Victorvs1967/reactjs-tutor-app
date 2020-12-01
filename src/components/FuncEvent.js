const FuncEvent = () => {

    const handleClick = () => console.log('Button clicked');
    
    const style = {
        marginTop: 10,
        padding: '10px 20px 10px 20px',
        borderRadius: '12px',
        border: 'none',
        fontSize: '16px',
        fontWeight: 700,
        backgroundColor: 'orange'
    };

    return (
        <div>
            <button onClick={handleClick} style={style}>Click</button>
        </div>
    );
};

export default FuncEvent;