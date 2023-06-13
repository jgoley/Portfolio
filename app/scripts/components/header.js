class HeaderNavItem extends React.Component {
  isActive(url) {
    let path = getPagePath();
    let title = this.props.item.pageTitle.replace(" ", "-").toLowerCase();
    if (path.includes(title)) {
      return "active";
    } else return "";
  }

  relativePath() {
    let path = getPagePath();
    let relativePath = "";
    path = path.match(/\//g);
    if (typeof path === "object" && path.length > 1) path.pop();
    path.forEach(() => (relativePath += "../"));
    return (relativePath += this.props.item.url);
  }

  render() {
    let item = this.props.item;
    return (
      <li className={this.isActive()}>
        <a href={this.relativePath()}>
          <span>{item.pageTitle}</span>
        </a>
      </li>
    );
  }
}

class HeaderNav extends React.Component {
  show() {
    if (getPagePath() !== "/") return true;
    else return false;
  }

  renderChildren() {
    let children = [];
    let navItems = [
      { url: "web-developer.html", pageTitle: "Web Developer" },
      { url: "photographer/", pageTitle: "Photographer" },
      { url: "videographer.html", pageTitle: "Videographer" },
      { url: "designer.html", pageTitle: "Designer" },
    ];
    navItems.forEach((item) => {
      children.push(<HeaderNavItem item={item} />);
    });
    return children;
  }

  render() {
    if (this.show()) {
      return (
        <nav id="main-nav">
          <button class="show-menu"></button>
          <ul>
            {this.renderChildren()}
            <li className="exit" />
          </ul>
        </nav>
      );
    } else return null;
  }
}

class Header extends React.Component {
  render() {
    return [
      <a href="/">
        <span class="badge"></span>
      </a>,
      <a href="/">
        <h1 class="jgo-name">Jonathan Goley</h1>
      </a>,
      <HeaderNav />,
    ];
  }
}
