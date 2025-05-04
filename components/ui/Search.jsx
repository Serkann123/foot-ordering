import OutsideClickHandler from "react-outside-click-handler";
import Title from "../ui/Title";
import Image from "next/image";
import {GiCancel } from 'react-icons/gi';

const Search = ({ setIsSearchModal }) => {
  return (
    <div
      className="fixed  w-screen h-screen z-50
          top-0 left-0 after:content-[''] after:w-screen
          after:h-screen after:bg-white
          after:absolute after:top-0 after:left-0 after:opacity-60
          grid place-content-center ">

      <OutsideClickHandler onOutsideClick={() => setIsSearchModal(false)}>
        <div className="w-full h-full grid place-content-center">
          <div
            className="relative z-50 w-[370px] md:w-[600px]
           bg-white border-2 p-5 rounded-3xl "
          >
            <Title addClass="text-[40px] text-center">Search</Title>
            <input
              type="text"
              placeholder="Search..."
              className="border w-full mt-10"
            ></input>

            <ul className="mt-10">
              <li className="flex justify-between items-center p-1
              hover:bg-primary transition-all
              ">
                <div className="relative flex">
                  <Image
                    src="/images/f1.png"
                    alt=""
                    width={48}
                    height={48}
                  />
                </div>
                <span className="font-bold">Good Pizza</span>
                <span className="font-bold">$10</span>
              </li>

              <li className="flex justify-between items-center p-1
              hover:bg-primary transition-all
              ">
                <div className="relative flex">
                  <Image
                    src="/images/f1.png"
                    alt=""
                    width={48}
                    height={48}
                  />
                </div>
                <span className="font-bold">Good Pizza</span>
                <span className="font-bold">$10</span>
              </li>

              <li className="flex justify-between items-center p-1
              hover:bg-primary transition-all
              ">
                <div className="relative flex">
                  <Image
                    src="/images/f1.png"
                    alt=""
                    width={48}
                    height={48}
                  />
                </div>
                <span className="font-bold">Good Pizza</span>
                <span className="font-bold">$10</span>
              </li>
            </ul>

          <button className="absolute top-4 right-10">
            <GiCancel size={25} onClick={()=>setIsSearchModal(false)}/>
          </button>

          </div>
        </div>
      </OutsideClickHandler>
    </div>
  );
};

export default Search;
