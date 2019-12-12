import React from 'react';
// import TabBarExample from './pages/tabBar'
import 'assets/reset.css'
import 'swiper/css/swiper.min.css'
import Center from 'pages/center.jsx'
import store from './store/store'
import { Provider } from 'react-redux'
// import
function App() {
  // console.log(TabBarExample)
  return (
    // <TabBarExample></TabBarExample>
    <Provider store={store}>
      <Center></Center>
    </Provider>
    
  );
}

export default App;
