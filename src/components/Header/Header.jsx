import Style from './Header.module.css' 
const Header = () => {
  return (
    <header className={Style.header}>
      <img className={Style.logo} src='https://the-flow.ru/uploads/images/catalog/element/629f20558d8c4.jpg' alt="Logo"></img>
    </header>
  )
}

export default Header;