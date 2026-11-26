export default function Header({ dark, onToggleTheme }) {
    return (
    <header>
        <div className="nav">
        <a className="brand" href="#main">
            <span className="mark" aria-hidden="true">
            ↗
            </span>{" "}
            onepath<span className="dot">.</span>
        </a>

    <div className="nav-right">
    

        <button
            className="secondary theme"
            onClick={onToggleTheme}
            aria-label={dark ? "Switch to light theme" : "Switch to dark theme"}
        >
            {dark ? "☀ Light" : "☾ Dark"}
        </button>
        </div>
    </div>
    </header>
    );
}
