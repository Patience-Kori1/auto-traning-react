import React from 'react'

const drinksData = {
  thé: {
    part: 'feuille',
    caffeine: '15–70 mg/tasse',
    age: '4 000+ ans',
  },
  café: {
    part: 'grain',
    caffeine: '80–185 mg/tasse',
    age: '1 000+ ans',
  },
  maté: {
    part: 'feuille',
    caffeine: '65–130 mg/tasse',
    age: '500+ ans',
  },
};

function Drink({ name }) {
  const drink = drinksData[name];

  if (!drink) {
    return <p>Boisson inconnue</p>;
  }

  return (
    <section>
      <h5>{name}</h5>
      <dl>
        <dt>Partie de la plante</dt>
        <dd>{drink.part}</dd>

        <dt>Dose de caféine</dt>
        <dd>{drink.caffeine}</dd>

        <dt>Âge</dt>
        <dd>{drink.age}</dd>
      </dl>
    </section>
  );
}


export default function Defi_4_Bonus_Affectation_Variable() {
    return (
    <div>
      <h4>Défis Bonus</h4>
        {Object.keys(drinksData).map((drinkName) => (
        <Drink key={drinkName} name={drinkName} />
      ))}
    </div>
  );
}
