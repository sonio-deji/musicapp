import styled from "styled-components";
import TopChart from "./TopChart";
import { useState, useEffect } from "react";
import axios from "axios";

const Container = styled.div`
  margin-left: 20px;
  margin: auto;
  @media (max-width: 1105px) {
    margin-top: 46px;
    width: 95%;
  }
`;
const Title = styled.div`
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 14px;
  color: rgba(239, 238, 224, 1);
`;
const SongContainer = styled.div`
  @media (max-width: 477px) {
    display: flex;
    overflow-x: scroll;
    gap: 31px;
    max-width: 85vw;
  }
`;
const TopCharts = () => {
  const [topSongs, setTopSongs] = useState([]);

  useEffect(() => {
    const topSongsRequest = async () => {
      try {
        const songs = await axios.get(
          "https://musica-api.up.railway.app/popular"
        );
        setTopSongs(songs.data);
      } catch (error) {}
    };
    topSongsRequest();
  }, []);
  return (
    <Container>
      <Title>Top charts</Title>
      <SongContainer>
        {topSongs.slice(0, 3).map((chart) => (
          <TopChart key={chart.id} chart={chart} />
        ))}
      </SongContainer>
    </Container>
  );
};

export default TopCharts;
