function Corners({ tone = "gold" }) {
  return (
    <>
      <span className={`corner corner-tl corner-${tone}`} />
      <span className={`corner corner-tr corner-${tone}`} />
      <span className={`corner corner-bl corner-${tone}`} />
      <span className={`corner corner-br corner-${tone}`} />
    </>
  );
}

export default Corners;
