import React, {useEffect} from "react";
import ComponentHeader from "../ComponentHeader";
import PaintingGridItem from "./PaintingGridItem";
import {useDispatch, useSelector} from 'react-redux';
import {findPaintingsByArtist, generalSearch, randomPaintings, updatedArtists} from "../../_actions/artpieces-actions";
import ArtistGridItem from "./ArtistGridItem";

const RandomPaintings = () => {
    const paintings_data = useSelector(state => state.paintings);
    const paintings = paintings_data.data
    const dispatch = useDispatch();
    useEffect(() => randomPaintings(dispatch), [dispatch]);

    return (
        <>
            {ComponentHeader("Popular Paintings")}
            <div className={'row row-cols-auto row-cols-sm-2 row-cols-md-3 row-cols-xl-4'}>
                {paintings.map(painting_item => <PaintingGridItem key={painting_item.id}
                                                                  grid_item={painting_item}/>)}
            </div>
        </>
    )
}

const UpdatedArtists = () => {
    const paintings_data = useSelector(state => state.paintings);
    const paintings = paintings_data.data;
    const dispatch = useDispatch();
    useEffect(() => updatedArtists(dispatch), [dispatch]);
    return (
        <>
            {ComponentHeader("Popular Artists")}
            <div className={'row row-cols-auto row-cols-sm-2 row-cols-md-3 row-cols-xl-4'}>
                {paintings.map(painting_item => <ArtistGridItem key={painting_item.id}
                                                                grid_item={painting_item}/>)}
            </div>
        </>
    )
}

const PaintingsByArtist = (id) => {
    const paintings_data = useSelector(state => state.paintings);
    const paintings = paintings_data.data;
    const dispatch = useDispatch();
    useEffect(() => findPaintingsByArtist(dispatch, id), [dispatch, id]);

    return (
        <>
            {ComponentHeader("Paintings by Artist")}
            <div className={"mb-3 d-flex flex-column justify-content-center"}>
                <div className={'row row-cols-auto row-cols-sm-2 row-cols-md-3 row-cols-xl-4'}>
                    {paintings.map(painting_item => <PaintingGridItem key={painting_item.id}
                                                                      grid_item={painting_item}/>)}
                </div>
                <button type="button"
                        className={`rounded-pill btn-sm btn-primary ${paintings_data.hasMore ? "" : "d-none"}`}
                        onMouseDown={(e) => e.preventDefault()}
                        onClick={() => findPaintingsByArtist(dispatch, id, paintings_data.paginationToken)}
                >
                    Show More
                </button>
            </div>
        </>
    )
}

const SearchResults = (search_term) => {
    const paintings_data = useSelector(state => state.paintings);
    const paintings = paintings_data.data;
    const dispatch = useDispatch();
    useEffect(() => generalSearch(dispatch, search_term), [dispatch, search_term]);

    return (
        <>
            {ComponentHeader("Search Results")}
            {paintings.length === 0
                ?
                (<div className={"d-flex justify-content-center"}><span className={"text-danger"}>No Paintings Found</span></div>)
                :
                (<div className={"mb-3 d-flex flex-column justify-content-center"}>
                    <div className={'row row-cols-auto row-cols-sm-2 row-cols-md-3 row-cols-xl-4'}>
                    {paintings.map(painting_item => <PaintingGridItem key={painting_item.id} grid_item={painting_item}/>)}
                    </div>
                    <button className={`rounded-pill btn-sm btn-primary ${paintings_data.hasMore ? "" : "d-none"}`}>Show More</button>
                </div>)
            }
        </>
    )
}

const PaintingGrid = (params) => {
    console.log(params)

    switch (params.type) {
        case "artist":
            console.log("artist")
            return PaintingsByArtist(params.id);
        case "random":
            console.log("random")
            return RandomPaintings();
        case "updated-artists":
            console.log("update")
            return UpdatedArtists();
        case "search":
            console.log("search")
            return SearchResults(params.id);
        default:
            return [];
    }
}

export default PaintingGrid;