import Logo from '../../assets/logo.svg'
import { Link } from 'react-router-dom'

interface Props {
    header_position: string
}

const Header: React.FC<Props> = ({ header_position }) => {
    return (
        <header className={`flex items-center justify-center w-full h-36 ${header_position}`}>
            <Link className="absolute h-full" to="/" >
                <img className="h-full align-middle" src={Logo} alt="" />
            </Link>
            <nav className="flex m-auto  font-bold text-2xl text-secondary [&>*:nth-child(3)]:ml-56">
                <Link className="relative px-2 mx-10 after:content[''] after:absolute after:inset-x-1/2 after:border-b after:border-b-secondary after:-bottom-2 after:duration-300 hover:after:inset-x-0 hover:after:border-b-fourth hover:text-fourth" to="/">Coffee</Link>
                <Link className="relative px-2 mx-10 after:content[''] after:absolute after:inset-x-1/2 after:border-b after:border-b-secondary after:-bottom-2 after:duration-300 hover:after:inset-x-0 hover:after:border-b-fourth  hover:text-fourth" to="/about">Story</Link>
                <Link className="relative px-2 mx-10 after:content[''] after:absolute after:inset-x-1/2 after:border-b after:border-b-secondary after:-bottom-2 after:duration-300 hover:after:inset-x-0 hover:after:border-b-fourth  hover:text-fourth" to="/"> Café</Link>
                <Link className="relative px-2 mx-10 after:content[''] after:absolute after:inset-x-1/2 after:border-b after:border-b-secondary after:-bottom-2 after:duration-300 hover:after:inset-x-0 hover:after:border-b-fourth  hover:text-fourth" to="/">Bag</Link>
            </nav>
        </header>
        // <header className="bg-red-700 w-full h-full">
        //     {/* <img src={logo} alt="" /> */}
        //     <div className="w-6/12 h-screen
        //     bg-orange-500 overflow-hidden">
        //         <img className="align-middle w-full" src={photo} alt="" />
        //     </div>
        // </header>
    )
}

export default Header