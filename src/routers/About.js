import React from 'react';
import "./About.css";

/*
    route props 
    movie 를 클릭하면 movie 디테일 화면으로 이동... 
*/

function About(props) {
    console.log(props);
    return (
        <div className="about__container">
            <span>
                "Freedom is the freedom to say that two plus two make four. If that i granted, all else follows."
            </span>
            <span>
                - George Orwell, 1984
            </span>
        </div>
    );
}

export default About;