import styled from "styled-components";

const Container = styled.div`
  width: 213px;
  height: 234px;
  border-radius: 20px;
  position: relative;
  cursor: pointer;
  @media (max-width: 487px) {
    width: 359px;
    height: 234px;
  }
`;
const TextContainer = styled.div`
  position: absolute;
  bottom: 22px;
  left: 19px;
`;
const Title = styled.p`
  font-size: 24px;
  color: rgba(239, 238, 224, 1);
`;
const Artiste = styled.p`
  opacity: 0.75;
  font-size: 10px;
  color: rgba(239, 238, 224, 1);
`;
const LikedSong = ({ song }) => {
  return (
    <Container
      style={{
        background: `linear-gradient(179.89deg, rgba(0, 0, 0, 0) 0.1%, rgba(15, 18, 19, 0.85) 80.67%), url(${song.cover})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <TextContainer>
        <Title>{song.title}</Title>
        <Artiste>{song.title}</Artiste>
      </TextContainer>
    </Container>
  );
};

export default LikedSong;
