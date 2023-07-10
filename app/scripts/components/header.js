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

const HeaderNav = () => {
  let navItems = [
    { url: "web-developer.html", pageTitle: "Web Developer" },
    { url: "photographer/", pageTitle: "Photographer" },
    { url: "videographer.html", pageTitle: "Videographer" },
    { url: "designer.html", pageTitle: "Designer" },
  ];

  if (getPagePath() !== "/") return null;

  return (
    <nav id="main-nav">
      <button class="show-menu"></button>
      <ul>
        {navItems.map((item) => (
          <HeaderNavItem item={item} />
        ))}
        <li className="exit" />
      </ul>
    </nav>
  );
};

const Header = () => {
  return (
    <header id="main-header">
      <a href="/">
        <span class="badge"></span>
      </a>
      <a href="/">
        <h1 class="jgo-name">Jonathan Golightly</h1>
      </a>
      <HeaderNav />
    </header>
  );
};
