import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import about1 from '../Images/about1.jpg';

const About=(props)=>{
    return(
        <>
        <div className="container">
            <div className="row">
            <div className="col-md-6 my-5">
            <h1 className="text-center mt-2 ">About Us</h1>
            <p>We are the Royal Academy of Dance, a world leader in dance education and training. We’ve been teaching the world to dance for over 100 years and believe passionately in its power to transform lives for the better. Through an international network of dance teachers, we support and connect a global community of more than 400,000 students, and dancers of all ages and abilities, in more than 80 countries.</p>
            <p>I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me and you can start adding your own content and make changes to the font. Feel free to drag and drop me anywhere you like on your page. I’m a great place for you to tell a story and let your users know a little more about you.

This is a great space to write long text about your company and your services. You can use this space to go into a little more detail about your company. Talk about your team and what services you provide. Tell your visitors the story of how you came up with the idea for your business and what makes you different from your competitors. Make your company stand out and show your visitors who you are.
</p>
</div>
<div className="col-md-6 mt-5 pt-5 text-right">
    <img src={about1} alt="" className="w-100 pt-5 "/>

</div>
</div>
</div>

    <div className="container">
    <h1 className="text-center mt-2">Our History</h1>
    <p className="para1">Today, one almost can’t turn on the TV or radio, or open a newspaper, magazine, or web page without hearing a mention of Mr. Fred Astaire in reference to dancing. He has left a lasting impact on the world and when people think of a dancing legend, Fred Astaire is the first to come to mind. We are proud of our great dance heritage which began in 1947 when the Master of dance himself, Mr. Fred Astaire, co-founded our company.</p>
</div>

</>
    )

}

export default About;