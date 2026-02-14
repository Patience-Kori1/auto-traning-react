import "../../App.css"
function Item({ name, isPacked }) {

    // 1. Rendu conditionnel avec deux possibilités d'affichage de deux branches (les isPacked avec un done et les false sans done)
    // if (isPacked) {
    //     return <li className="item">{name} ✅</li>;
    // }
    // return <li className="item">{name}</li>;

    // 2. Rendu conditionnel avec une possibilité d'exclure en le rendant nulle ou inclure des portions de JSX
    // if (isPacked) {
    //     return null;
    // }
    // return <li className="item">{name}</li>;

    // 3. Rendu conditionnel utilisant un ternaire avec la possibilité d'exclure et d'inclure en respectant le DRY sans aujouté aussi une nouvel branche dans le DOM
    // return (
    //     <li className="item">
    //         {isPacked ? name + ' ✅' : name}
    //     </li>
    // )

    // 4. Rendu avec balisages conditionnels imbriqués en utilisant le ternaire

    // return (
    //     <li className="item">
    //         {isPacked ? (
    //             <del>
    //             {name + ' ✅'}
    //             </del>
    //         ) : (
    //             name
    //         )}
    //     </li>
    // );

    // 5. Affichage conditionnel en utilisant l'opérateur logique ET &&, pour les conditions qui n'affiche queleque chose que quand la condition est vrai et n'affiche rien quand elle fausse
    // return (
    //     <li className="item">
    //         {name} {isPacked && '✅'}
    //     </li>
    // );

    // 6. Affichage conditionnel en affectant conditionnellement du JSX à une variable au dessus du return. L'of
    // let itemContent = name;
    // if (isPacked) {
    //     itemContent = name + " ✅";
    // }
    // return (
    //     <li className="item">
    //         {itemContent}
    //     </li>
    // );

     // 7. Affichage conditionnel en affectant conditionnellement du JSX à une variable au dessus du return. L'obejctif étant d'afficher aussi du balisage conditionnel imbriqué

    let itemContent = name;
    if (isPacked) {
        itemContent = (
            <del>
                {name + " ✅"}
            </del>
        );
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

