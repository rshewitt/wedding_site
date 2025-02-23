import { useEffect, useState } from "react";

const clientId = "7ad31c0af7914f93b5753268299b706a";
const redirectUrl = "http://localhost:3000";

const authorizationEndpoint = "https://accounts.spotify.com/authorize";
const tokenEndpoint = "https://accounts.spotify.com/api/token";
const scope = "user-read-private user-read-email";

const SpotifyPlaylist = () => {
  return (
    <div id="spotify_div">
      <div className="text-xl-wel font-normalBold text-gray-800 text-center mb-4 px-4">
        What song reminds you of us?
      </div>
      <div className="text-xl-wel font-normalBold text-gray-800 text-center mb-4 px-4">
        <a
          // TODO: update this link
          href="https://open.spotify.com/playlist/62kuDwfMjJQTA6Y1bWAmmW?si=tELusVzsQX6P4kBEhSdgQg&pt=826f872ecabc5da5566856aa5e40b9b5&pi=eDgkESVQQXifg"
          target="_blank"
          rel="noreferrer"
        >
          Contribute to our Spotify playlist. Click HERE
        </a>
      </div>
      <div className="max-w-lg mx-auto px-4 text-center">
        <iframe
          title="sp"
          src="https://open.spotify.com/embed/playlist/62kuDwfMjJQTA6Y1bWAmmW?utm_source=generator&theme=0"
          width="100%"
          height="352"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default SpotifyPlaylist;
