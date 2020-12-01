import Person from './Person';

const PersonList = () => {

    const names = ['Nabendu', 'Shikha', 'Hriday'];
    const persons = [
        {
            id: 1,
            name: 'Nabendu',
            age: 30,
            skills: 'React'
        },
        {
            id: 2,
            name: 'Shikha',
            age: 35,
            skills: 'JavaScript'
        },
        {
            id: 3,
            name: 'Hriday',
            age: 40,
            skills: 'HTML'
        },
    ];

    return persons.map(person => <Person key={person.id} person={person} />)
}

export default PersonList;