import styled from "styled-components";
import { useDispatch } from "react-redux";
import { addNowPlaying } from "../redux/nowPlayingRedux";

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
const NewRelease = ({ newSong }) => {
  const dispatch = useDispatch();
  const playSong = () => {
    dispatch(addNowPlaying(newSong));
  };
  return (
    <Container onClick={playSong}>
      <Image src={newSong.cover} />
      <Title>{newSong.title}</Title>
    </Container>
  );
};

export default NewRelease;
