import styled from "styled-components";
import { useDispatch } from "react-redux";
import { addSongs, removeSong } from "../redux/newReleaseRedux";
import { useState } from "react";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
const Image = styled.img`
  width: 153px;
  height: 153px;
  border-radius: 25px;
  object-fit: cover;
  cursor: pointer;
`;
const Title = styled.span`
  margin-top: 5px;
  font-size: 12px;
  color: rgba(255, 255, 255, 1);
`;
const NewRelease = ({ newSong, timeUpdate }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const dispatch = useDispatch();

  const playSong = () => {
    const audioTag = document.getElementById(newSong.id);
    const duration = audioTag.duration;
    if (isPlaying === false) {
      audioTag.play();
      setIsPlaying(true);
      dispatch(addSongs({ ...newSong, duration }));
    } else {
      audioTag.pause();
      setIsPlaying(false);
      dispatch(removeSong());
    }
  };
  return (
    <Container onClick={playSong}>
      <Image src={newSong.cover} />
      <Title>{newSong.title}</Title>
      <audio id={newSong.id} src={newSong.audio} onTimeUpdate={timeUpdate} />
    </Container>
  );
};

export default NewRelease;
