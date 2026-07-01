function SummaryCards() {
  const cards = [
    {
      title: "Current Weight",
      value: "92.0 kg"
    },
    {
      title: "Goal Weight",
      value: "85.0 kg"
    },
    {
      title: "Calories",
      value: "1540 / 1700"
    },
    {
      title: "Protein",
      value: "165 g / 170 g"
    }
  ];

  return (
    <section className="summary-grid">

      {cards.map((card) => (
        <article
          key={card.title}
          className="summary-card"
        >
          <h3>{card.title}</h3>

          <p>{card.value}</p>
        </article>
      ))}

    </section>
  );
}

export default SummaryCards;