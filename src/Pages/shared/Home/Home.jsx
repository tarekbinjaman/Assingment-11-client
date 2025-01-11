import { Helmet } from "react-helmet-async";
import Features from "../../../Components/Features";
import Banner from "../../../Components/Banner";
import TotalCountUP from "../../../Components/TotalCountUP";
import MeetOurPartner from "../../../Components/MeetOurPartner";
import WhyUs from "../../../Components/WhyUs";
import ContactUs from "../../../Components/ContactUs";


const Home = () => {
    return (
        <div className=''>
            <Helmet>
                <title>Home</title>
            </Helmet>
            <Banner></Banner>
            <TotalCountUP></TotalCountUP>
            <Features></Features>
            <MeetOurPartner></MeetOurPartner>
            <WhyUs></WhyUs>
            <ContactUs></ContactUs>
        </div>
    );
};

export default Home;
