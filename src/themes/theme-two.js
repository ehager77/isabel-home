import React, { Component } from 'react';

import Header from '../components/HeaderSection/Header';
import HeroSection from '../components/HeroSection/HeroTwo';
import WhatWeGrowSection from '../components/Features/FeatureTwo';
import AboutSection from '../components/Features/FeatureOne';
import ServiceSection from '../components/ServiceSection/ServiceThree';
import DiscoverSection from '../components/DiscoverSection/DiscoverThree';
import Work from '../components/WorkSection/Work';
import ScreenshotSection from '../components/ScreenshotSection/ScreenshotsTwo';
import ReviewSection from '../components/ReviewSection/ReviewTwo';
import PricingSection from '../components/PricingSection/PricingOne';
import FaqSection from '../components/FaqSection/FaqTwo';
import Download from '../components/DownloadSection/Download';
import Subscribe from '../components/SubscribeSection/Subscribe';
import ContactSection from '../components/ContactSection/Contact';
import FooterSection from '../components/FooterSection/Footer';

class ThemeTwo extends Component {
    render() {
        return (
            <div className="homepage-2">
                {/*====== Scroll To Top Area Start ======*/}
                <div id="scrollUp" title="Scroll To Top">
                    <i className="fas fa-arrow-up" />
                </div>
                {/*====== Scroll To Top Area End ======*/}
                <div className="main">
                    <Header imageData={"/img/isabellogov3.png"} />
                    <HeroSection />
                    <AboutSection/>
                    <WhatWeGrowSection />
                    <DiscoverSection />
                    <ServiceSection />
                    <Work />
                    <ScreenshotSection />
                    <ReviewSection />
                    <PricingSection />
                    <FaqSection />
                    <Download />
                    <Subscribe />
                    <ContactSection />
                    <FooterSection />
                </div>
            </div>
        );
    }
}

export default ThemeTwo;