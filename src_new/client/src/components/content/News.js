import React from 'react';

function scroll() {
    window.scrollTo(0,0);
}

const News = () => {

    return (
        <div>
            <div className="leftcolumn">
                <div className="article">
                <h2>Covid19 News</h2>
                <p><a href="https://www.nih.gov/news-events/news-releases/nih-funded-tool-helps-organizations-plan-covid-19-testing">NIH-funded tool helps organizations plan COVID-19 testing</a></p>
                <img src={require('../../asset/news/co1.jpg')} alt={"covid19 pic"} style={{height:"200px;"}} />
                <p>It can be an enormous challenge for schools and businesses to determine how to establish an effective COVID-19 testing program, particularly with the multiple testing options now on the market. An innovative online tool funded by the National Institute of Biomedical Imaging and Bioengineering (NIBIB), part of the National Institutes of Health, helps organizations choose a COVID-19 testing strategy that will work best for their specific needs. The COVID-19 Testing Impact Calculator is a free resource that shows how different approaches to testing and other mitigation measures, such as mask use, can curb the spread of the virus in any organization. It is the first online tool in the nation to provide schools and businesses with clear guidance on risk-reducing behaviors and testing to help them stay open safely.
                </p>
                </div>
                <div className="article">
                    <p><a href="https://www.nih.gov/news-events/news-releases/high-dose-influenza-vaccine-shows-no-additional-benefit-heart-disease-patients">High-dose influenza vaccine shows no additional benefit for heart disease patients</a></p>
                    <img src={require('../../asset/news/vaccine.jpg')} alt={"covid19 vaccine"} style={{height:"500px;"}} />
                    <p>High-dose influenza (commonly known as flu) vaccines are no better than regular-dose influenza vaccines in reducing deaths and hospitalizations among patients with underlying heart disease, according to a large study publishing in JAMA. The results do not change well-established findings about the value of an annual influenza vaccine for persons with heart disease and other chronic illnesses, and do not change the recommendation for an annual influenza vaccine for most people. 

                The study was funded by the National Heart, Lung, and Blood Institute (NHLBI), part of the National Institutes of Health, and appears online on December 4.</p>
                </div>
            </div>


            <div className="rightcolumn">
                <div className="article">
                    <h2>Social Media</h2>
                    <img src={require('../../asset/news/social.jpeg')} alt={"covid19 social media"} style={{height:"300px; width:500px"}} />
                    <div>
                        <span style={{textAlign: 'left'}}><img src={require('../../asset/news/twitter.png')} alt={"covid19 twitter icon"} style={{height:"15%", width:"15%"}} /> </span>
                        <span><a href="https://twitter.com/cdcgov?lang=en">twitter cdc</a></span>
                    </div>
                    <div>
                        <span style={{textAlign: 'left'}}><img src={require('../../asset/news/facebook.png')} alt={"covid19 facebook icon"} style={{height:"15%", width:"15%"}} /> </span>
                        <span><a href="https://www.facebook.com/CDC">facebook cdc</a></span>
                    </div>
                    <div>
                        <span style={{textAlign: 'left'}}><img src={require('../../asset/news/instragram.png')} alt={"covid19 instragram icon"} style={{height:"15%", width:"15%"}} /> </span>
                        <span><a href="https://www.instagram.com/cdcgov/?hl=en">instragram cdc</a></span>
                    </div>
                    <div>
                        <span style={{textAlign: 'left'}}><img src={require('../../asset/news/youtube.png')} alt={"covid19 youtube icon"} style={{height:"15%", width:"15%"}} /> </span>
                        <span><a href="https://www.youtube.com/user/CDCstreamingHealth">youtube cdc</a></span>
                    </div>
                </div>
                <div className="article">
                    <h3>Videos</h3>
                    <p><a href="https://www.youtube.com/watch?v=Jr2DbSqcM7I">Covid-19 questions and answers</a></p>
            <p><a href="https://www.youtube.com/watch?v=-tqtUwNYUtE">I wear a mask</a></p>
            <p><a href="https://www.youtube.com/watch?v=AehXDS79a-4">Protect yourself and others</a></p>
                </div>
                <div className="article">
                    <h3>Contact Us</h3>
                    <span>Email: co-vida@gmail.com</span>
                    <button onClick={() =>  navigator.clipboard.writeText('Email: co-vida@gmail.com')}>copy</button>
                    <br></br>
                    <span>Phone number: 888-332-1096</span>
                    <button onClick={() =>  navigator.clipboard.writeText('Phone number: 888-332-1096')}>copy</button>
                </div>
            </div>
            <button onClick={scroll} id="mybtn">Top</button>
        </div>
    );
};

export default News;
