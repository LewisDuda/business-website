import Logo from '../../../assets/logo2.svg'

const Center: React.FC = () => {
    return (
        <div className="flex flex-col justify-center items-center h-3/5 w-full bg-tertiary">
            <div className='h-36'>
                <img className='h-full' src={Logo} alt="" />
            </div>
            <div className='flex flex-col justify-center items-center w-7/12 text-primary  text-center mt-10'>
                <p>
                    Beanology is a coffee shop that focuses on the quality and taste of coffee beans. We carefully select high-quality coffee beans from around the world and use precision roasting techniques to bring out the best flavor in every cup of coffee.
                </p>
                <hr className="my-16 border border-secondary w-1/6"></hr>
                <p>
                    Whether you prefer dark or light roast, or enjoy adding different flavored syrups or frothed milk, Beanology can satisfy your taste. Let Beanology be your daily coffee companion and enjoy the good times with coffee.
                </p>
            </div>
        </div>
    )
}

export default Center