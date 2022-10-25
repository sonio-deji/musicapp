import styled from "styled-components";

const Container = styled.div`
  max-width: 683px;
  border-radius: 40px;
  background-color: #609eaf;
  height: 373px;
  display: flex;
  color: white;
  background-image: url("icons-and-images/playlistbg.svg");
  background-position: right;
  background-repeat: no-repeat;
  @media (max-width: 1105px) {
    max-width: 90%;
  }
  @media (max-width: 414px) {
    max-width: 367px;
    height: 503px;
  }
`;
const Left = styled.div`
  flex: 5;
  padding-left: 45px;
  padding-top: 10px;
`;
const Right = styled.div`
  flex: 5;
`;
const Subtitle = styled.p`
  font-size: 12px;
  font-weight: 400;
  margin-bottom: 85px;
  @media (max-width: 1219px) {
    font-size: 15px;
  }
`;
const Playlist = styled.div`
  font-size: 35px;
  font-weight: 700;
  margin-bottom: 6px;
  @media (max-width: 414px) {
    margin-top: 256px;
  }
`;
const PlaylistSongs = styled.p`
  font-size: 14px;
  max-width: 276px;
  line-height: 16.8px;
  font-weight: 400;
  margin-bottom: 75px;
`;
const Likes = styled.div`
  display: flex;
  width: 196px;
  align-items: center;
  justify-content: space-between;
`;
const User = styled.img`
  width: 22px;
  height: 22px;
  filter: drop-shadow(-2px 0px 2px rgba(0, 0, 0, 0.38));
`;

const LikeIcon = styled.img``;
const LikeCount = styled.p``;
const PlaylistImage = styled.img`
  width: auto;
  @media (max-width: 703px) {
    display: none;
  }
`;

const CuratedPlaylist = () => {
  return (
    <Container>
      <Left>
        <Subtitle>Curated playlist</Subtitle>
        <Playlist>R & B Hits</Playlist>
        <PlaylistSongs>
          All mine, Lie again, Petty call me everyday, Out of time, No love, Bad
          habit, and so much more
        </PlaylistSongs>
        <Likes>
          <User src="icons-and-images/Ellipse.png" />

          <LikeIcon src="icons-and-images/likes.png" />

          <LikeCount>33K Likes</LikeCount>
        </Likes>
      </Left>
      <Right>
        <PlaylistImage src="icons-and-images/profileimg.png" />
      </Right>
    </Container>
  );
};

export default CuratedPlaylist;
