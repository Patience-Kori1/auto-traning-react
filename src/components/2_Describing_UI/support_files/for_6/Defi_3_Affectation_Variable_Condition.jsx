import React from 'react'

const drinks = {
  thé: {
    part: 'feuille',
    caffeine: '15–70 mg/tasse',
    age: '4 000+ ans'
  },
  café: {
    part: 'grain',
    caffeine: '80–185 mg/tasse',
    age: '1 000+ ans'
  }
};

function Drink({ name }) {
  // let part, caffeine, age;
  // if (name === 'thé') {
  //     part = 'feuille';
  //     caffeine = '15–70 mg/tasse';
  //     age = '4 000+ ans';
  // } else if (name === 'café') {
  //     part = 'grain';
  //     caffeine = '80–185 mg/tasse';
  //     age = '1 000+ ans';
  // }

  const { part, caffeine, age } = drinks[name];
  
  return (
  <section>
      <h5>{name}</h5>
      <dl>
        <dt>Partie de la plante</dt>
          <dd>{part}</dd>
        <dt>Dose de caféine</dt>
          <dd>{caffeine}</dd>
        <dt>Âge</dt>
          <dd>{age}</dd>
      </dl>
  </section>
  );
}

export default function Defi_3_Affectation_Variable_Condition() {
  return (
    <div>
      <h4>Défis cours</h4>
      <Drink name="thé" />
      <Drink name="café" />
    </div>
  );
}
