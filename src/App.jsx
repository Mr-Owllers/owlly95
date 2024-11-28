import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import Eng from './pages/Eng';
import NotFound from './pages/404';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<Home />} />
                <Route path="/en" element={<Eng />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;