import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <div className="root-app">
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
//component dại diện cho page
