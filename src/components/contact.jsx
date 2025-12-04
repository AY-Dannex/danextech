import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faInstagram, faLinkedin, faMailchimp, faTiktok, faTwitter, faWhatsapp, faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faMailBulk, faVoicemail } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import emailjs from '@emailjs/browser'
import Footer from './footer';
import Alerts from './alerts';
import Show from './animation';
import Logo3 from '../assets/logo3.png'

function Contact (){
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        message: "",
    })
    const [alert, setAlert] = useState({ show: false, type: "", message: "" });
    const [load, setLoad] = useState(false)

    const handleCloseAlert = () => setAlert({ show: false, type: "", message: "" })

    const collectData = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const { firstName, lastName, email, message } = formData;

        if (!firstName.trim() || !lastName.trim() || !email.trim() || !message.trim()) {
            setAlert({
                show: true,
                type: "error",
                message: "Please fill out all required fields."
            });
            return; 
        }

        setLoad(true);

        emailjs.send(
            "service_bfo86tl",
            "template_9ls6sxb",
            {
                firstName,
                lastName,
                title: "Danextech Portfolio Contact Page",
                email,
                message,
            },
            "umQefFEFILMhFX5Jx"
        )
        .then(() => {
            setAlert({
                show: true,
                type: "success",
                message: "Message sent successfully!",
            });

            setFormData({
                firstName: "",
                lastName: "",
                email: "",
                message: ""
            });
        })
        .catch(() => {
            setAlert({
                show: true,
                type: "network",
                message: "Network error, please try again later.",
            });
        })
        .finally(() => {
            setLoad(false);
        });
    };


    return(
        <div className='w-full bg-[#e3fffd] md:h-screen dark:bg-[#000]'>
            <div className="theme w-full bg-[#e3fffd] pt-30 dark:bg-[#000] md:h-fit">
                {load && (
                    <div className='fixed w-[100%] h-[100%] z-400 inset-0 bg-[#e3fffd]/80 dark:bg-[#000]/80'>
                        <div className="min-h-screen w-full flex flex-col justify-center items-center">
                            <img src={Logo3} alt="" className='w-[80px] animate-pulse'/>
                        </div>
                    </div>
                )}
                <div className="theme relative z-20 max-w-[1440px] px-[20px] pb-10 mb-[450px] mx-auto bg-[#e3fffd] md:mb-0 dark:bg-[#000]">
                    {alert.show && (
                        <div className='mb-4 absolute w-[90%] z-500 top-0 left-[50%] translate-x-[-50%]'>
                            <Alerts type={alert.type} message={alert.message} onClose={handleCloseAlert} />
                        </div>
                    )}
                    <div className='theme w-full mx-auto flex flex-col justify-between gap-25 sm:w-[500px] md:flex-row gap-10 md:w-full bg-[#e3fffd] dark:bg-[#000]'>
                            <div className="w-full  md:w-[450px]">
                        <Show type='slideLeft'>
                                <h1 className='text-[30px] pb-10 text-center font-bold text-[#42c697]'>Contact Form</h1>
                                <form action="" className="flex flex-col gap-8 w-full">
                                    <div className="w-full flex flex-row justify-between gap-3 [@media(max-width:425px)]:flex-col gap-6">
                                        <div className="relative w-full"> 
                                            <p className="theme text-[12px] font-medium absolute top-[-17px] left- text-gray-700 dark:text-white">First Name</p>
                                            <input type="text" name="firstName" id="" placeholder="First Name" value={formData.firstName} onChange={collectData} className="theme border-2 border-gray-400 focus:border-[#42c697] rounded-md w-full outline-none h-[35px] text-[14px] px-2 dark:text-white"/>
                                        </div>
                                        <div className="relative w-full"> 
                                            <p className="theme text-[12px] font-medium absolute top-[-17px] left- text-gray-700 dark:text-white">Last Name</p>
                                            <input type="text" name="lastName" id="" placeholder="Last Name" value={formData.lastName} onChange={collectData} className="theme border-2 border-gray-400 focus:border-[#42c697] rounded-md w-full outline-none h-[35px] text-[14px] px-2 dark:text-white"/>
                                        </div>
                                    </div>
                                    <div className="relative w-full">
                                        <p className="theme text-[12px] font-medium absolute top-[-17px] left- text-gray-700 dark:text-white">Email</p>
                                        <input type="email" name="email" id="" placeholder="you@company.com" value={formData.email} onChange={collectData} className="theme border-2 border-gray-400 w-full focus:border-[#42c697] rounded-md outline-none h-[35px] text-[14px] px-2 dark:text-white"/>
                                    </div>
                                    <div className="relative w-full">
                                        <p className="theme text-[12px] font-medium absolute top-[-17px] left- text-gray-700 dark:text-white">Message</p>
                                        <textarea name="message" id="" placeholder="Leave me a message" value={formData.message} onChange={collectData} className="theme border-2 border-gray-400 w-full focus:border-[#42c697] rounded-md resize-none outline-none p-2 h-30 text-[14px] dark:text-white"></textarea>
                                    </div>
                                    <button type="submit" onClick={handleSubmit} className="w-full px-4 py-3 bg-[#42c697] mt-[-15px] rounded-md text-[14px] text-white font-medium cursor-pointer">Send Message</button>
                                </form>
                        </Show>
                            </div>
                        <Show type='slideRight'>
                            <div className='max-w-[400px] mt-[-30px] md:mt-0'>
                                <div className='flex flex-col gap-5 md:mt-20'>
                                    <div className='flex gap-2 items-center'>
                                        <p className='theme text-[20px] dark:text-white'>
                                            <FontAwesomeIcon icon={faEnvelope} />
                                        </p>
                                        <a href="#" className='theme text-[14px] hover:underline dark:text-white'>Send me a mail</a>
                                    </div>
                                    <div className='flex gap-2 items-center'>
                                        <p className='theme text-[20px] dark:text-white'>
                                            <FontAwesomeIcon icon={faXTwitter} />
                                        </p>
                                        <a href="#" className='theme text-[14px] hover:underline dark:text-white'>Message me on X</a>
                                    </div>
                                    <div className='flex gap-2 items-center'>
                                        <p className='theme text-[20px] dark:text-white'>
                                            <FontAwesomeIcon icon={faWhatsapp} />
                                        </p>
                                        <a href="#" className='theme text-[14px] hover:underline dark:text-white'>Message me on whatsapp</a>
                                    </div>
                                </div>
                            </div>
                        </Show>
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    )
}
export default Contact