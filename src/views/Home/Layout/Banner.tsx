import BannerImg from '../../../assets/banner.jpg'
import { Link } from 'react-router-dom'

const Banner: React.FC = () => {
    return (
        <div className="flex justify-center items-center bg-primary w-full h-full">
            <div className="w-1/2 h-screen overflow-hidden">
                <img className="w-full align-middle" src={BannerImg} alt="" />
            </div>
            <div className="flex flex-col justify-center items-start w-1/2 h-screen ">
                <h2 className='text-5xl text-secondary -ml-28 mt-48 tracking-wider font-bold'>HOPE IN EVERY AROMA.<br />PRROMISE IN EVERY CUP.</h2>
                <div className='group ml-36 mt-28 relative flex items-center cursor-pointer'>
                    <Link to='/about' className='text-2xl text-secondary font-light  transition-all duration-300 group-hover:text-fourth'>PREMIUM ROASTING
                    </Link>
                    <span className="h-px w-14 ml-6 bg-secondary transition-all duration-300 group-hover:w-24 group-hover:bg-fourth"></span>
                </div>
            </div>
        </div>
    )
}

export default Banner;