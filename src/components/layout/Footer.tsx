import { Link } from "react-router-dom"

const Footer: React.FC = () => {
    return (
        <>
            <div className="flex flex-col justify-center items-center h-72 w-full bg-tertiary text-primary ">
                <div className="w-3/12 flex justify-center items-center border-b border-b-primary pb-4">
                    <Link to='/' className="relative text-xl after:content[''] after:absolute after:inset-x-1/2 after:border-b after:border-b-primary after:-bottom-1 after:duration-300 hover:after:inset-x-0 hover:after:border-b-primary">Coffee</Link>
                    <p className="mx-5 text-xs">◆</p>
                    <Link to='/' className="relative text-xl after:content[''] after:absolute after:inset-x-1/2 after:border-b after:border-b-primary after:-bottom-1 after:duration-300 hover:after:inset-x-0 hover:after:border-b-primary">Story</Link>
                    <p className="mx-5 text-xs">◆</p>
                    <Link to='/' className="relative text-xl after:content[''] after:absolute after:inset-x-1/2 after:border-b after:border-b-primary after:-bottom-1 after:duration-300 hover:after:inset-x-0 hover:after:border-b-primary">Café</Link>
                    <p className="mx-5 text-xs">◆</p>
                    <Link to='/' className="relative text-xl after:content[''] after:absolute after:inset-x-1/2 after:border-b after:border-b-primary after:-bottom-1 after:duration-300 hover:after:inset-x-0 hover:after:border-b-primary">Contact us</Link>
                </div>
                <div className="w-3/12 flex justify-center items-center border-b border-b-primary py-4">
                    <Link to='/' className="relative text-xl after:content[''] after:absolute after:inset-x-1/2 after:border-b after:border-b-primary after:-bottom-1 after:duration-300 hover:after:inset-x-0 hover:after:border-b-primary">Member Entrance</Link>
                </div>
                <div className="w-3/12 flex justify-center items-center pt-4">
                    <Link to='/' className="relative mr-10 after:content[''] after:absolute after:inset-x-1/2 after:border-b after:border-b-primary after:-bottom-1 after:duration-300 hover:after:inset-x-0 hover:after:border-b-primary">FACEBOOK</Link>
                    <Link to='/' className="relative after:content[''] after:absolute after:inset-x-1/2 after:border-b after:border-b-primary after:-bottom-1 after:duration-300 hover:after:inset-x-0 hover:after:border-b-primary">INSTAGRAM</Link>
                </div>
            </div>
            <div className="flex justify-between items-center w-full h-max bg-stone-700 text-primary text-sm px-5 py-3">
                <Link to='/privacy#privacy' className="relative after:content[''] after:absolute after:inset-x-1/2 after:border-b after:border-b-primary after:-bottom-1 after:duration-300 hover:after:inset-x-0 hover:after:border-b-primary">Privacy Policy</Link>
                <p>2023 &copy; Beanology</p>
            </div>
        </>
    )
}

export default Footer