const navbar = (
    <div>
         <nav>
            <h1>About me</h1>
            <ol>
                <li>My name is Fatima Iqbal</li>
                <li>I am 20 years old</li>
                <li>I am doing BSSE</li>
                <li>I am studying in comsats University</li>
            </ol>
        </nav>
        <section>
            <h1>Detailed info</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum eaque facilis rerum atque at autem!Lorem ipsum dolor sit.</p>
        </section>
    </div>
   
    
)

//document.getElementById("root").append(JSON.stringify(navbar))
//console.log(navbar)

ReactDOM.render(
    navbar, document.getElementById("root")
)