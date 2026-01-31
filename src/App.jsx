import "./App.css";

const projects = [
  {
    title: "Gantt de Mantenimiento (Excel)",
    subtitle: "Planificación PM/CM · Cronograma · Hitos",
    tags: ["Excel", "Mantenimiento", "Planner"],
    link: "#",
  },
  {
    title: "Dashboard de Mantenimiento (Power BI)",
    subtitle: "KPIs · Backlog · Cumplimiento",
    tags: ["Power BI", "KPIs"],
    link: "#",
  },
  {
    title: "Planos y esquemas eléctricos (AutoCAD)",
    subtitle: "Unifilares · Metrados · Documentación",
    tags: ["AutoCAD", "Potencia"],
    link: "#",
  },
];

export default function App() {
  return (
    <div className="page">
      <header className="top">
        <h1>Proyectos</h1>
        <p>Selección de trabajos en mantenimiento, potencia y analítica.</p>
      </header>

      <main className="grid">
        {projects.map((p) => (
          <a className="card" key={p.title} href={p.link}>
            <div className="card-body">
              <h2>{p.title}</h2>
              <p className="sub">{p.subtitle}</p>
              <div className="tags">
                {p.tags.map((t) => (
                  <span className="tag" key={t}>
                    {t}
                  </span>
                ))}
              </div>
              <span className="cta">Ver detalles →</span>
            </div>
          </a>
        ))}
      </main>
    </div>
  );
}
