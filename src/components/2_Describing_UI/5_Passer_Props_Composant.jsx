// function Avatar() {
//   return (
//     <img
//       className="avatar"
//       src="https://i.imgur.com/1bX5QH6.jpg"
//       alt="Lin Lanying"
//       width={100}
//       height={100}
//     />
//   );
// }

// export default function Passer_Props_A_Composant() {
//   return (
//     <Avatar 
//     />
//   );
// }

import { getImageUrl } from './support_files/Utils'

function Avatar({ person, size }) {
  // console.log(person)
  return (
    <img
      className="avatar"
      src={getImageUrl(person)}
      alt={person.name}
      width={size}
      height={size}
    />
  );
}


function Card({ children }) {
  return (
    <div style={{ backgroundColor:"red", width:120}}>
      {children}
    </div>
  );
}

export default function Passer_Props_A_Composant() {
  return (
    <div>
      <Card>
        <Avatar
          size={100}
          person={{
            name: 'Katsuko Saruhashi',
            imageId: 'YfeOqp2'
          }}
        />
      </Card>
      <Avatar
        size={80}
        person={{
          name: 'Aklilu Lemma',
          imageId: 'OKS67lh'
        }}
      />
      <Avatar
        size={50}
        person={{
          name: 'Lin Lanying',
          imageId: '1bX5QH6'
        }}
      />
    </div>
  );
}
