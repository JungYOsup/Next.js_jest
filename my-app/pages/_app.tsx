import { AppProps } from 'next/app';
import wrapper from '../src/modules/store/configureStore';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import HeaderMenu from '../src/component/header/HeaderMenu';
import React from 'react';
import BannerCompany from '../src/component/banner/BannerCompany';
import '../styles/globals.css';
import FrequentlyArrowUp from '../src/component/frequently/FrequentlyArrowUp';

function App({ Component, pageProps }: AppProps) {
  return (
    <React.Fragment>
      {/* HeaderMenu는 고정 */}
      <HeaderMenu />
      {/* BannerCompany는 페이지 이동할때마다 Redux의 state가 바뀌면서 
      변경됨 */}
      <BannerCompany />
      <Component {...pageProps} />
    </React.Fragment>
  );
}

export default wrapper.withRedux(App);
// export default App;
