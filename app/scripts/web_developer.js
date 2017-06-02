var primaryProjects = [
  {
    title: 'TAP into CMA',
    url: 'http://tours.columbiamuseum.org',
    githubUrl: 'https://github.com/jgoley/museum-tour-web',
    appUrl: 'https://itunes.apple.com/us/app/tap-into-cma/id1129913149?mt=8',
    description: 'Web-based mobile tour application for the Columbia Museum of Art. The application allows the museum to offer an immersive multimedia (audio, video, imagery) experience on in-house iPods and visitor mobile devices.',
    type: 'primary',
    roles: ['UX/UI Design', 'Full-Stack Development', 'Dev-Ops'],
    tech: ['Meteor.js', 'MongoDb', 'AWS', 'CoffeeScript', 'Stylus'],
    openSource: true,
    images: [],
    video: 'images/eidr-connect.mov',
    order: 1
  },
  {
    title: 'Animal Foster Management/Availability',
    url: 'http://54.175.158.93/',
    githubUrl: 'https://github.com/jgoley/animal-foster-management',
    description: 'Application allowing animal foster organizations to view fosters who are available to help with animals. Originally developed for NYCACC',
    type: 'primary',
    roles: ['UX/UI Design', 'Full-Stack Development', 'Dev-Ops'],
    tech: ['React', 'Meteor.js', 'MongoDb', 'AWS', 'JSX', 'Stylus'],
    openSource: true,
    images: [],
    video: 'images/eidr-connect.mov'
  },
  {
    title: 'Pollinate',
    url: 'http://jgoley.github.io/Pollinate/',
    githubUrl: 'https://github.com/jgoley/Pollinate',
    appUrl: '',
    description: 'An application that helps farmers with beekeepers who offer pollination services. Farmers can search for beekeepers, view details about the costs associated with each beekeeper\'s operation then make a request for hives. Users can review and message each other.',
    type: 'primary',
    roles: ['UX/UI Design', 'Full-Stack Development'],
    tech: ['Backbone.js', 'Parse'],
    openSource: true,
    images: [],
    video: 'images/eidr-connect.mov'
  },
]
var secondaryProjects = [
  {
    title: 'Eidr-Connect',
    url: 'https://eidr-connect.eha.io',
    githubUrl: 'https://github.com/ecohealthalliance/eidr-connect',
    appUrl: '',
    description: 'EIDR Connect is a centralized web platform dedicated to tracking Emerging Infectious Diseases (EIDs). Through EIDR Connect, ongoing EID events can be curated by experts compared and individual emergence events can be explored in depth.',
    type: 'secondary',
    roles: ['UX/UI Design', 'Front End Development'],
    tech: ['Meteor.js', 'MongoDb', 'CoffeeScript', 'Jade', 'Stylus'],
    openSource: true,
    images: [],
    video: ''
  },
  {
    title: 'FLIRT',
    url: 'https://flirt.eha.io/',
    githubUrl: 'https://github.com/ecohealthalliance/flirt',
    appUrl: '',
    description: 'Network analysis tool that enables users to examine flight networks to identify where infected travelers and contaminated goods are likely to travel. Connectedness between airports is calculated using passenger, cargo, and network data.',
    type: 'secondary',
    roles: ['UX/UI Design', 'Front End Development'],
    tech: ['Meteor.js', 'MongoDb', 'CoffeeScript', 'Jade', 'Stylus'],
    openSource: true,
    images: [],
    video: ''
  },
  {
    title: 'NIAM',
    url: 'https://niam.eha.io/',
    githubUrl: 'https://github.com/ecohealthalliance/nia-monitor',
    appUrl: '',
    description: 'Novel Infectious Agent Monitor highlights and discovers newly trending infectious diseases within ProMED mail posts using an advanced algorithm that analyzes historical data and disease mentions.',
    type: 'secondary',
    roles: ['UX/UI Design', 'Front End Development'],
    tech: ['Meteor.js', 'MongoDb', 'CoffeeScript', 'Jade', 'Stylus'],
    openSource: true,
    images: [],
    video: ''
  },
  {
    title: 'Tater',
    url: 'https://tater.io/',
    githubUrl: '',
    appUrl: '',
    description: 'An easy to use annotation application that allows users to code, analyze and cross-analyze, store, and export text data.',
    type: 'secondary',
    roles: ['UX/UI Design', 'Front End Development'],
    tech: ['Meteor.js', 'MongoDb', 'CoffeeScript', 'Jade', 'Stylus'],
    openSource: true,
    images: [],
    video: ''
  },
  {
    title: 'Global Ranavirus Reporting System',
    url: 'https://mantle.io/grrs',
    githubUrl: '',
    appUrl: '',
    description: 'The Global Ranavirus Reporting System allows users to create and manage records for Ranavirus studies and reports, import and export data, view tables and maps of reports, and leave reviews and comments on reports.',
    type: 'secondary',
    roles: ['UX/UI Design', 'Front End Development'],
    tech: ['Meteor.js', 'MongoDb', 'CoffeeScript', 'Jade', 'Stylus'],
    openSource: true,
    images: [],
    video: ''
  },
]

// https://itunes.apple.com/gw/app/good-question!/id1117995973?mt=8

var skills = ['Meteor', 'React', 'CoffeScript', 'MongoDb', 'Jade', 'Stylus', 'SASS']

class WebDeveloper extends React.Component {
  render() {
    return (
      <div className='web-projects'>
        <Skills skills={skills} />
        <WebProjects projects={primaryProjects} type='primary' />
        <h1>[@EcoHealthAlliance]</h1>
        <WebProjects projects={secondaryProjects} type='secondary' />
      </div>
    )
  }
}

class WebProjects extends React.Component {
  renderChildren() {
    var children = this.props.projects.map((project, i) => {
      return (<WebProject project={project} key={i} />)
    })
    return children
  }
  render() {
    return (
      <div className={this.props.type}>
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
    console.log(this.props)
    return (
      <video src={`../${this.props.video}`} controls></video>
    )
  }
}

class WebProject extends React.Component {

  render () {
    var project = this.props.project
    console.log(this.props)
    return (
      <article>
        <h1>{project.title}</h1>
        <div className='web-project--info'>
          <div>
            <p>{project.description}</p>
            <div className='list-set'>
              <List listItems={project.tech} listType='tech' />
              <List listItems={project.roles} listType='roles' />
            </div>
            <ul className='links'>
              <li><a href={project.url} >On the Interwebs</a></li>
              <span className='seperator'> | </span>
              {
                project.appUrl && project.appUrl.length > 0 ?
                  <li>
                    <a href={ project.appUrl } title='In the App Store' >
                      In the App Store
                    </a>
                  </li>
                : null
              }
              {
                project.appUrl && project.appUrl.length > 0 ?
                  <span className='seperator'> | </span>
                : null
              }
              <li><a href={project.githubUrl} >Github Repo</a></li>
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
