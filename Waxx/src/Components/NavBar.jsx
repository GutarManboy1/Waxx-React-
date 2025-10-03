import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const NavBar = () => {
    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        element?.scrollIntoView({ behavior: 'smooth' });
    };

    useGSAP(() => {
        const navTween = gsap.timeline({
            scrollTrigger: {
                trigger: "nav",
                start: "bottom top",
                end: "bottom top",
                scrub: true,
            },
        });
        navTween.fromTo(
            "nav",
            { backgroundColor: "transparent" },
            {
                backgroundColor: "#00000050",
                backdropFilter: "blur(10px)",
                duration: 1,
                ease: "power1.inOut",
            }
        );
    });

    return (
        <nav className="flex justify-between items-center mx-[40px] mb-0 mt-10 text-white no-underline">
            <div className="font-['Sono'] text-[80px] font-extrabold">Waxx</div>
            <ul className="flex items-center list-none text-lg gap-[90px] cursor-pointer text-white no-underline">
                <li className='rounded-[50px] py-2.5 px-[38px] bg-white text-[#262626] cursor-pointer' onClick={() => scrollToSection('about')}>About</li>
                <li className='rounded-[50px] py-2.5 px-[38px] bg-white text-[#262626] cursor-pointer' onClick={() => scrollToSection('shops')}>Shops</li>
                <li className='rounded-[50px] py-2.5 px-[38px] bg-white text-[#262626] cursor-pointer' onClick={() => scrollToSection('profile')}>Your Profile</li>
                <li className='rounded-[50px] py-2.5 px-[38px] bg-white text-[#262626] cursor-pointer' onClick={() => scrollToSection('contact')}>Contact</li>
            </ul>
        </nav>
    );
};

export default NavBar;
