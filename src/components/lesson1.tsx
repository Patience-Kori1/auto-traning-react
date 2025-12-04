function Profile() {
  return (
    <img
      src="https://i.imgur.com/MK3eW3As.jpg"
      alt="Katherine Johnson"
    />
  );
}

export default function Gallery() {
  return (
    <section>
      <h3>Scientifiques de renom</h3>
      <Profile />
      <Profile />
      <Profile />
    </section>
  );
}
