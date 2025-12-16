export default function Markup_With_Jsx() {
    return (
        <> 
        {/* Ces balises en bas ne marcherait pas s'il n'y avait pas une balise enrobante ou les fragments */}

            <h3>Liste des règles strictes de JSX</h3>
            <img
                src="https://i.imgur.com/yXOvdOSs.jpg"
                alt="Hedy Lamarr"
                className="photo"
            />{/** Le petit bar de avant la fermeture du crochet doit etre là sinon img pas reconnu en DOM */}
            <ul>
                <li>Règles JSX 1 : renvoyer un seule élément racine. Pour renvoyer plusieurs éléments avec votre composant, enrobez-les dans une balise parent.  </li>
                <li>Règles JSX 2 : JSX exige que les balises auto-fermantes ou enrobantes soient explicitement fermées.</li> {/** La balise de fermeture des li doivent etre là*/}
                <li>Règles JSX 3 : Utiliser du camelCase pour (presque) tout ! </li>
            </ul>
        </>
    )
}