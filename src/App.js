import './vendors/bootstrap/css/bootstrap.min.css';
import './vendors/bootstrap.min.css';
import './vendors/fontawesome/css/all.min.css';
import './App.css';

import {BrowserRouter, Route, Routes} from "react-router-dom";
import {ProfileProvider} from "./_context/profile-context";
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

const reducers = combineReducers({
    paintings: paintingsReducer,
    artists: artistReducer,
    collection: collectionsReducer,
    comments: commentsReducer,
    listings: listingsReducer,
    profile: profileReducer,
    offers: offersReducer,
    users: usersReducer,
    offersHistory: offersHistoryReducer,
    salesHistory: salesHistoryReducer

})
const store = createStore(reducers);

// TODO Can we switch this to the most up-to-date version? > lets do it
function App() {
    return (
        <ProfileProvider>
            <Provider store={store}>
                <BrowserRouter>
                    <Routes>
                        <Route index element={<HomeScreen/>}/>
                        <Route path="/">
                            <Route path="admin"
                                   element={<AdminScreen/>}/>
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
                            <Route path="profile/:profileId"
                                   element={
                                       <UserProfileScreen/>
                                   }/>
                            <Route path="profile"
                                   element={
                                       <SecureRoute>
                                           <CurrentUserProfileScreen/>
                                       </SecureRoute>
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
        </ProfileProvider>
    );
}

export default App;
