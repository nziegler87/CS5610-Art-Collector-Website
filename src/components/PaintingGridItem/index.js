import React from "react";

const PaintingGridItem = ( { grid_item = {
    id: "577282bbedc2cb3880f8abf6",
    title: "An Homage to IKB 1957",
    url: "an-homage-to-ikb-1957-2011",
    artistUrl: "takashi-murakami",
    artistName: "Takashi Murakami",
    artistId: "57726db5edc2cb3880b4e400",
    completitionYear: 2011,
    width: 298,
    image: "https://uploads4.wikiart.org/images/takashi-murakami/an-homage-to-ikb-1957-2011.jpg",
    height: 418
}} ) => {
    return (
        <div className={"card m-3"}>
            <p className={"m-0"}><strong>{grid_item.title}</strong></p>
            <img src={grid_item.image}/>
            <p className={"m-0"}><strong>{grid_item.artistName}</strong>, {grid_item.completitionYear}</p>

        </div>
    )
}

export default PaintingGridItem;