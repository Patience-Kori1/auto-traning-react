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
      <h2>Welcome to my app</h2>
      <MyButton title="I'm a disabled button" disabled={true}/>
    </div>
  );
}