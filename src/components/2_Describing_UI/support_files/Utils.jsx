export function getImageUrl(person, size = 's') {
  return (
    'https://i.imgur.com/' +
    person.imageId +
    size +
    '.jpg'
  );
}

// Notion de l'objet props comme objet contenant tous les props individuel
function Avatar1(props) {
  let person = props.person;
  let size = props.size;
  // ...
}

// Notion de destructuration de l'objet props pour lister chaque prop en paramètre de la fx composant

function Avatar2(props) {
  let person = props.person;
  let size = props.size;
  // ...
}

function Avatar3({ person, size }) {
  // ...
}

// Notion de spécification de valeur par défault d'un prop spécifique
function Avatar({ person, size = 100 }) {
  // ...
}

//Notion de spread operator pour récupérer et renvovyer tous les props en paramètre 
function Profile({ person, size, isSepia, thickBorder }) {
  return (
    <div className="card">
      <Avatar
        person={person}
        size={size}
        isSepia={isSepia}
        thickBorder={thickBorder}
      />
    </div>
  );
}

function Profile2(props) {
  return (
    <div className="card">
      <Avatar {...props} /> {/* Voilà le spread */}
    </div>
  );
}