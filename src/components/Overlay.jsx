import React from "react";
import {AiOutlineShopping} from "react-icons/ai";

export const Overlay = () => {
  return <Intro />;
};

const Intro = () => {
  return (
    <div className="container">
      <header>
        <div className="">logo</div>
        <AiOutlineShopping size="3rem" />
      </header>

      <section key="main">
        <div className="section--container">
          <div>
            <h1>LET'S DO IT.</h1>
          </div>
          <div className="support--content">
            <div>
              <p>
                Create your unique and exclusive shirt with our brand-new 3D
                customization tool.
                <strong>Unleash your imagination</strong> and define your own
                style.
              </p>
              <button>Start</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
