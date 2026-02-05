import { getImageUrl } from './Utils';
import Profile from './Profile';

export default function Gallery() {

  const person =[
    {name: "Maria Skłodowska-Curie", job: "physicienne et chimiste",reward: "(Prix Nobel de Physique, Prix Nobel de Chimie, Médaille Davy, Médaille Matteucci)", rewardNumber: "4",discovery: "le Polonium (élément chimique)", imageId:"szV5sdG"},
    {name:"Katsuko Saruhashi", job: "geochimiste", reward: " (Prix Miyake de géochimie, Prix Tanaka)", rewardNumber: "2", discovery: "le Polonium (élément chimique)", imageId:"YfeOqp2"},

  ]
  
  return (
    <div>
      <h1>Scientifiques remarquables</h1>
      {
        person.map((personItem, index) => {
          return(
            <Profile
              key= {index}
              personItem={personItem}
            />
          )
        })
      }
    
    </div>
  );
}
