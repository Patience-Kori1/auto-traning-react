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
