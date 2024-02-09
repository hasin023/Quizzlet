import ReactLogo from '../assets/logo512.png'

function Header() {
    return (
        <header className='flex items-center justify-between w-auto mb-16 '>
            <img src={ReactLogo} alt='React Logo' className='h-28 w-28' />
            <h1>The React Quiz</h1>
        </header>
    )
}

export default Header
