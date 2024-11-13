function Section({ title, children, ...props }) {
  console.log(props.id);
  return (
    <section {...props}>
      <h2>{title}</h2>
      {children}
    </section>
  );
}

export default Section;
