

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
