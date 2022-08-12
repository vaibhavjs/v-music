import React from "react";
import SongsList from "../components/SongsList";
import Playlists from "../components/Playlists";
import Player from "../components/Player";

function Home() {
  return (
    <>
      <div className="flex gap-5 px-20 mx-10">
        <div className="w-3/5">
          <SongsList />
        </div>
        <div className="w-2/5">
          <Playlists />
        </div>
      </div>
      <Player />
    </>
  );
}

export default Home;
