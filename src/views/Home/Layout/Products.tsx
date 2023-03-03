import Cinnamon_12oz from '../../../assets/green_12oz.png'
import Medium_12oz from '../../../assets/white_12oz.png'
import City_12oz from '../../../assets/orange_12oz.png'
import French_12oz from '../../../assets/blue_12oz.png'

import { Link } from 'react-router-dom'


const Products: React.FC = () => {
    return (
        <div className="flex flex-col justify-center items-center w-full h-full pt-44 bg-primary">
            <h2 className="text-center w-5/12 px-14 pb-32 text-3xl font-bold text-tertiary">
                Delicious coffee starts with quality beans. Come and taste Beanology's selected coffee beans.
            </h2>
            <section className='w-2/3 flex justify-center items-center pb-44'>
                <Link to='/' className='flex flex-col justify-center items-center w-1/4 h-full py-14 transition-all duration-300 hover:bg-green-50'>
                    <div className='w-4/5 overflow-hidden '>
                        <img className='w-full ml-10 align-middle' src={Cinnamon_12oz} alt="" />
                    </div>
                    <div className='flex flex-col justify-center items-center mt-6 text-fourth'>
                        <p className="font-semibold">Cinnamon Roast</p>
                        <p className='mt-2 font-thin'>$27 - $52</p>
                    </div>
                </Link>
                <Link to='/' className='flex flex-col justify-center items-center w-1/4 h-full py-14 transition-all duration-300 hover:bg-slate-50'>
                    <div className='w-4/5 overflow-hidden '>
                        <img className='w-full ml-10 align-middle' src={Medium_12oz} alt="" />
                    </div>
                    <div className='flex flex-col justify-center items-center mt-6 text-fourth'>
                        <p className="font-semibold">Medium Roast</p>
                        <p className='mt-2 font-thin'>$27 - $52</p>
                    </div>
                </Link>
                <Link to='/' className='flex flex-col justify-center items-center w-1/4 h-full py-14 transition-all duration-300 hover:bg-orange-50'>
                    <div className='w-4/5 overflow-hidden '>
                        <img className='w-full ml-10 align-middle' src={City_12oz} alt="" />
                    </div>
                    <div className='flex flex-col justify-center items-center mt-6 text-fourth'>
                        <p className="font-semibold">City Roast</p>
                        <p className='mt-2 font-thin'>$27 - $52</p>
                    </div>
                </Link>
                <Link to='/' className='flex flex-col justify-center items-center w-1/4 h-full py-14 transition-all duration-300 hover:bg-blue-50'>
                    <div className='w-4/5 overflow-hidden '>
                        <img className='w-full ml-10 align-middle' src={French_12oz} alt="" />
                    </div>
                    <div className='flex flex-col justify-center items-center mt-6 text-fourth'>
                        <p className="font-semibold">French Roast</p>
                        <p className='mt-2 font-thin'>$27 - $52</p>
                    </div>
                </Link>
            </section>
        </div>
    )
}

export default Products