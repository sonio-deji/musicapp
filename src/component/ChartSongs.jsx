import styled from "styled-components";
import ChartSong from "./ChartSong";
import { useState, useEffect } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";

const Container = styled.div``;

const ChartSongs = ({ setSongLength }) => {
  const location = useLocation();
  const id = location.state.chart.id.split("-")[1];
  const [songs, setsongs] = useState([]);
  useEffect(() => {
    const makeRequest = async () => {
      const song = await axios.get(
        "https://musica-api.up.railway.app/playlist"
      );
      setsongs(song.data[id].files);
    };
    makeRequest();
    setSongLength(songs.length);
  }, [id, setSongLength, songs.length]);
  return (
    <Container>
      {songs.map((song) => (
        <ChartSong key={song.id} song={song} />
      ))}
    </Container>
  );
};

export default ChartSongs;
