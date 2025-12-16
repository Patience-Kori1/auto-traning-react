export default function Avatar() {
    const avatar = 'https://i.imgur.com/7vQD0fPs.jpg';
    const description = 'Gregorio Y. Zara';
    const name = 'Hedy Lamarr';
    const today = new Date();

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

        <h3>Liste des tâches de {name} </h3>
        <h1>Liste de tâches pour {formatDate(today)}</h1>
    </>
  );
}