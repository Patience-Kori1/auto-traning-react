function MyButton({ title }: { title: string }) {
  return (
    <button>{title}</button>
  );
}

export default function Lesson2() {
  return (
    <div>
      <p>Ici on parle du typage simple des props d'un composant React quand le typage se fait en paramètre de la fonction</p>
      <MyButton title="Je suis un bouton" />
    </div>
  );
}

