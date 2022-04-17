import React from "react";

import NavigationSidebar from "../../components/NavigationSidebar";
import NavigationTopMenu from "../../components/NavigationTopMenu";
import PaintingListings from "../../components/PaintingListings";
import paintingsReducer from "../../_reducers/paintings-reducer"
import {Provider} from "react-redux";
import {combineReducers, createStore} from "redux";
import PaintingGrid from "../../components/PaintingGrid";
import {useLocation} from "react-router-dom";

const reducers = combineReducers({paintings: paintingsReducer})
const store = createStore(reducers);

const Index = () => {
    return (
        <Provider store={store}>
            <div>
                <NavigationTopMenu/>
                <div className={"container"}>
                    <div className={'row pt-2'}>
                        <div className={'col-2'}>
                            <NavigationSidebar active={useLocation().pathname.substring(window.location.pathname.lastIndexOf('/') + 1)}/>
                        </div>
                        <div className={'col-10 col-lg-7'}>
                            <PaintingGrid type={"updated-artists"}/>
                        </div>
                        <div className={'col-3 d-none d-lg-block'}>
                            <PaintingListings/>
                        </div>
                    </div>
                </div>
            </div>
        </Provider>
    );
};
export default Index;