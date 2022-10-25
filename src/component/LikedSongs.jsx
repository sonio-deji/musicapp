import styled from "styled-components";
import { useSelector } from "react-redux";
import LikedSong from "./LikedSong";

const Container = styled.div`
  display: flex;
  margin-top: 45px;
  flex-wrap: wrap;
  gap: 30px;
`;
const LikedSongs = () => {
  const songs = useSelector((state) => state.likedSongs.likedSongs);
  return (
    <Container>
      {songs.map((song) => (
        <LikedSong key={song.id} song={song} />
      ))}
    </Container>
  );
};

export default LikedSongs;
