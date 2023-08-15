import { FC } from "react";

const NavBar:FC = () =>{
    return(
        <nav 
        className="h-[100%] flex align-middle bg-slate-600"
        id="navbar"
      >
        <div className="w-[100%] justify-center place-self-center">
          <ul className=" w-[50%] flex-1 m-auto flex justify-around">
            <li className="">
              <a href="/">Price</a>
            </li>
            <li className=" ">
              <a href="/">Ghost</a>
            </li>
          </ul>
        </div>
      </nav>
    )
}

export default NavBar