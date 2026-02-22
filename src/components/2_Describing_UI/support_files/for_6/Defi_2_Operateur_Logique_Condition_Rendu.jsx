function Item({ name, importance }) {
  return (
    <li className="item">
      {name} {importance > 0 && (<i>(Importance: {importance})</i>)}
    </li>
  );
}
export default function Defi_2_Operateur_Logique_Condition_Rendu() {
    
    return(
        <section>
        <h4 className="section-title">Défi 2 : Afficher l’importance de l’objet avec && </h4>
        <ul>
            <Item
            importance={9}
            name="Combinaison spatiale"
            />
            <Item
            importance={0}
            name="Casque à feuille d’or"
            />
            <Item
            importance={6}
            name="Photo de Tam"
            />
        </ul>
        </section>
    )
}