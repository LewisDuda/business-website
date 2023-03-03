import StoryImg from '../../../assets/home_story.jpg'
import Sunrise_icon from '../../../assets/sunrise_icon.svg'
import { Link } from 'react-router-dom'


const Story: React.FC = () => {
    return (
        <>
            <div className='w-full h-5/6'>
                <div className='relative w-full h-full overflow-hidden'>
                    <img className='w-full align-middle' src={StoryImg} alt="" />
                    <div className='flex justify-center items-center absolute top-24 right-40 w-3/12 h-3/4 bg-primary'>
                        <div className='border border-fourth p-2 m-4'>
                            <div className='flex flex-col justify-center items-center border border-fourth px-10 py-8'>
                                <h2 className='text-xl font-medium text-fourth pb-10'>Farm to Cup</h2>
                                <p className='text-center font-extralight w-full text-tertiary'>
                                    The coffee beans used at Beanology come from excellent coffee farms around the world. We have established long-term partnerships with these farmers and emphasize sustainable cultivation methods, which allow farmers to live and work in a better environment while producing high-quality coffee beans. We respect the hard work of farmers and insist on using only the best coffee beans, so that you can enjoy the best coffee taste. Every cup of coffee at Beanology contains the hard work and sweat of farmers, allowing you to not only enjoy delicious coffee, but also feel the power of loving life.
                                </p>
                                <Link className='text-fourth border border-fourth rounded-lg mt-7 px-3 py-2 transition-all duration-300 hover:border-secondary hover:bg-secondary hover:text-primary' to='/'>Explore further</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex flex-col justify-center items-center w-full h-2/6 bg-primary'>
                <img className=' w-20 align-middle' src={Sunrise_icon} alt="" />
                <p className=' text-4xl text-secondary mt-10'>Indulge in Life's Brew</p>
                <p className='text-xl text-fourth mt-8 font-bold'>COFFEE & LIFE</p>
            </div>
        </>
    )
}

export default Story