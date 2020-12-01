import './stylesheets.css';

const parastyle = {
    fontSize: '20px',
    backgroundColor: 'yellow',
    width: '90%',
    margin: '20px auto',
    padding: '8px'
}

const StyleSheets = () => (
    <>
        <h1 className='primary'>CSS StyleSheets</h1>
        <h3 className='secondary'>
            We use camelCase for styles. Here, we are creating an object parastyled and give fontSize and backgroundColor as keys in it. Also, notice that the values ae strings. These are the two differences from normal CSS.
        </h3>
        <h3 style={parastyle}>
            There is a problem with declaring CSS in stylesheets. Whatever we declare, become global style and get’s applied to all Components and this is not a desirable behavior in large projects.
        </h3>
        <h3 style={{color: 'red', backgroundColor: 'lightgrey', fontWeight: 'bolder', width: '90%', margin: 'auto'}}>
            Now, create a new file Modules.js inside the components folder. It’s a simple functional component, with a h1 tag. Notice that i didn’t included any stylesheet in it.
        </h3>
    </>
)

export default StyleSheets;