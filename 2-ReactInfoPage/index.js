function Header(){
    return (
        <header>
            <nav>
                <img className="logo" src="./React-icon.svg.png" alt=""/>
                <ul className= "nav-items">
                    <li>Pricing</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
             </nav>
        </header>
    )
}

function MainContent(){
    return (
        <div className="mainsec">
        <h1>Fun Facts About React</h1>
        <ul>
            <li>Was first released in 2013</li>
            <li>Was originally created by Jordan Walke</li>
            <li>Has well over 100K stars on GitHub</li>
            <li>Is maintained by Facebook</li>
            <li>Powers thousands of enterprise apps, including mobile apps</li>
        </ul>
        </div>
    )
}

function Footer(){
    return (
        <footer>
            <p>© 2023 Fatima Iqbal development. All rights reserved</p>
        </footer>
    )
}

function Page(){
    return (
    <div>
        <Header />
        <MainContent />
        <Footer />
    </div>
    )
}
ReactDOM.render(
    <Page />,
    document.getElementById("root")
)
