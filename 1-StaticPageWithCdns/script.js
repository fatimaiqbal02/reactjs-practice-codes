/* -------------------------------------- 1 ----------------------------------
ReactDOM.render(<h1>I am Fatima Iqbal</h1>, document.getElementById("root"))
*/


/* -------------------------------------- 2 ----------------------------------
ReactDOM.render(
    <ul><li>Home</li><li>About</li><li>Gallery</li></ul>,
    document.getElementById("root")
) 
*/

/* -------------------------------------- 3 ---------------------------------- 
ReactDOM.render(
    <div>
        <h1>React Tutorial 1</h1>
        <ul><li>Home</li><li>About</li><li>Gallery</li></ul>
    </div>,
    document.getElementById("root")
) 
*/

/* -------------------------------------- 4 ----------------------------------
function NavBar(){
    return (
        <div>
            <h1>React Tutorial 1</h1>
            <ul><li>Home</li><li>About</li><li>Gallery</li></ul>
        </div>
    )
}

function MainContent(){
    return (
        <div>
            <h4>I am learning React</h4>
            <p>This is main content of the page</p>
        </div>
    )
}

ReactDOM.render(
    <div>
        <NavBar />
        <MainContent />
    </div>,
    document.getElementById("root")
)
*/

/* -------------------------------------- 5 ----------------------------------
const h3 = document.createElement("h3")
h3.className = "myheading"
h3.textContent = "This is an imperative way to write code (without writing inner html)"
document.getElementById("root").append(h3)


ReactDOM.render(
    <h3 className="myheading">This is an declarative way to write code (with inner html)</h3>,
    document.getElementById("root")
)
*/

/* -------------------------------------- 6 ----------------------------------
const navbar = (
    <nav>
        <h1>Fatima</h1>
        <ul>
            <li>Home</li>
            <li>About</li>
            <li>Gallery</li>
        </ul>
    </nav>
)

ReactDOM.render(
    navbar, document.getElementById("root")
)
*/
