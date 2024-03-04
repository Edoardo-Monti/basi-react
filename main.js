function Header(){
    return(
        <div className="d-flex align-items-center justify-content-between">
            <h1>Motivi per la quale voglio imparare react</h1>
            <ul className="d-flex align-items-center">
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </div>
    )
}

function MainContent(){
    return(
        <ol>
            <li>imparare un nuovo linguaggio</li>
            <li>iniziare a lavorare il prima possibile</li>
            <li>react è molto richiesto</li>
        </ol>
    )
}
function MyApp(){
    return (
        <div>
            <Header/>
            <MainContent/>
            <Footer/>
        </div>
    )
} 

function Footer(){
    return(
        <p>Questo è il mio footer</p>
    )
}
ReactDOM.render(<MyApp/>, document.getElementById("root"))