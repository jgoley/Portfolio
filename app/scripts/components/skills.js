class Skills extends React.Component {
  render() {
    return (
      <div className='skills'>
        <h1>Skills</h1>
        <p>
          <span>[</span>
          <span> { this.props.skills.join(", ") } </span>
          <span>]</span>
        </p>
      </div>
    )
  }
}
