
function FirstComponent() {
  return (
    <article>
      <h3 className="section-title">Mon composant</h3>
      <ol>
        <li>Les composants : les blocs de construction de l’UI</li>
        <li>Définir un composant</li>
        <li>Utiliser un composant</li>
      </ol>
      <img
        src="https://i.imgur.com/MK3eW3Am.jpg"
        alt="Katherine Johnson"
      />
    </article>
  )
}

export function Profile() {
  return (
    <img
        src="https://i.imgur.com/MK3eW3Am.jpg"
        alt="Katherine Johnson"
      />
  )
}


export default function Galery() {
  return (
    <>
      <h4 className="section-title">Scientifiques de renom</h4>
      <Profile/>
      <Profile/>
      <Profile/>
      <FirstComponent/>
    </>
  )
}
