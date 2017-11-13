var skills = ['Javascript', 'Meteor', 'React', 'MongoDb', 'CoffeScript', 'Jade/Pug', 'Stylus', 'SASS']

class WebDeveloper extends React.Component {
  render() {
    return (
      <div className='web-projects'>
        <Skills skills={skills} />
        <WebProjects projectGroup={primaryProjects} />
        <h1>[Yak Shaving]</h1>
        <WebProjects projectGroup={yakShaving} />
        <h1>[@EcoHealthAlliance]</h1>
        <WebProjects projectGroup={secondaryProjects} />
      </div>
    )
  }
}

class WebProjects extends React.Component {
  renderChildren() {
    var children = this.props.projectGroup.projects.map((project, i) => {
      return (<WebProject project={project} key={i} />)
    })
    return children
  }
  render() {
    return (
      <div className={this.props.projectGroup.type}>
        {this.renderChildren()}
      </div>
    )
  }
}

class List extends React.Component {
  render () {
    var listItems = []
    this.props.listItems.forEach((listItem, i) => {
      listItems.push(<li key={i} >{listItem}</li>)
    })
    return (
      <ul className={this.props.listType}> {listItems} </ul>
    )
  }
}

class WebsiteVideo extends React.Component {
  render () {
    return (
      <video src={`../${this.props.video}`} controls></video>
    )
  }
}

class WebProject extends React.Component {
  interwebsUrl() {
    let project = this.props.project
    if (project.url) {
      return (
        <li>
          <a href={project.url} >
            <i className='fa fa-globe'></i>
            On the Interwebs
          </a>
        </li>
      )
    }
    else
      return null
  }

  otherUrl(type) {
    let project = this.props.project
    let linkText = ''
    let icon = ''
    if (type === 'appUrl') {
      linkText = 'In the App Store'
      icon = 'mobile'
    }
    else {
      linkText = 'Backlog'
      icon = 'list'
    }
    if (project[type] && project[type].length > 0) {
      return (
        <li>
          <a href={ project[type] } title={linkText} >
            <i className={`fa fa-${icon}`}></i>
            {linkText}
          </a>
        </li>
      )
    }
    else
      return null
  }

  createMarkup() {
    return { __html: this.props.project.description }
  }

  parsedDescription() {
    let description = this.props.project.description
    if (!description.match(/<a/))
      return (<p>{description}</p>)
    return (<p dangerouslySetInnerHTML={this.createMarkup()} />)
  }

  render () {
    let project = this.props.project
    return (
      <article>
        <h1>{project.title}</h1>
        <div className='web-project--info'>
          <div>
            {this.parsedDescription()}
            <div className='list-set'>
              <List listItems={project.tech} listType='tech' />
              <List listItems={project.roles} listType='roles' />
            </div>
            <ul className='links'>
              <li>
                <a href={project.githubUrl} >
                  <i className='fa fa-github'></i>
                  Github Repo
                </a>
              </li>
              { this.interwebsUrl() }
              { this.otherUrl('appUrl') }
              { this.otherUrl('backlogUrl', false) }
            </ul>
          </div>
        </div>
      </article>
    )
  }
}

ReactDOM.render(
  <WebDeveloper />,
  document.getElementById('web-developer')
)
