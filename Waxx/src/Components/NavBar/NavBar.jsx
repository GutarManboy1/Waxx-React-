const NavBar = () => {
    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        element?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className="flex justify-between items-center mx-[120px] my-10 text-white no-underline">
          <div className="font-['Sono'] text-[80px] font-extrabold">Waxx</div>
          <ul className="flex items-center list-none text-lg gap-[90px] cursor-pointer text-white no-underline">
            <li className='rounded-[50px] py-2.5 px-[38px] bg-white text-[#262626] cursor-pointer' onClick={() => scrollToSection('shops')}>Shops</li>
            <li className='rounded-[50px] py-2.5 px-[38px] bg-white text-[#262626] cursor-pointer' onClick={() => scrollToSection('profile')}>Your Profile</li>
          </ul>
        </div>
      )
}

export default NavBar