export default function JS_In_JSX_Accolades() {
  const avatar = 'https://i.imgur.com/7vQD0fPs.jpg';
  const description = 'Gregorio Y. Zara';
  const name = 'Hedy Lamarr';
  const today = new Date();

  const person = {
    name: 'Gregorio Y. Zara',
    theme: {
      backgroundColor: 'black',
      color: 'pink'
    }
  };

  function formatDate(date) {
    return new Intl.DateTimeFormat(
      'fr-FR',
      { weekday: 'long' }
    ).format(date);
  }

  return (
    <>
        <img
            className="avatar"
            src={avatar}
            alt={description}
        />

        <h4 className="section-title">Liste des tâches de {name} </h4>
        <h3>Ce {formatDate(today)} on appris comment : </h3>

        <ul style={person.theme} 
        >
          <li>passer des chaînes de caractères grâce aux guillemets </li>
          <li>référencer une variable JavaScript dans du JSX grâce aux accolades.</li>
          <li>appeler une fonction JavaScript dans du JSX grâce aux accolades.</li>
          <li>utiliser un objet JavaScript dans du JSX grâce aux accolades.</li>
        </ul>

        <h4 className="section-title">Liste de tâches pour {formatDate(today)}</h4>
        <ul style={{
            backgroundColor: 'black',
            color: 'pink'
          }}
        >
          <li>Améliorer le visiophone { person.name} </li>
          <li>Préparer les cours d’aéronautique</li>
          <li>Travailler sur un moteur à alcool</li>
        </ul>   
    </>
  );
}