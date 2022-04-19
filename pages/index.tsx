import type { NextPage } from "next";
import Script from "next/script";

const Home: NextPage = () => {
  return (
    <>
      <Script src="https://mcapi.us/scripts/minecraft.min.js" />
      <Script src="./script.js" />
      <div className="server-status">
        <div className="server-image"></div>
        hglabor.de is currently <span className="server-online"></span>!
      </div>
    </>
  );
};

export default Home;
