import styled from "styled-components";
import { addNowPlaying } from "../redux/nowPlayingRedux";
import { useDispatch } from "react-redux";
const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  height: 56px;
  background-color: rgba(51, 55, 59, 0.37);
  border-radius: 15px;
  cursor: pointer;
  margin-bottom: 10px;
`;
const ImgContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  flex: 0.7 0;
`;
const Image = styled.img`
  width: 39px;
  height: 39px;
`;
const LikeButton = styled.svg`
  @media (max-width: 572px) {
    display: none;
  }
`;
const SongContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex: 6 0;
  padding-left: 79px;
  @media (max-width: 572px) {
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    text-align: left;
    padding-left: 14px;
  }
`;
const SongTitle = styled.p`
  color: rgba(255, 255, 255, 1);
  font-size: 12px;
`;
const TypeContainer = styled.div`
  width: 50%;
  @media (max-width: 572px) {
    width: unset;
  }
`;
const Type = styled.p`
  color: rgba(255, 255, 255, 1);
  font-size: 12px;
  text-align: center;
`;
const DurationContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex: 3 0;
  @media (max-width: 572px) {
    flex-direction: column-reverse;
    align-items: flex-end;
  }
`;
const Duration = styled.p`
  color: rgba(255, 255, 255, 1);
  font-size: 12px;
`;
const Menu = styled.svg``;

const ChartSong = ({ song }) => {
  const dispatch = useDispatch();
  const playMusic = () => {
    dispatch(addNowPlaying(song));
  };

  return (
    <Container onClick={playMusic}>
      <ImgContainer>
        <Image src={song.cover} />
        <LikeButton
          width="18"
          height="16"
          viewBox="0 0 18 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M1.43496 8.37182C0.540791 5.58016 1.58662 2.10933 4.51746 1.16599C6.05912 0.668493 7.96162 1.08349 9.04246 2.57433C10.0616 1.02849 12.0191 0.671826 13.5591 1.16599C16.4891 2.10933 17.5408 5.58016 16.6475 8.37182C15.2558 12.7968 10.4 15.1018 9.04246 15.1018C7.68579 15.1018 2.87329 12.8485 1.43496 8.37182Z"
            stroke="#EFEEE0"
            strokeWidth="0.625"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12.1572 4.30328C13.163 4.40662 13.7922 5.20412 13.7547 6.32162"
            stroke="#EFEEE0"
            strokeWidth="0.625"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </LikeButton>
      </ImgContainer>
      <SongContainer>
        <SongTitle>{song.artist}</SongTitle>
        <TypeContainer>
          <Type>{song.title}</Type>
        </TypeContainer>
      </SongContainer>
      <DurationContainer>
        <Duration>{song.duration}</Duration>
        <Menu
          width="17"
          height="17"
          viewBox="0 0 17 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8.25782 8.94595C8.63788 8.94595 8.94598 8.63785 8.94598 8.25779C8.94598 7.87774 8.63788 7.56964 8.25782 7.56964C7.87777 7.56964 7.56967 7.87774 7.56967 8.25779C7.56967 8.63785 7.87777 8.94595 8.25782 8.94595Z"
            stroke="#FACD66"
            strokeWidth="1.3763"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M8.25782 4.12887C8.63788 4.12887 8.94598 3.82077 8.94598 3.44072C8.94598 3.06066 8.63788 2.75256 8.25782 2.75256C7.87777 2.75256 7.56967 3.06066 7.56967 3.44072C7.56967 3.82077 7.87777 4.12887 8.25782 4.12887Z"
            stroke="#FACD66"
            strokeWidth="1.3763"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M8.25782 13.763C8.63788 13.763 8.94598 13.4549 8.94598 13.0749C8.94598 12.6948 8.63788 12.3867 8.25782 12.3867C7.87777 12.3867 7.56967 12.6948 7.56967 13.0749C7.56967 13.4549 7.87777 13.763 8.25782 13.763Z"
            stroke="#FACD66"
            strokeWidth="1.3763"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </Menu>
      </DurationContainer>
    </Container>
  );
};

export default ChartSong;
