import "../../App.css"
function Item({ name, isPacked }) {

    // 1. Rendu conditionnel avec deux possibilités d'affichage de deux branches (les isPacked avec un done et les false sans done)
    // if (isPacked) {
    //     return <li className="item">{name} ✅</li>;
    // }
    // return <li className="item">{name}</li>;

    // 2. Rendu conditionnel avec une possibilité d'exclure en le rendant nulle ou inclure des portions de JSX
    if (isPacked) {
        return null;
    }
    return <li className="item">{name}</li>;

}

export default function Affichage_Conditionnel() {
    return(
        <div>
            <section>
                <h3>Liste d’affaires de Sally Ride</h3>
                <ul>
                    <Item
                        isPacked={false}
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
        </div>
    )
}

