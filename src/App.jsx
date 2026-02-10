import "./App.css"
import Gallery from "./components/I_Installation/lesson1"
import Lesson2 from "./components/I_Installation/Lesson2"
import Lesson2B from "./components/I_Installation/Lesson2B"
import Lesson2C from "./components/I_Installation/Lesson2C"
import Lesson2D from "./components/I_Installation/Lesson2D"
import Lesson2E_A from "./components/I_Installation/Lesson2E_A"
import FirstComponent from "./components/2_Describing_UI/1_FirstComponent"
import { Import_Export_Components } from "./components/2_Describing_UI/2_Import_Export_Components"
import Markup_With_Jsx from "./components/2_Describing_UI/3_Markup_With_Jsx.jsx"
import JS_In_JSX_Accolades from "./components/2_Describing_UI/4_JS_In_JSX_Accolades.jsx"
import Passer_Props_A_Composant from "./components/2_Describing_UI/5_Passer_Props_Composant.jsx"
import Affichage_Conditionnel from "./components/2_Describing_UI/6_Affichage_Conditionnel.jsx"

import './index.css'
export default function App() {
  return(
  <>
    <h1 className="app-title">
      Apprentissage React personnel <span>à base de la documentation officielle</span>
    </h1>
    <>{/* Section II. Décrire L'UI*/}
      <div className="chapter">{/* 6. Affichage Conditionnel*/}
        <h2 className="chapter-title">6. Affichage conditionnel</h2>
        <Affichage_Conditionnel/>
      </div>
      <div className="chapter">{/* 5. Passer des props à un composant*/}
        <h2 className="chapter-title">5. Passer des props à un composant</h2>
        <Passer_Props_A_Composant/>
      </div>
      <div className="chapter">{/* 4. JavaScript dans JSX grace aux accolades*/}
         <h2 className="chapter-title">4. JavaScript dans JSX grace aux accolades</h2>
        <JS_In_JSX_Accolades/>
      </div>
      <div className="chapter">{/* 3. Ecrire du balisage avec JSX*/}
         <h2 className="chapter-title">3. Ecrire du balisage avec JSX</h2>
        <Markup_With_Jsx/>
      </div>
      <div className="chapter">{/* 2. Importer et exporter des composants*/}
         <h2 className="chapter-title">2. Importer et exporter des composants</h2>
        <Import_Export_Components/>
      </div>
      <div className="chapter">{/* 1. Mon premier composant*/}
         <h2 className="chapter-title">1. Mon premier composant react</h2>
        <FirstComponent/>
      </div>
    </>
    <>{/* Section I. Installation*/}
      
      {/* <h2> Lesson 2D : Typage du hook useContext</h2>
      <Lesson2E_A/>
      <h2> Lesson 2D : Typage du hook useReduce</h2>
      <Lesson2D/>
      <h2> Lesson 2C : Typage implicite du hook useState</h2>
      <Lesson2C/>
      <h2> Lesson 2B : TypeScript pour les composant React avec interface</h2>
      <Lesson2B/>
      <h2> Lesson 2A : TypeScript pour les composant React</h2>
      <Lesson2/>
      <h2> Lesson 1 : First component</h2>
      <Gallery/> */}
    </>
  </>
  )
}