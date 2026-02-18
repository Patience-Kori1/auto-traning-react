import React from 'react'

function Drink({ name }) {
  let part, caffeine, age;
  if (name === 'thé') {
    part = 'feuille';
    caffeine = '15–70 mg/tasse';
    age = '4 000+ ans';
  } else if (name === 'café') {
    part = 'grain';
    caffeine = '80–185 mg/tasse';
    age = '1 000+ ans';
  }
  return (
    <section>
      <h1>{name}</h1>
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
      <Drink name="thé" />
      <Drink name="café" />
    </div>
  );
}
