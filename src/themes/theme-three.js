import React, { Component } from 'react';

import Header from '../components/HeaderSection/Header';
import HeroSection from '../components/HeroSection/HeroThree';
import Cards from '../components/Features/FeatureOne';
import FeatureSection from '../components/Features/FeatureFour';
import ServiceSection from '../components/ServiceSection/ServiceThree';
import DiscoverSection from '../components/DiscoverSection/DiscoverThree';
import Work from '../components/WorkSection/Work';
import ReviewSection from '../components/ReviewSection/ReviewOne';
import PricingSection from '../components/PricingSection/PricingTwo';
import Download from '../components/DownloadSection/Download';
import Subscribe from '../components/SubscribeSection/Subscribe';
import ContactSection from '../components/ContactSection/Contact';
import FooterSection from '../components/FooterSection/Footer';

class ThemeThree extends Component {
    render() {
        return (
            <div className="homepage-3">
                {/*====== Scroll To Top Area Start ======*/}
                <div id="scrollUp" title="Scroll To Top">
                    <i className="fas fa-arrow-up" />
                </div>
                {/*====== Scroll To Top Area End ======*/}
                <div className="main">
                    <Header imageData={"/img/farmkitlogo.png"} otherImage={"/img/farmkitlogoblack.png"}/>
                    <HeroSection />
                    <Cards/>
                    <FeatureSection />
                    <Work />
                    <ServiceSection />
                    <DiscoverSection />
                    <ReviewSection />
                    <PricingSection />
                    <Subscribe />
                    <Download />
                    <ContactSection />
                    <FooterSection />
                </div>
            </div>
        );
    }
}

export default ThemeThree;