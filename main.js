function MainContent(){
    return(
        <p>Questo è il componente main</p>
    );
}

function NavBar(){
    return(
        <h1>NavBar</h1>
    )
}

function Footer(){
    return(
        <h3>Footer</h3>
    )
}


ReactDOM.render(
<div>
    <NavBar/>
    <MainContent/>
    <Footer/>
</div>,
document.getElementById("root"))