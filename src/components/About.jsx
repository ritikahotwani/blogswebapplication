import {AiFillGithub,AiFillLinkedin,AiFillMail} from "react-icons/ai"


function About() {
    return (

        <>
        <div className="container shadow-sm  justify-content">

            <div>

                <p className="d-flex">This is a React App which counts the words and characters in a text as you start typing. </p>

            
            <h3> Source Code</h3>
            <div className="mt-3">
                <a  target="_blank" href="https://github.com/ritikahotwani/Word-character-counter">ClickMe!</a>
                    </div>
            </div>




               <div className=" text-[#F2921D]">
                    <h3 className=" mb-2 mt-3">Blog Posting web-application</h3>
                    </div>
                <p className="d-flex">Greetings, I'm a computer science student studying for my bachelor's degree at Mumbai University.
                I am passionate about web applications. Thank you for visiting.</p>
               
                <div className="flex gap-6 m-auto  pb-2">
                <p className="">
                <a target="_blank" href="https://www.linkedin.com/in/ritika-hotwani-46a651201/"><AiFillLinkedin size={25}/></a>
                    <a target="_blank" href="mailto:ritikahotwani24@gmail.com"><AiFillMail size={25} /></a>
                    <a target="_blank" href="https://github.com/ritikahotwani"><AiFillGithub size={25}/></a>


  </p>
</div>
                    
                   
               
                <h5>© 2023 | Ritika Hotwani</h5>

</div>

        </>
    );
}
export default About;