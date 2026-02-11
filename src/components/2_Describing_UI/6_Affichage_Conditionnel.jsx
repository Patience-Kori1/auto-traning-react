import "../../App.css"
function Item({ name, isPacked }) {
    if (isPacked) {
        return <li className="item">{name} ✅</li>;
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
        </div>
    )
}

