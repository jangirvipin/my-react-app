
import Home from './Project.jsx';
import India from './India.jsx';
import America from './America.jsx';
import Swit from "./Switzerland.jsx"
import Chin from './China.jsx';
import Japan from './Japan.jsx';
import Indo from './Indonesia.jsx';
import Canada from './Canada.jsx';
import Nepal from "./Nepal.jsx"
import Pak from './Pakistan.jsx';
import Sri from "./SriLanka.jsx"
import Rus from './Russia.jsx';
import North from './North.jsx';
import South from './South.jsx';
import Afgan from "./Afgan.jsx"

import {
  BrowserRouter,
  Routes,
  Route,
  
} from "react-router-dom";
import Switzer from './England.jsx';

function App() {
  return (
    <div style={{padding:0 }}>
    <BrowserRouter>
                <Routes>
                    <Route
                        exact path="/" element={<Home />}
                    />
                      <Route
                        exact path="/India" element={<India/>}
                    />
                    <Route
                        exact path="/America" element={<America/>}
                    />
                   
                     <Route
                        exact path="/England" element={<Swit/>}
                    />
                      <Route
                        exact path="/China" element={<Chin/>}
                    />
                     <Route
                        exact path="/Japan" element={<Japan/>}
                    />
                     <Route
                        exact path="/Indonesia" element={<Indo/>}
                    />
                     <Route
                        exact path="/Switzerland" element={<Switzer/>}
                    />
                    <Route
                        exact path="/Canada" element={<Canada/>}
                    />
                    <Route
                        exact path="/Nepal" element={<Nepal/>}
                    />
                     <Route
                        exact path="/Pakistan" element={<Pak/>}
                    />
                     <Route
                        exact path="/SriLanka" element={<Sri/>}
                    />
                    <Route
                        exact path="/Russia" element={<Rus/>}
                    />
                     <Route
                        exact path="/NorthKorea" element={<North/>}
                    />
                     <Route
                        exact path="/SouthKorea" element={<South/>}
                    />
                    <Route
                        exact path="/Afganistan" element={<Afgan/>}
                    />
                </Routes>
            </BrowserRouter>
            
    </div>
  )
}

export default App;
