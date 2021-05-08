import React, { Fragment } from 'react';
import Navigation from '../Navigation/Navigation';
import HomeBanner from '../HomeBanner/HomeBanner';
import BlogPosts from '../BlogPosts/BlogPosts';
import LaunchBanner from '../LaunchBanner/LaunchBanner';
import LaunchProgram from '../LaunchProgram/LaunchProgram';
import StepContainer from '../StepContainer/StepContainer';
import Guide from '../Guide/Guide';
import Footer from '../Footer/Footer';
import { 
  headerText, 
  topParaText, 
  bannerLink1, 
  bannerLink2, 
  blogHeader, 
  blogPara1, 
  blogHeader1, 
  testimonial, 
  authorName, 
  blogPara2,
  launchProgramHeader,
  launchProgramText
 } from '../../constants/text';

const Home = () => {
  const blogObj = {};
  blogObj.Header = blogHeader;
  blogObj.Para1 = blogPara1;
  blogObj.Header1 =  blogHeader1;
  blogObj.testimonial = testimonial;
  blogObj.author = authorName;
  blogObj.blogPara2 = blogPara2;

  return (
    <Fragment>
      <Navigation />
      <HomeBanner 
        header={headerText} 
        paragraph={topParaText}
        developLink={bannerLink1}
        downloadLink={bannerLink2}
         />
         <BlogPosts blogObj={blogObj} />
         <LaunchBanner />
         <LaunchProgram header={launchProgramHeader} paragraph={launchProgramText} />
         <StepContainer />
         <Guide />
         <Footer />
    </Fragment>
  )

}

export default Home;