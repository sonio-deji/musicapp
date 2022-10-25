import styled from "styled-components";
import NewRelease from "./NewRelease";
import { useState, useEffect } from "react";
import axios from "axios";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 43px;
  width: 80vw;
`;
const Title = styled.div`
  font-size: 24px;
  font-weight: 700;
  color: rgba(239, 238, 224, 1);
  margin-bottom: 13px;
`;
const SongContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 30px;
  overflow-x: auto;
  top: 50px;
`;

const NewReleases = ({ title, searchArtist, timeUpdate }) => {
  const [newRelease, setnewRelease] = useState([]);
  const [popular, setPopular] = useState([]);

  useEffect(() => {
    const makeRequest = async () => {
      const songs = await axios.get("https://musica-api.up.railway.app/new");
      setnewRelease(songs.data);
    };
    const popularMusic = async () => {
      const songs = await axios.get(
        "https://musica-api.up.railway.app/popular"
      );
      setPopular(songs.data);
    };
    makeRequest();
    popularMusic();
  }, []);
  const artistFilter = newRelease.filter((artist) => {
    return artist.artist.toLowerCase().includes(searchArtist.toLowerCase());
  });
  const popularArtistFilter = popular.filter((artist) => {
    return artist.artist.toLowerCase().includes(searchArtist.toLowerCase());
  });
  return (
    <>
      {title === "New Releases." ? (
        <Container>
          <Title>{title}</Title>
          <SongContainer>
            {artistFilter.map((newSong) => (
              <NewRelease
                key={newSong.id}
                newSong={newSong}
                timeUpdate={timeUpdate}
              />
            ))}
          </SongContainer>
        </Container>
      ) : (
        <Container>
          <Title>{title}</Title>
          <SongContainer>
            {popularArtistFilter.map((newSong) => (
              <NewRelease
                key={newSong.id}
                newSong={newSong}
                timeUpdate={timeUpdate}
              />
            ))}
          </SongContainer>
        </Container>
      )}
    </>
  );
};

export default NewReleases;
