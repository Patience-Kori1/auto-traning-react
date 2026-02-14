import "../../App.css"
function Item({ name, isPacked }) {

    // 6. Affichage conditionnel en affectant conditionnellement du JSX à une variable au dessus du return
    let itemContent = name;
    if (isPacked) {
        itemContent = name + " ✅";
    }
    return (
        <li className="item">
            {itemContent}
        </li>
    );
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

