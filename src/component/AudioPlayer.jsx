import styled from "styled-components";
import { useSelector } from "react-redux";
import { useState } from "react";

const Container = styled.div`
  position: fixed;
  bottom: 0;
  z-index: 5555;
  left: 20%;
  right: 20%;
  background-color: rgba(29, 33, 35, 0.9);
  filter: drop-shadow(0px -25px 100px rgba(16, 16, 16, 0.51));

  @media (max-width: 1280px) {
    left: 0;
    right: 0;
  }
`;
const AudioContainer = styled.div`
  height: 100%;
  max-width: 1125px;
  padding: 20px;
  margin: auto;
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  @media (max-width: 414px) {
    align-items: center;
    width: 358px;
    margin: 0 auto;
  }
`;
const SongInfo = styled.div`
  display: flex;
  margin-top: 32px;
`;
const SongImg = styled.img`
  width: 80px;
  border-radius: 20px;
`;
const SongTitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
const SongTitle = styled.span`
  font-weight: 700;
  font-size: 14px;
  color: rgba(255, 255, 255, 1);
`;
const Artiste = styled.span`
  color: rgba(255, 255, 255, 0.44);
  font-size: 10px;
  font-weight: 700;
`;
const Player = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 242px;
  height: 25px;
  margin-top: 25px;
  @media (max-width: 414px) {
    width: 78.92px;
  }
`;
const PlayerIcon = styled.img`
  width: 16px;
  height: 16px;
  @media (max-width: 414px) {
    display: ${(props) => props.type === "mobileIcons" && "none"};
    width: ${(props) => props.type === "next" && "21.82px"};
    height: ${(props) => props.type === "next" && "21.82px"};
  }
`;
const PlayButton = styled.button`
  background-color: #facd66;
  width: 25px;
  height: 25.55px;
  border-radius: 50%;
  border: none;
  cursor: pointer;
  box-shadow: 0px 0px 18px rgba(255, 255, 255, 0.3);
  @media (max-width: 414px) {
    width: 34.1px;
    height: 34.84px;
  }
`;
const Play = styled.img``;
const Volume = styled.input`
  width: 160px;
  background-color: #1e1e1e;
  display: block;
  height: 4px;
  border-radius: 50%;
  cursor: pointer;
  &::-moz-range-track {
    background-color: rgba(255, 255, 255, 0.04);
    border-radius: 50%;
  }
  &::-moz-range-progress {
    background-color: rgba(250, 205, 102, 1);
    height: 4px;
  }
  &::-moz-range-thumb {
    background-color: rgba(250, 205, 102, 1);
    width: 8px;
    height: 8px;
    border-radius: 50%;
    &:hover {
      width: 20px;
      height: 20px;
    }
  }
  &::-webkit-slider-thumb {
    background-color: rgba(250, 205, 102, 1);
    width: 8px;
    height: 8px;
    border-radius: 50%;
    &:hover {
      width: 20px;
      height: 20px;
    }
  }
  &::-webkit-progress-bar {
    background-color: rgba(250, 205, 102, 1);
    height: 4px;
  }
  &::-webkit-slider-runnable-track {
    background-color: rgba(255, 255, 255, 0.04);
    border-radius: 50%;
  }
  &::-ms-track {
    background-color: rgba(255, 255, 255, 0.04);
    border-radius: 50%;
  }
  &::-ms-thumb {
    background-color: rgba(250, 205, 102, 1);
    width: 8px;
    height: 8px;
    border-radius: 50%;
    &:hover {
      width: 20px;
      height: 20px;
    }
  }
  @media (max-width: 414px) {
    display: none;
  }
`;
const SeekContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
  justify-content: center;
`;
const Seek = styled.input`
  width: 749px;
  background-color: #1e1e1e;
  display: block;
  height: 4px;
  border-radius: 50%;
  cursor: pointer;
  &::-moz-range-track {
    background-color: rgba(255, 255, 255, 0.04);
    border-radius: 50%;
  }
  &::-moz-range-progress {
    background-color: rgba(250, 205, 102, 1);
    height: 4px;
  }
  &::-moz-range-thumb {
    background-color: rgba(250, 205, 102, 1);
    width: 8px;
    height: 8px;
    border-radius: 50%;
    &:hover {
      width: 20px;
      height: 20px;
    }
  }
  &::-webkit-slider-thumb {
    background-color: rgba(250, 205, 102, 1);
    width: 8px;
    height: 8px;
    border-radius: 50%;
    &:hover {
      width: 20px;
      height: 20px;
    }
  }
  &::-webkit-progress-bar {
    background-color: rgba(250, 205, 102, 1);
    height: 4px;
  }
  &::-webkit-slider-runnable-track {
    background-color: rgba(255, 255, 255, 0.04);
    border-radius: 50%;
  }
  &::-ms-track {
    background-color: rgba(255, 255, 255, 0.04);
    border-radius: 50%;
  }
  &::-ms-thumb {
    background-color: rgba(250, 205, 102, 1);
    width: 8px;
    height: 8px;
    border-radius: 50%;
    &:hover {
      width: 20px;
      height: 20px;
    }
  }
  @media (max-width: 414px) {
    display: none;
  }
`;
const VolumeSection = styled.div`
  display: flex;
  align-items: center;
  @media (max-width: 414px) {
    display: none;
  }
`;

const AudioPlayer = ({ timeUpdate, time, type }) => {
  const [volume, setVolume] = useState(0);
  const newSong = useSelector((state) => state.newRelease.songs);
  const handleVolume = (e) => {
    const audio = document.getElementById(newSong.id);
    audio.volume = volume;
    setVolume(e.target.value);
  };
  const playSong = () => {
    const audio = document.getElementById(newSong.id);
    if (audio.play()) {
      audio.pause();
    } else {
      audio.play();
    }
  };
  return (
    <Container>
      <AudioContainer>
        <Wrapper>
          <SongInfo>
            <SongImg src={newSong.cover} />
            <SongTitleWrapper>
              <SongTitle>{newSong.title}</SongTitle>
              <Artiste>{newSong.artist}</Artiste>
            </SongTitleWrapper>
          </SongInfo>
          <Player>
            <PlayerIcon
              type="mobileIcons"
              src="/icons-and-images/shuffle.png"
            />
            <PlayerIcon
              type="mobileIcons"
              src="/icons-and-images/previous.png"
            />
            <PlayButton onClick={playSong}>
              <Play src="/icons-and-images/vector.png" />
            </PlayButton>
            <PlayerIcon type="next" src="/icons-and-images/next.png" />
            <PlayerIcon
              type="mobileIcons"
              src="/icons-and-images/repeate-one.png"
            />
          </Player>
          <VolumeSection>
            <PlayerIcon
              type="mobileIcons"
              src="/icons-and-images/volume-high.png"
            />
            <Volume
              type="range"
              step={"0.01"}
              max={1}
              min={0}
              value={volume}
              onChange={handleVolume}
            />
          </VolumeSection>
        </Wrapper>
        <SeekContainer>
          <Seek
            type="range"
            controls
            min={0}
            max={newSong.duration}
            value={time}
            step="0.01"
            onChange={timeUpdate}
          />
        </SeekContainer>
      </AudioContainer>
    </Container>
  );
};

export default AudioPlayer;
