import './Header.css';
function Header (){
    return (
    <>
    <div className='header'>
        <div className='logo-home'>
<img src={require("../images/Encontralogo.png")} alt="" className='image'></img>
<div className='home-style'><p> Home</p></div>
        </div>
        <div className='others'>
        <p>Perdi</p>
<p>Encontrei</p>
        
<div className='perfil'>  </div>
        </div>
    </div>
    </>
    );
}
export default Header;