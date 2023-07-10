var projects = [
  {
    title: "",
    description: "",
  },
];

var skills = ["Illustrator", "InDesign", "Photoshop", "Figma"];

const Designer = () => (
  <div>
    <Skills skills={skills} />
    <h1 className="soon">
      <span> Coming</span>
      <span> Soon</span>
    </h1>
  </div>
);

const DesignProjects = () => (
  <div>
    {projects.map((project, i) => (
      <DesignProject project={project} key={i} />
    ))}
  </div>
);

const DesignProject = ({ project }) => (
  <div>
    <h1>{project.title}</h1>
  </div>
);

ReactDOM.render(<Designer />, document.getElementById("designer"));
