import React from "react";
import {
  AiOutlineArrowLeft,
  AiOutlineHighlight,
  AiOutlineShopping,
} from "react-icons/ai";

export const Overlay = () => {
  // return <Intro />;
  return <Customize />;
};

const Intro = () => {
  return (
    <div className="fixed inset-0 text-white p-4">
      <header className="flex justify-between">
        <div className="">logo</div>
        <AiOutlineShopping size="3rem" />
      </header>

      <section key="main">
        <div className="section--container">
          <div>
            <h1 className="text-8xl lg:text-9xl font-black tracking-tighter italic w-1/3 leading-none max-w-80">
              LET'S DO IT.
            </h1>
          </div>
          <div className="support--content w-1/3 max-w-96">
            <div>
              <p>
                Create your unique and exclusive shirt with our brand-new 3D
                customization tool.
                <strong>Unleash your imagination</strong> and define your own
                style.
              </p>
              <button className="mt-8 bg-black flex items-center gap-2 px-4 py-2 rounded-full">
                CUSTOMIZE IT
                <AiOutlineHighlight size="1.3rem" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const Customize = () => {
  const colors = [
    "#ccc",
    "#efbd4d",
    "#80c670",
    "#726de8",
    "#ef674d",
    "#353934",
  ];

  const decals = ["react", "three", "blender"];

  return (
    <div className="fixed inset-0 p-4">
      <div className="flex flex-col gap-4 absolute top-1/2 -translate-y-1/2 right-4">
        {colors.map((color) => (
          <div
            key={color}
            className="w-16 h-16 rounded-full border-2 border-white"
            style={{backgroundColor: color}}
          ></div>
        ))}
      </div>
      <div className="flex gap-4 absolute top-1/2 -translate-y-1/2 left-4 flex-col">
        {decals.map((decal) => (
          <div key={decal} className="w-16 h-16">
            <img src={`/${decal}-icon.png`} alt={decal} />
          </div>
        ))}
      </div>

      <button className="bg-black text-white flex items-center gap-2 px-4 py-2 rounded-full absolute top-4 left-4">
        GO BACK
        <AiOutlineArrowLeft size="1.3rem" />
      </button>
    </div>
  );
};
