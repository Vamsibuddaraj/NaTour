import "./header.scss"
const Header = () => {
  return (
    <header>
        <div className="header-box">
            <h1 className="header-content">
                <span id="main">Outdoors</span><span id="sub">is where life happens</span>
            </h1>
            <div className="header-btn">
              <a href="#" className="btn">Discover our tour</a>
            </div>
        </div>
    </header>
  )
}

export default Header