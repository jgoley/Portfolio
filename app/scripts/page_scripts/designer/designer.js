var projects = [
  {
    title: '',
    description: '',
  },
]

var skills = ['Illustrator', 'InDesign', 'Photoshop']

class Designer extends React.Component {
  render() {
    return (
      <div>
        <Skills skills={skills} />
        <h1 className='soon'>
          <span> Coming</span>
          <span> Soon</span>
        </h1>

      </div>
    )
  }
}

class DesignProjects extends React.Component {
  renderChildren() {
    let children = this.props.projects.map((project, i)=>{
      return(<DesignProject project={project} key={i}/>)
    })
    return children
  }
  render() {
    return (
      <div>
        {this.renderChildren()}
      </div>
    )
  }
}

class DesignProject extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.project.title}</h1>
      </div>
    )
  }
}

ReactDOM.render(
  <Designer />,
  document.getElementById('designer')
)
