// import { useEffect, useState } from "react";
// import { BrowserRouter, Routes, Route, Navigate, Link } from "react-router-dom";
// import { Main, Profile } from "./Pages";
// import Background from "./Components/Background/Background";
// import NavBar from "./Components/NavBar/NavBar";
// import Hero from "./Components/Hero/Hero";

// const App = () => {
//   let heroData = [
//     { text1: "Find", text2: "your People" },
//     { text1: "Discover", text2: "your Sounds" },
//     { text1: "Give into", text2: "the Rhythm" },
//   ];

//   const [heroCount, setHeroCount] = useState(0);
//   const [playStatus, setPlayStatus] = useState(false);

//   useEffect(() => {
//     setInterval(() => {
//       setHeroCount((count) => {
//         return count === 2 ? 0 : count + 1;
//       });
//     }, 3000);
//   }, []);

//   return (
//     <BrowserRouter>
//       <NavBar />
//       <Routes>
//         <Route path="/" element={<Navigate to="/home" />} />
//         <Route path="/main" element={<Main />} />
//         <Route path="/profile" element={<Profile />} />
//       </Routes>
//       <div>
//         <Background playStatus={playStatus} heroCount={heroCount} />

//         <Hero
//           setPlayStatus={setPlayStatus}
//           heroData={heroData[heroCount]}
//           heroCount={heroCount}
//           setHeroCount={setHeroCount}
//           playStatus={playStatus}
//         />
//       </div>
//     </BrowserRouter>
//   );
// };

// export default App;
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

const Home = () => <div><h1>Home Page</h1></div>;
const Profile = () => <div><h1>Profile Page</h1></div>;

const NavBar = () => (
  <nav>
    <ul>
      <li><Link to="/home">Home</Link></li>
      <li><Link to="/profile">Profile</Link></li>
    </ul>
  </nav>
);

const App = () => (
  <BrowserRouter>
    <NavBar />
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  </BrowserRouter>
);

export default App;
