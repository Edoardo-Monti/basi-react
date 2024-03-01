function MainContent(){
    return(
        <p>Questo è il componente main</p>
    );
}


ReactDOM.render(
<div>
    <h1>NavBar</h1>
    <MainContent/>
</div>,
document.getElementById("root"))