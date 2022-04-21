import './vendors/bootstrap/css/bootstrap.min.css';
import './vendors/bootstrap.min.css';
import './vendors/fontawesome/css/all.min.css';
import './App.css';

import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomeScreen from "./screens/HomeScreen/HomeScreen";
import ArtistProfileScreen from "./screens/ArtistProfileScreen/ArtistProfileScreen";
import UserProfileScreen from "./screens/UserProfileScreen/UserProfileScreen";
import ArtPieceScreen from "./screens/ArtPieceScreen/ArtPieceScreen";
import EditProfileScreen from "./components/UserProfile/EditProfile";
import SearchScreen from "./screens/SearchScreen/SearchScreen";
import NewArtistsScreen from "./screens/NewArtistsScreen/NewArtistsScreen";
import SecureRoute from "./components/Security/secure-route"
import {ProfileProvider} from "./_context/profile-context";
import PrivacyPolicyScreen from "./screens/PrivacyPolicyScreen/PrivacyPolicyScreen";

// TODO Can we switch this to the most up-to-date version? > lets do it
function App() {
    return (
        <ProfileProvider>
            <BrowserRouter>
                <Routes>
                    <Route index element={<HomeScreen/>}/>
                    <Route path="/">
                        <Route path="home"
                               element={<HomeScreen/>}/>
                        <Route path="search"
                               element={<SearchScreen/>}/>
                        <Route path="search/:searchTerm"
                               element={<SearchScreen/>}/>
                        <Route path="new-artists"
                               element={<NewArtistsScreen/>}/>
                        <Route path="artist"
                               element={<ArtistProfileScreen/>}/>
                        <Route path="artist/:artist_name/:artist_id"
                               element={<ArtistProfileScreen/>}/>
                        <Route path="art"
                               element={<ArtPieceScreen/>}/>
                        <Route path="art/:painting_id"
                               element={<ArtPieceScreen/>}/>
                        <Route path="profile"
                               element={
                                   <SecureRoute>
                                       <UserProfileScreen/>
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
        </ProfileProvider>
    );
}

export default App;
