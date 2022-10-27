import styled from "styled-components";
import { useSelector } from "react-redux";
import { useState, useEffect, useRef } from "react";
const Container = styled.div`
  position: fixed;
  bottom: 0;
  z-index: 5555;
  left: 0;
  right: 0;
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
  @media (max-width: 414px) {
    width: unset;
    padding: 0px;
  }
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: 414px) {
    margin: 0 auto;
  }
`;
const SongInfo = styled.div`
  display: flex;
  margin-top: 32px;
`;
const SongImg = styled.img`
  max-width: 80px;
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
  @media (max-width: 414px) {
    font-size: 10px;
  }
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
  cursor: pointer;
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
`;
const SeekContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
  justify-content: center;
  max-width: 749px;
  margin: auto;
  cursor: pointer;
`;
const Seek = styled.input`
  width: 100%;
  background-color: #1e1e1e;
  display: block;
  height: 9px;
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
`;
const VolumeSection = styled.div`
  display: flex;
  align-items: center;
  @media (max-width: 414px) {
    display: none;
  }
`;

const AudioPlayer = () => {
  const [volume, setVolume] = useState(1);
  const [isPlaying, setIsPlaying] = useState(false);
  const [shuffle, setShuffle] = useState(false);

  const [songIndex, setSongIndex] = useState(0);
  const [duration, setDuration] = useState(0);
  const [loop, setLoop] = useState(false);
  const [time, setTime] = useState(0);

  const audioRef = useRef();
  const seek = useRef();
  const newSong = useSelector((state) => state.nowPlaying);
  const song = newSong.nowPlaying[songIndex];

  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying]);
  const handleVolume = (e) => {
    audioRef.current.volume = volume;
    setVolume(e.target.value);
  };
  const onPlaying = () => {
    const songDuration = audioRef.current.duration;
    const ct = audioRef.current.currentTime;
    setTime(ct);
    setDuration(songDuration);
  };
  const progress = (e) => {
    audioRef.current.currentTime = time;
    setTime(e.target.value);
  };
  const checkWidth = (e) => {
    let width = seek.current.clientWidth;
    const offset = e.nativeEvent.offsetX;
    const divProgress = (offset / width) * 100;
    audioRef.current.currentTime = (divProgress / 100) * duration;
  };
  const nextButton = () => {
    if (shuffle) {
      setSongIndex(Math.floor(Math.random() * newSong.nowPlaying.length));
    }
    const index = newSong.nowPlaying.findIndex((item) => item.id === song.id);
    if (index === newSong.nowPlaying.length - 1) {
      setSongIndex(0);
    } else {
      setSongIndex(index + 1);
    }
  };
  const prevButton = () => {
    if (shuffle) {
      setSongIndex(Math.floor(Math.random() * newSong.nowPlaying.length));
    }
    const index = newSong.nowPlaying.findIndex((item) => item.id === song.id);
    if (songIndex === 0) {
      setSongIndex(newSong.nowPlaying.length - 1);
    } else {
      setSongIndex(index - 1);
    }
  };
  const loopMusic = () => {
    setLoop(!loop);
    audioRef.current.loop = loop;
  };
  const shuffleMusic = () => {
    setSongIndex(Math.floor(Math.random() * newSong.nowPlaying.length));
    setShuffle(!shuffle);
  };
  const playSong = () => {
    setIsPlaying(!isPlaying);
  };
  return (
    <Container>
      <AudioContainer>
        <Wrapper>
          <SongInfo>
            <SongImg src={song === undefined ? "" : song.cover} />
            <SongTitleWrapper>
              <SongTitle>{song === undefined ? "" : song.title}</SongTitle>
              <Artiste>{song === undefined ? "" : song.artist}</Artiste>
            </SongTitleWrapper>
          </SongInfo>
          <Player>
            <PlayerIcon
              type="mobileIcons"
              src="/icons-and-images/shuffle.png"
              onClick={shuffleMusic}
            />
            <PlayerIcon
              type="mobileIcons"
              src="/icons-and-images/previous.png"
              onClick={prevButton}
            />
            <PlayButton onClick={playSong}>
              {isPlaying ? (
                <span style={{ color: "white" }} className="material-icons">
                  pause
                </span>
              ) : (
                <Play src="/icons-and-images/vector.png" />
              )}
            </PlayButton>
            <PlayerIcon
              type="next"
              src="/icons-and-images/next.png"
              onClick={nextButton}
            />
            <PlayerIcon
              type="mobileIcons"
              src="/icons-and-images/repeate-one.png"
              onClick={loopMusic}
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
        <SeekContainer ref={seek} onClick={checkWidth}>
          <Seek
            type="range"
            controls
            min={0}
            max={duration}
            value={time}
            onChange={progress}
          />
        </SeekContainer>
      </AudioContainer>
      <audio
        autoPlay
        src={song === undefined ? "" : song.audio}
        id={song === undefined ? "" : song.id}
        ref={audioRef}
        onEnded={nextButton}
        onTimeUpdate={onPlaying}
      ></audio>
    </Container>
  );
};

export default AudioPlayer;
