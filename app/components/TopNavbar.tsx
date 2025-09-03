export default function TopNavbar() {
    return (
        <header className="topbar">
            <button className="menu-toggle" id="menuToggle">☰</button>

            <div className="search-box">
                <input type="text" className="search-input" placeholder="Search documentation..." />
                <span className="search-icon">🔍</span>
            </div>

            {/* <div>
                    <a href="#" className="btn">Download PDF</a>
                </div> */}
        </header>
    );
}
