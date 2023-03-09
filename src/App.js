import './vendors/bootstrap/css/bootstrap.min.css';
import './vendors/bootstrap.min.css';
import './vendors/fontawesome/css/all.min.css';
import './App.css';

import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Provider} from "react-redux";
import {combineReducers, createStore} from "redux";

import HomeScreen from "./screens/HomeScreen/HomeScreen";
import ArtistProfileScreen from "./screens/ArtistProfileScreen/ArtistProfileScreen";
import UserProfileScreen from "./screens/UserProfileScreen/UserProfileScreen";
import ArtPieceScreen from "./screens/ArtPieceScreen/ArtPieceScreen";
import EditProfileScreen from "./components/UserProfile/EditProfile";
import SearchScreen from "./screens/SearchScreen/SearchScreen";
import NewArtistsScreen from "./screens/NewArtistsScreen/NewArtistsScreen";
import PrivacyPolicyScreen from "./screens/PrivacyPolicyScreen/PrivacyPolicyScreen";
import NewListingScreen from "./screens/NewListingsScreen/NewListingsScreen";
import CurrentUserProfileScreen from "./screens/CurrentUserProfileScreen/UserProfileScreen";

import SecureRoute from "./_security/secure-route"

import paintingsReducer from "./_reducers/paintings-reducer"
import artistReducer from "./_reducers/artist-reducer";
import collectionsReducer from "./_reducers/collections-reducer";
import commentsReducer from "./_reducers/comments-reducer";
import listingsReducer from "./_reducers/listings-reducer";
import offersReducer from "./_reducers/offers-reducer";
import offersHistoryReducer from "./_reducers/offers-history-reducer";
import salesHistoryReducer from "./_reducers/sales-history-reducer";
import profileReducer from "./_reducers/profile-reducer";
import usersReducer from "./_reducers/users-reducer";
import AdminScreen from "./screens/AdminScreen/AdminScreen";
import SecureAdminRoute from "./_security/secure-admin-route";
import newArtistsReducer from "./_reducers/new-artists-reducer";
import singleUserReducer from "./_reducers/single-user-reducer";
import artistSearchReducer from "./_reducers/artist-search-reducer";


const reducers = combineReducers({
    paintings: paintingsReducer,
    artists: artistReducer,
    artistSearch: artistSearchReducer,
    collection: collectionsReducer,
    comments: commentsReducer,
    listings: listingsReducer,
    profile: profileReducer,
    offers: offersReducer,
    users: usersReducer,
    offersHistory: offersHistoryReducer,
    salesHistory: salesHistoryReducer,
    newArtists: newArtistsReducer,
    singleUser: singleUserReducer
})
const store = createStore(reducers);

function App() {
    return (
            <Provider store={store}>
                <BrowserRouter>
                    <Routes>
                        <Route index element={<HomeScreen/>}/>
                        <Route path="/">
                            <Route path="admin"
                                   element={
                                       <SecureAdminRoute>
                                           <AdminScreen/>
                                       </SecureAdminRoute>}/>
                            <Route path="home"
                                   element={<HomeScreen/>}/>
                            <Route path="search"
                                   element={<SearchScreen/>}/>
                            <Route path="search/:searchTerm"
                                   element={<SearchScreen/>}/>
                            <Route path="new-artists"
                                   element={<NewArtistsScreen/>}/>
                            <Route path="new-listings"
                                   element={<NewListingScreen/>}/>
                            <Route path="artist"
                                   element={<ArtistProfileScreen/>}/>
                            <Route path="artist/:artist_name/:artist_id"
                                   element={<ArtistProfileScreen/>}/>
                            <Route path="art/:painting_id"
                                   element={<ArtPieceScreen/>}/>
                            <Route path="profile"
                                   element={
                                       <SecureRoute children={this}>
                                           <CurrentUserProfileScreen/>
                                       </SecureRoute>
                                   }/>
                            <Route path="profile/:profileId"
                                   element={
                                       <UserProfileScreen/>
                                   }/>
                            <Route index
                                   element={
                                       <SecureRoute>
                                           <UserProfileScreen/>
                                       </SecureRoute>
                                   }/>
                            <Route path="edit-profile"
                                   element={
                                       <SecureRoute>
                                           <EditProfileScreen/>
                                       </SecureRoute>
                                   }/>
                            <Route path="privacy"
                                   element={<PrivacyPolicyScreen/>}/>
                        </Route>
                    </Routes>
                </BrowserRouter>
            </Provider>
    );
}

export default App;
