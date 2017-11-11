var primaryProjects = {
  type: 'primary',
  projects: [
    {
      title: 'TAP into CMA',
      url: 'http://tours.columbiamuseum.org',
      githubUrl: 'https://github.com/jgoley/museum-tour-web',
      appUrl: 'https://itunes.apple.com/us/app/tap-into-cma/id1129913149?mt=8',
      backlogUrl: 'https://trello.com/b/jlc34JoD/tap',
      description: 'Web-based mobile tour application for the Columbia Museum of Art. The application allows the museum to offer an immersive multimedia (audio, video, imagery) experience on in-house iPods and visitor mobile devices.',
      roles: ['UX/UI Design', 'Full-Stack Development', 'Dev-Ops'],
      tech: ['Meteor.js', 'MongoDb', 'AWS', 'CoffeeScript', 'Jade/Pug', 'Stylus'],
      openSource: true,
      images: [],
      order: 1
    },
    {
      title: 'Animal Foster Availability Management',
      url: 'http://54.175.158.93/',
      githubUrl: 'https://github.com/jgoley/animal-foster-management',
      description: 'Application allowing animal foster organizations to view fosters who are available to help with animals. Originally developed for NYCACC and in beta.',
      roles: ['UX/UI Design', 'Full-Stack Development', 'Dev-Ops'],
      tech: ['React', 'Meteor.js', 'MongoDb', 'AWS', 'JSX', 'Jade/Pug', 'Stylus'],
      openSource: true,
      images: [],
      order: 2
    },
    {
      title: 'Atom autocomplete for Meteor packages',
      githubUrl: 'https://github.com/jgoley/atom-autocomplete-meteor-packages',
      url: 'https://atom.io/packages/autocomplete-meteor-packages',
      description: 'Atom Editor package that helps Meteor.js users when importing packages to project. Reads versions or packages file in Meteor projects and offers autocomplete suggestions when importing Meteor packages (using require or import) or including packages in package.js with api.use(.... The package name is automatically prepended with meteor/ when importing.',
      roles: ['Development'],
      tech: ['Atom Editor API', 'CoffeeScript'],
      openSource: true,
      images: [],
      order: 3
    },
    {
      title: 'Pollinate',
      githubUrl: 'https://github.com/jgoley/Pollinate',
      appUrl: '',
      description: 'An application that helps connect farmers with beekeepers who offer pollination services. Farmers can search for beekeepers, view details about the costs associated with each beekeeper\'s operation then make a request for hives. Users can review and message each other.',
      roles: ['UX/UI Design', 'Full-Stack Development'],
      tech: ['Backbone.js', 'Parse'],
      openSource: true,
      images: [],
    },
  ]
};

var yakShaving = {
  type: 'secondary',
  projects: [
    {
      title: 'Dotfiles',
      url: '',
      githubUrl: 'https://github.com/jgoley/dotfiles',
      appUrl: '',
      description: 'Collection of dotfiles including custom keyboard remaps using <a href="https://github.com/tekezo/Karabiner-Elements"</a>Karabiner Elements</a>, customly configed window management with <a href="https://github.com/kasper/phoenix">Phoenix</a> and the typical dotfiles in the yak shavers kit.',
      roles: ['Development', 'Shearing'],
      tech: ['Bash', 'AppleScript', 'CoffeScript', 'CSON/JSON'],
      openSource: true,
      images: [],
    },
  ]
};

var secondaryProjects = {
  type: 'secondary',
  projects: [
    {
      title: 'Eidr-Connect',
      url: 'https://eidr-connect.eha.io',
      githubUrl: 'https://github.com/ecohealthalliance/eidr-connect',
      appUrl: '',
      description: 'EIDR Connect is a centralized web platform dedicated to tracking Emerging Infectious Diseases (EIDs). Through EIDR Connect, ongoing EID events can be curated by experts compared and individual emergence events can be explored in depth.',
      roles: ['UX/UI Design', 'Front End Development'],
      tech: ['Meteor.js', 'MongoDb', 'CoffeeScript', 'Jade/Pug', 'Stylus'],
      openSource: true,
      images: [],
    },
    {
      title: 'FLIRT',
      url: 'https://flirt.eha.io/',
      githubUrl: 'https://github.com/ecohealthalliance/flirt',
      appUrl: '',
      description: 'Network analysis tool that enables users to examine flight networks to identify where infected travelers and contaminated goods are likely to travel. Connectedness between airports is calculated using passenger, cargo, and network data.',
      roles: ['UX/UI Design', 'Front End Development'],
      tech: ['Meteor.js', 'MongoDb', 'CoffeeScript', 'Jade/Pug', 'Stylus'],
      openSource: true,
      images: [],
    },
    {
      title: 'NIAM',
      url: 'https://niam.eha.io/',
      githubUrl: 'https://github.com/ecohealthalliance/nia-monitor',
      appUrl: '',
      description: 'Novel Infectious Agent Monitor highlights and discovers newly trending infectious diseases within ProMED mail posts using an advanced algorithm that analyzes historical data and disease mentions.',
      roles: ['UX/UI Design', 'Front End Development'],
      tech: ['Meteor.js', 'MongoDb', 'CoffeeScript', 'Jade/Pug', 'Stylus'],
      openSource: true,
      images: [],
    },
    {
      title: 'Tater',
      githubUrl: '',
      appUrl: '',
      description: 'An easy to use annotation application that allows users to code, analyze and cross-analyze, store, and export text data.',
      roles: ['UX/UI Design', 'Front End Development'],
      tech: ['Meteor.js', 'MongoDb', 'CoffeeScript', 'Jade/Pug', 'Stylus'],
      openSource: true,
      images: [],
      order: 2
    },
    {
      title: 'Global Ranavirus Reporting System',
      url: 'https://mantle.io/grrs',
      githubUrl: '',
      appUrl: '',
      description: 'The Global Ranavirus Reporting System allows users to create and manage records for Ranavirus studies and reports, import and export data, view tables and maps of reports, and leave reviews and comments on reports.',
      roles: ['UX/UI Design', 'Front End Development'],
      tech: ['Meteor.js', 'MongoDb', 'CoffeeScript', 'Jade/Pug', 'Stylus'],
      openSource: true,
      images: [],
    }
  ]
};

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
