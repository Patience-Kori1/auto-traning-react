import React from 'react'

const people = [
    'Creola Katherine Johnson : mathématicienne',
    'Mario José Molina-Pasquel Henríquez : chimiste',
    'Mohammad Abdus Salam : physicien',
    'Percy Lavon Julian : chimiste',
    'Subrahmanyan Chandrasekhar : astrophysicien',
];

export default function Afficher_Des_Listes() {

    const listItems = people.map(person => <li>{person}</li>);

    return <ul>{listItems}</ul>;
}
