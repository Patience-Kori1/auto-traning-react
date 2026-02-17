import React from 'react'

function Item({ name, isPacked }) {
  return (
    <li className="item">
      {(isPacked ? name +"✅" : name +"❌" )}
      
    </li>
  );
}

export default function Defi_1_Afficher_Icon_Ternaire() {
  return (
    <section>
      <h1>Liste d’affaires de Sally Ride</h1>
      <ul>
        <Item
          isPacked={true}
          name="Combinaison spatiale"
        />
        <Item
          isPacked={true}
          name="Casque à feuille d’or"
        />
        <Item
          isPacked={false}
          name="Photo de Tam"
        />
      </ul>
    </section>
  );
}
