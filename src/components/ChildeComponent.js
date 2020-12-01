const ChildComponent = ({greetHandler}) => (
    <div>
        <button onClick={() => greetHandler('Soghi Singh Jr.')}
                style={{
                            marginTop: 10,
                            padding: '10px 20px 10px 20px',
                            borderRadius: '12px',
                            border: 'none',
                            fontSize: '16px',
                            fontWeight: 700,
                            backgroundColor: 'orange'
                        }}
        >
        Greet Parent
        </button>
    </div>
);

export default ChildComponent;