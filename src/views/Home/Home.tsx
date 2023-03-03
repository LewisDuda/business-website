import Header from '../../components/layout/Header'
import Banner from './Layout/Banner'
import Center from './Layout/Center'
import Products from './Layout/Products'
import Story from './Layout/Story'
import Footer from '../../components/layout/Footer'

const Home: React.FC = () => {
    const header_position = 'absolute top-0'
    return (
        <div className='h-screen font-playfair'>
            <Header header_position={header_position} />
            <Banner />
            <Center />
            <Products />
            <Story />
            <Footer />
        </div>
    )
}

export default Home