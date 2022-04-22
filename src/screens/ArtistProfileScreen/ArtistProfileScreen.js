import React, {useEffect} from "react";
import NavigationTopMenu from "../../components/NavigationTopMenu";
import PaintingListings from "../../components/PaintingListings";
import PaintingGrid from "../../components/PaintingGrid";
import UpdatePosts from "../../components/UpdatePosts";
import NavigationSidebar from "../../components/NavigationSidebar";
import ArtistProfile from "../../components/ArtistProfile";
import CreatePost from "../../components/UpdatePosts/CreatePost";

import paintingsReducer from "../../_reducers/paintings-reducer"
import artistReducer from "../../_reducers/artist-reducer";
import collectionsReducer from "../../_reducers/collections-reducer";
import {Provider, useDispatch, useSelector} from "react-redux";
import {combineReducers, createStore} from "redux";
import {useLocation, useParams} from "react-router-dom";
import ScrollToTop from "../../components/ScrollToTop/ScrollToTop";
import ComponentHeader from "../../components/ComponentHeader";
import {artistDetails, findPaintingsByArtist} from "../../_actions/artpieces-actions";
import {findPaintingComments} from "../../_actions/comments-actions";
import ArtistStats from "../../components/ArtistProfile/ArtistStats";
import PaintingsByArtist from "../../components/ArtistProfile/PaintingsByArtist";

const reducers = combineReducers({paintings: paintingsReducer, artists: artistReducer, collection: collectionsReducer})
const store = createStore(reducers);

const ArtistProfileScreen = () => {
    const {artist_name, artist_id} = useParams();
    const dispatch = useDispatch();

    const artist = useSelector(state => state.artists);
    useEffect( () => artistDetails(dispatch, artist_name), [dispatch, artist_name]);

    const paintings_data = useSelector(state => state.paintings);
    useEffect(() => findPaintingsByArtist(dispatch, artist_id), [dispatch, artist_id]);

    const posts = useSelector(state => state.comments)
    useEffect(() => findPaintingComments(dispatch, artist_id), [dispatch, artist_id])

    const paintings = paintings_data.data;

    return (
        <Provider store={store}>
            <ScrollToTop/>
            <NavigationTopMenu/>
            <div className={"container"}>
                <div className={'row pt-2'}>
                    <div className={'col-2'}>
                        <NavigationSidebar active={useLocation().pathname.substring(window.location.pathname.lastIndexOf('/') + 1)}/>
                        <ScrollToTop/>
                    </div>
                    <div className={'col-10 col-lg-7'}>
                        {ComponentHeader(artist.OriginalArtistName)}
                        <PaintingListings data={paintings}/>
                        <UpdatePosts posts={posts}/>
                        <PaintingsByArtist data={paintings} id={artist_id}/>
                    </div>
                    <div className={'col-3 d-none d-lg-block'}>
                        <ArtistProfile artist={artist}/>
                        <ArtistStats artist={artist}/>
                    </div>
                </div>
            </div>
        </Provider>
    );
};
export default ArtistProfileScreen;