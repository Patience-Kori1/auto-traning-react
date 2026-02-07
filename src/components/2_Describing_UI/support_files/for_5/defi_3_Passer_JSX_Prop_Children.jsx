export function Card({children}) {
    return (
        <div className="card">
            {children}
        </div>
    )
}

export default function Profile3() {
  return (
    <div>
      <Card>
        <div className="card-content">
          <h1>Photo</h1>
          <img
            className="avatar"
            src="https://i.imgur.com/OKS67lhm.jpg"
            alt="Aklilu Lemma"
            width={70}
            height={70}
          />
        </div>
     </Card>
      <Card>
        <div className="card-content">
          <h1>À propos</h1>
          <p>Aklilu Lemma était un scientifique éthiopien renommé qui a découvert le traitement naturel de la bilharziose.</p>
        </div>
      </Card>
    </div>
  );
}
