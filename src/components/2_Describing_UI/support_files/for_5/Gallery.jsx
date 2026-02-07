import { getImageUrl } from './Utils';
import Profile from './defi_1_Extraire_Un_Composant';
import Profile2 from './defis2_Ajuster_Taille_Image';
import Profile3 from './defi_3_Passer_JSX_Prop_Children';

export default function Gallery() {

  const person =[
    {name: "Maria Skłodowska-Curie", job: "physicienne et chimiste",reward: ["Prix Nobel de Physique", "Prix Nobel de Chimie", "Médaille Davy", "Médaille Matteucci"], discovery: "le Polonium (élément chimique)", imageId:"szV5sdG"},
    {name:"Katsuko Saruhashi", job: "geochimiste", reward: ["Prix Miyake de géochimie", "Prix Tanaka"], discovery: "le Polonium (élément chimique)", imageId:"YfeOqp2"},

  ]
  
  return (
    <div>
      <h2> C. Passer du JSX dans la prop Children </h2>
      <div>
        <Profile3/>
      </div>
      <h2>B. Ajuster la taille d'une image</h2>
      <div>
        <h3></h3>
        <Profile2/>
      </div>
      <h2>A. Extraire un composant</h2>
      <div>
        <h3>Scientifiques remarquables</h3>
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
    
    </div>
  );
}
