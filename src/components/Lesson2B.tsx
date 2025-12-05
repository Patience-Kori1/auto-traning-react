interface MyButtonProps {
  /** The text to display inside the button */
  title: string;
  /** Whether the button can be interacted with */
  disabled: boolean;
}

function MyButton({ title, disabled }: MyButtonProps) {
  return (
    <button disabled={disabled}>{title}</button>
  );
}

export default function Lesson2B () {
  return (
    <div>
      <p>Ici on parle du typage des composants react en utilisant l'objet interface pour le typage des props. L'objet interface est placé au dessus de la fonction du composant ou peut etre placé dans un autre fichier.</p>
      <MyButton title="I'm a disabled button" disabled={true}/>
    </div>
  );
}