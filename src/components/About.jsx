import React from 'react'

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#0A192F] text-gray-300">
        <div className="flex flex-col justify-center items-center w-full h-full">
            <div className="max-w-[1000px] px-4">
                <div className="sm:text-right pb-8 pl-4">
                    <p className="text-4xl font-bold inline border-b-4 border-pink-600">About</p>
                </div>
            </div>
            <div className="max-w-[600px] px-4">
                <p className="justify-end">
                Hi!, My Name is <span className="font-bold">Neville Cornelius Tjampan</span> or <span className="font-bold">Nipeng</span> for
                short. But you can call me anything.
                <br></br>
                <br></br>
                I grew up in <a className="underline" href="https://www.google.com/search?q=Bogor">Bogor</a>. I used to study
                at <a className="underline" href="http://www.smkwikrama.sch.id">SMK Wikrama Bogor</a> taking a Software Engineer Major. I'm
                previously working as Software Engineer (Full Stack Web Developer) at <a className="underline" href="https://www.nutrifood.co.id">PT Nutrifood Indonesia</a> working
                on some internal project But Now I'm a Computer Science Student at <a className="underline" href="https://binus.ac.id">Binus University.</a>
                <br></br>
                <br></br>
                I'm really interested in tech related stuff. Right now I'm exploring and learning in web development using php or javascript.
                Right now I focused on learning Javascript Framework like React and NodeJS
                I am passionate about building excellent software that improves the lives of those around me.
                I do other things like playing games or travelling.
                </p>
            </div>
        </div>
    </div>
  )
}

export default About