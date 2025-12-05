import React from 'react'
import {useState} from 'react'

function Lesson2C() {
    // Infère le type "boolean"
    const [enabled, setEnabled] = useState(false);

    // Typage explicite à "boolean"
    const [enabledd, setEnabledd] = useState<boolean>(false);
    
  return (
    <div>
        <p>
            Le Hook useState réutilise la valeur initiale que vous lui passez pour déterminer le type attendu pour la variable d’état. Par exemple, le code suivant :
            Infère le type "boolean"
            const [enabled, setEnabled] = useState(false);
            …attribuera le type boolean à enabled, et setEnabled sera une fonction acceptant soit un argument boolean, soit une fonction de mise à jour qui renvoie un boolean.
        </p>

        <p>
            Si vous souhaitez typer l’état explicitement, vous pouvez passer un paramètre de type à l’appel useState :

            // Typage explicite à "boolean"
            const [enabled, setEnabled] = useState boolean (false);
            
        </p>
    </div>
  )
}

export default Lesson2C