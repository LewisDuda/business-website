import Header from "../components/layout/Header"
import Footer from "../components/layout/Footer"
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const Privacy: React.FC = () => {
    const header_position = 'relative'
    const location = useLocation();

    useEffect(() => {
        const target = document.querySelector(location.hash);
        if (target) {
            target.scrollIntoView();
        }
    }, [location]);

    return (
        <div id='privacy' className="bg-primary w-full h-max font-playfair">
            <Header header_position={header_position} />
            <div className="flex flex-col justify-centerr px-56 pb-48">
                <h1 className="text-center text-5xl text-tertiary my-20">Privacy Policy</h1>
                <h2 className="text-fourth text-lg font-semibold py-5">WHO WE ARE</h2>
                <p className="text-tertiary text-lg pb-10">
                    At lewisduda.github.io/business-website, we are committed to maintaining the trust and confidence of all visitors to our web site. In particular, we want you to know that lewisduda.github.io/business-website is not in the business of selling, renting or trading email lists with other companies and businesses for marketing purposes.
                    In this Privacy Policy, we’ve provided detailed information on when and why we collect personal information, how we use it, the limited conditions under which we may disclose it to others, and how we keep it secure.
                    We take your privacy seriously and take measures to provide all visitors and users of lewisduda.github.io/business-website with a safe and secure environment.
                </p>
                <h2 className="text-fourth text-lg font-semibold py-5">COOKIES</h2>
                <p className="text-tertiary text-lg pb-10">
                    lewisduda.github.io/business-website may set and access lewisduda.github.io/business-website cookies on your computer. Cookies are used to provide our system with the basic information to provide the services you are requesting. Cookies can be cleared at any time from your internet browser settings.
                </p>
                <h2 className="text-fourth text-lg font-semibold py-5">GOOGLE ANALYTICS</h2>
                <p className="text-tertiary text-lg pb-10">
                    When someone visits lewisduda.github.io/business-website we use a third party service, Google Analytics, to collect standard internet log information and details of visitor behaviour patterns. We do this to track things such as the number of visitors to the various parts of the site and interactions with the site. This information is processed in a way which does not identify anyone. We do not make, and do not allow Google to make, any attempt to find out the identities of visitors to our website.
                </p>
                <h2 className="text-fourth text-lg font-semibold py-5">WEBSITE COMMENTS</h2>
                <p className="text-tertiary text-lg pb-10">
                    When someone visits lewisduda.github.io/business-website, there may be an ability to submit comments on particular articles or pages. When comments are submitted, you are entitled to use aliases or information that completely hides your identity. When a comment is submitted, the relevant details (name, email, website) that you provide are stored. These details are stored so that we can display your comment back to you, and to anyone viewing the comment sections on the site. We do not verify information entered nor do we require verification.
                </p>
                <h2 className="text-fourth text-lg font-semibold py-5">THIRD PARTIES</h2>
                <p className="text-tertiary text-lg pb-10">
                    There may be some circumstances where your IP address, geographic location, and other browser related details may be shared with third party companies. We may share your above mentioned data with following third party companies from time to time.
                </p>
                <h2 className="text-fourth text-lg font-semibold py-5">ACCESS TO PERSONAL INFORMATION</h2>
                <p className="text-tertiary text-lg pb-10">
                    You are entitled to view, amend, or delete the personal information that we hold. Email your request to our data protection officer Beanology at beanology@mail.com and we will work with you to remove any of your personal data we may have.
                </p>
                <h2 className="text-fourth text-lg font-semibold py-5">CHANGES TO OUR POLICY</h2>
                <p className="text-tertiary text-lg pb-10">
                    We may make changes to our Privacy Policy in the future, however, the most current version of the policy will govern our processing of your personal data and will always be available to you.
                    If we make a change to this policy that, in our sole discretion, is material, we will notify you by an update or email, where possible. By continuing to access or use our services, you agree to be bound to the terms of our Privacy Policy.
                </p>
            </div>
            <Footer />
        </div>
    )

}

export default Privacy