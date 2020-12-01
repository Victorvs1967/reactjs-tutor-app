const Person = ({person}) => (
    <>
        <h1>Name: {person.name}</h1>
        <h2>Age: {person.age}</h2>
        <p>Skills: {person.skills}</p>
    </>
);

export default Person;