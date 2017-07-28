var photoCount = 26 // Count for documentarian
var type = 'documentarian'
if (window.location.pathname.replace(/\.html$/, '').includes('artist')) {
  type = 'artist'
  photoCount = 37
}

class Photos extends React.Component {
  componentDidMount() {
    const lazyLoad = new LazyLoad()
  }

  renderChildren() {
    let photos = new Array(photoCount).fill('')
    return photos.map((photo, i)=> {
      return (<ArtistPhoto type={type} photoNum={++i} key={i}/>)
    })
  }

  render() {
    return (
      <div>
        {this.renderChildren()}
      </div>
    )
  }
}

class ArtistPhoto extends React.Component {
  render() {
    let type = this.props.type
    let originalUrl = `https://s3.amazonaws.com/jgo/${type}/${this.props.photoNum}.jpg`
    let loadingFile = 'loading'
    if (type == 'artist')
      loadingFile += '-black.gif'
    else
      loadingFile += '.gif'
    let loadingUrl = `https://s3.amazonaws.com/jgo/${type}/${loadingFile}`
    return ( <img data-original={originalUrl}  src={loadingUrl}/> )
  }
}

ReactDOM.render(
  <Photos />,
  document.getElementById(type)
)
