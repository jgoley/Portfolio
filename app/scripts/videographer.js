var videos = [
  {
    title: 'EcoHealth Alliance\'s public health and environmental programs',
    id: 'g0eruz7ik88',
    description: 'EcoHealth Alliance partners are in Malaysia help the organization study the dynamics of disease economics and deforestation.',
    type: '',
    roles: ['Photography'],
    organization: 'eha'
  },
  {
    title: 'Help Fight Deforestation',
    id: 'F_0qjrE_cxo',
    description: 'Campaign video to encourage donations for EcoHealth Alliance\'s initiatives to fight deforestation.',
    type: '',
    roles: ['Photography', 'Editing'],
    organization: 'eha'
  },
  {
    title: 'One Health Day',
    id: 'yyN3ayAnPw0',
    description: 'EcoHealth Alliance\'s Dr. William Karesh speaks about the origins of "One Health," a concept that sees the health of animals, people and the environment as interconnected.',
    type: '',
    roles: ['Photography', 'Editing'],
    organization: 'eha'
  },

  {
    title: 'Animated promotional video',
    id: 'z8sHKXWXXME',
    description: 'Animated piece communicating the benefits of EcoHealth Alliance\'s Tater application',
    type: '',
    roles: ['Animation', 'Editing'],
    organization: 'eha'
  },
  {
    title: 'Global Wildlife Trade',
    id: 'l3zf1jNWpYQ',
    description: 'Animated piece communicating the hazards and negative effects of global wildlife trade',
    type: '',
    roles: ['Animation', 'Editing'],
    organization: 'eha'
  },
  {
    title: 'Dr. Kevin Olival in Thailand',
    id: 'VEuECvXqSSk',
    description: 'EcoHealth Alliances work in Thailand',
    type: '',
    roles: ['Photography', 'Editing'],
    organization: 'eha'
  },
  {
    title: 'EcoHealth Alliance in China',
    id: 'W7UDHDNwSeI',
    description: 'EcoHealth Alliances work in China',
    type: '',
    roles: ['Photography', 'Editing'],
    organization: 'eha'
  },
  {
    title: 'Plein Air Painting',
    id: 'D2OPcFeKxaU',
    description: 'Local Columbia artist, Stephen Chesley, explains the process of plein air painting',
    type: '',
    roles: ['Photography', 'Editing'],
    organization: 'cma'
  },
  {
    title: 'Shelley Reed — Black & White Pavarte',
    id: 'sJT6o2rWT_A',
    description: 'Artist Shelley Reed explains her artistic process',
    type: '',
    roles: ['Photography', 'Editing'],
    organization: 'cma',
    similar: [
      '4aRRWV8Cc5Y',
      '4qhWthioKNs'
    ]
  },
  {
    title: 'Exhibition Promo',
    id: 'vJS1TaIL90U',
    description: 'CMA Curator, Victoria Cooke explains why Japan and the Jazz Age is a must-see exhibition',
    type: '',
    roles: ['Photography', 'Editing'],
    organization: 'cma'
  },
  {
    title: 'Museum shop merchandise advertisement',
    id: 'Y1lqRp2JhJA',
    description: 'Mike Dwyer, CMA exhibition designer and preparator, talks about the history of kokeshi dolls.',
    type: '',
    roles: ['Photography', 'Editing'],
    organization: 'cma',
    similar: [
      'vVjlxtvZQzI',
      'FJzH3L6_xvA',
      'RL6twgisbOc',
      'MnAJIHF86PI'
    ]
  },
  {
    title: 'Columbia Museum of Art Promo',
    id: '3VlRx03F3RU',
    description: 'Friends of the Columbia Museum of Art and City of Columbia express why life is better with the museum.',
    type: '',
    roles: ['Direction', 'Photography'],
    organization: 'cma',
  },

  {
    title: 'Museum shop merchandise Holiday-themed advertisement',
    id: 'Jc3VXyD8T3Q',
    description: 'Anne Postic (aka The Shop Tart), Columbia freelance writer and blogger, picks out several gifts during her visit to the Museum Shop',
    type: '',
    roles: ['Photography', 'Animation', 'Editing'],
    organization: 'cma',
    similar: [
      'huldI55cUr8',
      'aGNTw5_k88c',
      'MBIu1yb_0qw',
    ]
  },

  {
    title: 'Be The Curator Campaign',
    id: 'lYO6PnY3R6w',
    description: 'Brad Collins and Stacey Millner-Collins explain the importance of the Columbia Museum of Art',
    type: '',
    roles: ['Photography', 'Editing'],
    organization: 'cma',
    similar: [
      '6NYLzjFgFSQ',
      'YGaBlPT3oqw',
      '5l5coM5bt5c',
      'kfwnN--A2pq8'
    ]
  },

]

var skills = ['DSLR Video Capture', 'Premiere', 'After Effects']

class Videographer extends React.Component {
  render() {
    return (
      <div>
        <Skills skills={skills}/>
        <Videos videos={videos} />
      </div>
    )
  }
}

class Videos extends React.Component {
  constructor() {
    super()
    this.state = {
      orgs: ['cma','eha']
    }
  }

  filterVideos(org){
    var orgs = this.state.orgs
    if (this.state.orgs.indexOf(org) === -1)
      orgs.push(org)
    else {
      var index = orgs.indexOf(org)
      orgs.splice(index, 1)
    }
    this.setState({
      orgs: orgs
    })
  }

  renderChildren() {
    var orgs = this.state.orgs
    var children = this.props.videos.map((video, i) => {
      if (orgs.indexOf(video.organization) >= 0) {
        return (<Video video={video} key={i}/>)
      }
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

class SimilarVideos extends React.Component {
  youtubeUrl(id){
    return `https://youtu.be/${id}`
  }
  render() {
    var similarVideos = this.props.videos.map((videoId, key) => {
      return (
        <li key={key}>
          <a href={this.youtubeUrl(videoId)}>
            {this.youtubeUrl(videoId)}
          </a>
        </li>
      )
    })
    return (

      <ul>
        <h3>Similar Videos:</h3>
        {similarVideos}
      </ul>
    )
  }
}


class VideoFilter extends React.Component {
  handle(org) {
    this.props.filterVideos(org)
  }

  isSelected(org) {
    if (this.props.selected.indexOf(org) >= 0)
      return 'selected'
  }

  render() {
    return (
      <ul className='organization-filter'>
        <li className={this.isSelected('eha')} onClick={() => this.handle('eha')}>EHA</li>
        <li className={this.isSelected('cma')} onClick={() => this.handle('cma')}>CMA</li>
      </ul>
    )
  }
}


class Video extends React.Component {
  render() {
    var video = this.props.video
    return (
      <article className='video-wrapper'>
        <iframe
          width="560"
          height="315"
          src={`https://www.youtube.com/embed/${video.id}`}
          allowFullScreen>
        </iframe>
        <div>
          <h1>{video.title}</h1>
          <p>{video.description}</p>
          <p>[ {video.roles.join(' , ')} ] </p>
          {
            video.similar ?
              <SimilarVideos videos={video.similar} />
            : null
          }
        </div>
      </article>
    )
  }
}

ReactDOM.render(
  <Videographer />,
  document.getElementById('videographer')
)
