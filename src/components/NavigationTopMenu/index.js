import React from "react";

import SearchBar from "./SearchBar";
import HamburgerMenu from "./HamburgerMenu";
import SignUpModal from "./SignUpModal";
import LogInModal from "./LoginModal";
import SecureContent from "../Security/secure-content";
import UnsecuredContent from "../Security/unsecured-content";
import LOGO from "../../_images/artbubblelogo.png"

const NavigationTopMenu = () => {
    return (
        <div className={'navbar sticky-top navbar-dark bg-primary p-2 p-0'}>
            <div className={'col-2 col-lg-2 col-xl-3 text-center'}>
                <a className={'navbar-brand'} href={"/home"}>
                    <img className={``}
                        src={LOGO} alt={"artbubble logo"}
                    height={"50px"}/>
                </a>
            </div>

            <div className={'col-8 col-lg-8 col-xl-6'}>
                <SearchBar/>
            </div>

            <UnsecuredContent>
                <div className={'col-2 col-xl-3 text-center'}>
                    <SignUpModal/>
                    <LogInModal/>
                </div>
            </UnsecuredContent>

            <SecureContent>
                <div className={'col-2 col-xl-3 text-end'}>
                    <HamburgerMenu/>
                </div>
            </SecureContent>
        </div>
    );
};

export default NavigationTopMenu;
