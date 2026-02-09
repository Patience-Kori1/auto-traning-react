export function Card({children}) {
    return (
        <div className="card">
          <div className="card-content">
            {children}
          </div>
        </div>
    )
}

export default function Profile3() {
  return (
    <div>
      <Card>
        <h1>Photo</h1>
        <img
          className="avatar"
          src="https://i.imgur.com/OKS67lhm.jpg"
          alt="Aklilu Lemma"
          width={70}
          height={70}
        />
     </Card>
      <Card>
          <h1>À propos</h1>
          <p>Aklilu Lemma était un scientifique éthiopien renommé qui a découvert le traitement naturel de la bilharziose.</p>
      </Card>
    </div>
  );
}
