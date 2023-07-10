const Skills = ({ skills }) => {
  return (
    <div className="skills">
      <h1>Skills</h1>
      <p>
        <span>[</span>
        <span> {skills.join(", ")} </span>
        <span>]</span>
      </p>
    </div>
  );
};
