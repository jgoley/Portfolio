class SocialNavItem extends React.Component {
  render() {
    let item = this.props.item;
    return (
      <li>
        <a href={item.url} title={item.title}>
          <i className={`fa fa-${item.icon}`}></i>
        </a>
      </li>
    );
  }
}

class SocialNav extends React.Component {
  renderChildren() {
    let children = [];
    let childrenData = [
      { url: "mailto:jkgolight@gmail.com", title: "Email", icon: "envelope" },
      {
        url: "https://github.com/jgoley",
        title: "Github",
        icon: "github-square",
      },
      {
        url: "https://twitter.com/jgoley",
        title: "Twitter",
        icon: "twitter-square",
      },
      {
        url: "https://www.linkedin.com/in/jgoley/",
        title: "LinkedIn",
        icon: "linkedin-square",
      },
    ];
    childrenData.forEach((link) => {
      children.push(<SocialNavItem item={link} />);
    });
    return children;
  }

  render() {
    return [
      <a href="/about.html">About J.Go</a>,
      <ul>{this.renderChildren()}</ul>,
    ];
  }
}
