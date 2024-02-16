
import { Footer } from '../../layouts/footer';
import { Header } from '../../layouts/header';
import { FifthSection } from './components/fifthSection';
import { FirstSection } from './components/firstSection';
import { FourthSection } from './components/fourthSection';
import { SecondSection } from './components/secondSection';
import { SixthSection } from './components/sixthSection';
import { ThirdSection } from './components/thirdSection';
export const HomePage = () => {
    return (
        <>  
            <Header/>
            <FirstSection/>
            <SecondSection/>
            <ThirdSection/>
            <FourthSection/>
            <FifthSection/>
            <SixthSection/>
            <Footer/>
        </>
    );
}
