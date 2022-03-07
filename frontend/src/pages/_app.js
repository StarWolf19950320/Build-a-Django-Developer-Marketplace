import Head from 'next/head';
import "../../styles/globals.css"
import Navbar from '../components/Navbar'
import {AuthContextProvider} from "../contexts/AuthContext";

const App = ({Component, pageProps}) => {
  return (
    <AuthContextProvider pageProps={pageProps}>
      <div className="min-h-full">
        <Head>
          <title>Django Mentors</title>
          <meta name='viewport' content='width=device-width, inital-scale=1'/>
        </Head>
        <Navbar/>
        <Component {...pageProps} />
      </div>
    </AuthContextProvider>
  );
};

export default App;
