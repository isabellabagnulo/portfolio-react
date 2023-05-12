import { Routes, Route } from 'react-router-dom'
import { Provider } from 'react-redux';
import store from './redux/store';
import SCREENS from './route/router';

import Home from './screens/Home';
import About from './screens/About';
import Works from './screens/Works';
import Work from './screens/Work';
import Header from './components/ui/header/Header'

import './App.scss';

function App() {
  return (
    <div className="App">

      {/* <Provider store={store}> */}
        <Header/>
        <Routes>
          <Route path={SCREENS.home} element={<Home></Home>}/>
          <Route path={SCREENS.works} element={<Works></Works>}/>
          <Route path={SCREENS.work + "/:id"} element={<Work></Work>}/>
          <Route path={SCREENS.about} element={<About></About>}/>
        </Routes>
        <footer>2023 - made by Isabella Bagnulo</footer>
      {/* </Provider> */}

    </div>
  );
}

export default App;
