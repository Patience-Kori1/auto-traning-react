import Gallery from "./components/lesson1"
import Lesson2 from "./components/Lesson2"
import Lesson2B from "./components/Lesson2B"
import './index.css'
export default function App() {
  return(
    <>
    <h2> Lesson 2 : TypeScript pour les composant React avec interface</h2>
      <Lesson2B/>
      <h2> Lesson 2 : TypeScript pour les composant React</h2>
      <Lesson2/>
      <h2> Lesson 1 : First component</h2>
      <Gallery/>
    </>
  )
}