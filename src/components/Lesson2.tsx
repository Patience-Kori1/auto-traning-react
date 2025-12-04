function MyButton({ title }: { title: string }) {
  return (
    <button>{title}</button>
  );
}

export default function Lesson2() {
  return (
    <div>
      <h3>Bienvenue dans mon appli</h3>
      <MyButton title="Je suis un bouton" />
    </div>
  );
}

