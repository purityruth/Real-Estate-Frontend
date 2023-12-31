// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Companies from './components/Companies/Companies';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import GetStarted from './components/GetStarted/GetStarted';

import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import Residencies from './components/Residencies/Residencies';
import Value from './components/Value/Value';

function App() {
  return (
    <div className="App">
      <div>
        <div className="white-gradient" />
          <Header />
          <Hero />
        </div>
        <Companies />
        <Residencies />
        <Value />
        <Contact />
        <GetStarted />
        <Footer />
    </div>
  );
}

export default App;









// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App
