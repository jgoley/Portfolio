const SKILLS = [
  "Javascript",
  "React",
  "Typescript",
  "Rails",
  "Ruby",
  "Sass",
  "Storybook",
  "Chromatic",
];

const WebDeveloper = () => (
  <div className="web-projects">
    <Skills skills={SKILLS} />
    <div style={{ display: "flex", gap: "10px", alignItems: "baseline" }}>
      <h1>[@GreenRiver]</h1>
      <a href="//greenriver.com" target="_blank">
        Website
      </a>
    </div>
    <WebProjects projectGroup={currentProjects} />
    <WebProjects projectGroup={primaryProjects} />
    <h1>[Yak Shaving]</h1>
    <WebProjects projectGroup={yakShaving} />
    <div style={{ display: "flex", gap: "10px", alignItems: "baseline" }}>
      <h1>[@EcoHealthAlliance]</h1>
      <a href="//ecohealthalliance.org" target="_blank">
        Website
      </a>
    </div>
    <WebProjects projectGroup={secondaryProjects} />
  </div>
);

const WebProjects = ({ projectGroup }) => (
  <div className={projectGroup.type}>
    {projectGroup.projects.map((project, i) => (
      <WebProject project={project} key={i} />
    ))}
  </div>
);

const List = ({ listItems, listType }) => (
  <ul className={listType}>
    {listItems.map((listItem, i) => (
      <li key={i}>{listItem}</li>
    ))}
  </ul>
);

const WebsiteVideo = ({ video }) => <video src={`../${video}`} controls />;

class WebProject extends React.Component {
  createMarkup() {
    return { __html: this.props.project.description };
  }

  parsedDescription() {
    let description = this.props.project.description;
    if (!description.match(/<a/)) return <p>{description}</p>;
    return <p dangerouslySetInnerHTML={this.createMarkup()} />;
  }

  render() {
    let project = this.props.project;
    const { title, url, tech, roles, githubUrl } = project;
    return (
      <article>
        <h1>{title}</h1>
        <div className="web-project--info">
          <div>
            {this.parsedDescription()}
            <div className="list-set">
              <List listItems={tech} listType="tech" />
              <List listItems={roles} listType="roles" />
            </div>
            <ul className="links">
              {githubUrl && (
                <li>
                  <a href={githubUrl}>
                    <i className="fa fa-github"></i>
                    Github Repo
                  </a>
                </li>
              )}
              {url && (
                <li>
                  <a href={project.url}>
                    <i className="fa fa-globe"></i>
                    On the Interwebs
                  </a>
                </li>
              )}
            </ul>
          </div>
        </div>
      </article>
    );
  }
}

ReactDOM.render(<WebDeveloper />, document.getElementById("web-developer"));
