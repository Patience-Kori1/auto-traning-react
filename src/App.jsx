import Gallery from "./components/lesson1"
import Lesson2 from "./components/Lesson2"
import Lesson2B from "./components/Lesson2B"
import Lesson2C from "./components/Lesson2C"
import Lesson2D from "./components/Lesson2D"
import './index.css'
export default function App() {
  return(
    <>
      <h2> Lesson 2D : Typage du hook useReduce</h2>
      <Lesson2D/>
      <h2> Lesson 2C : Typage implicite du hook useState</h2>
      <Lesson2C/>
      <h2> Lesson 2B : TypeScript pour les composant React avec interface</h2>
      <Lesson2B/>
      <h2> Lesson 2A : TypeScript pour les composant React</h2>
      <Lesson2/>
      <h2> Lesson 1 : First component</h2>
      <Gallery/>
    </>
  )
}