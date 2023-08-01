export default function Header(){
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

//import Header from ./Header