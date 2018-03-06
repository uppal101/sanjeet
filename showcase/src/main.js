import React from 'react';
import HobbyList from './hobby-list'
const personalAbout = () => (
  <div>

    <h3 className="first-topic">About Me</h3>
    <p>I was born in the U.K. and moved out to the states when I was about 9 years old. The move was thanks to my dad's job. Before you even ask yes I still have the British accent and I can switch it on and off. Ever since I was 9 I have always lived in Orange County, California. So I consider myself to be a so-cal girl. I even went to university in Orange the center of Orange County. At Chapman University I majored in psychology, and ended up working in the hospitality industry for a few years after graduating.</p>
    <br></br>
    <p>Now for those of you who don't know my story you might ask how the switch from psychology to Tech might have happened? The answer is a coding challenge. My dad introduced me to a coding challenge in COBOL since he had to teach non-majors. Long story short, I ended up geeking out about the challenge realizing it was basically my logic class, which was my favorite class, at Chapman. From there, I saw the power of coding, and I then did a month prep course to teach me the very basics of JavaScript. After that month, I saw technology algorithms around me that I interacted with on a weekly basis. I even thought to myself at times I could build that program, and then I embarked on the journey of becoming a software engineer.</p>
    <h3>Things I Like To Do</h3>
    <HobbyList />
  </div>

)

export default personalAbout;
