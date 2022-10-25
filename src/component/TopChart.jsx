import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addLiked } from "../redux/likedSongs";
import { useState } from "react";
const Container = styled.div`
  width: 417px;
  background-color: #1a1e1f;
  border-radius: 20px;
  display: flex;
  align-items: center;
  margin-bottom: 12px;
  height: 93px;
  padding-left: 17px;
  justify-content: space-between;
  padding-right: 30px;
  @media (max-width: 1105px) {
    width: 95%;
  }
  @media (max-width: 477px) {
    min-width: 323px;
    height: 233px;
    padding-right: 14px;
    padding-left: 14px;
    align-items: unset;
    padding-top: 15px;
    padding-top: 23px;
  }
`;
const ImgSection = styled.div`
  display: flex;
  @media (max-width: 477px) {
    flex-direction: column;
  }
`;
const Image = styled.img`
  width: 63px;
  height: 63px;
  border-radius: 10px;
  @media (max-width: 477px) {
    width: 108px;
    height: unset;
  }
`;
const SongDetails = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 14px;
  cursor: pointer;

  @media (max-width: 477px) {
    margin-left: 0px;
  }
`;
const SongTitle = styled.span`
  font-size: 17px;
  color: rgba(255, 255, 255, 1);
  margin-bottom: 4px;
`;
const Artiste = styled.span`
  font-size: 12px;
  color: rgba(255, 255, 255, 0.5);
  margin-bottom: 8px;
`;
const Duration = styled.span`
  font-size: 12px;
  color: rgba(255, 255, 255, 1);
`;
const Like = styled.div`
  border: 1px solid rgba(255, 255, 255, 0.11);
  width: 37px;
  height: 37px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const TopChart = ({ chart }) => {
  const [liked, setLiked] = useState("none");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChart = () => {
    navigate("/chart", { state: { chart } });
  };
  const handleLike = () => {
    dispatch(addLiked({ ...chart }));

    if (liked === "none") {
      setLiked("red");
    } else {
      setLiked("none");
    }
  };
  return (
    <Container>
      <ImgSection>
        <Image src={chart.cover} />
        <SongDetails onClick={handleChart}>
          <SongTitle>{chart.title}</SongTitle>
          <Artiste>{chart.artist}</Artiste>
          <Duration>3:13</Duration>
        </SongDetails>
      </ImgSection>

      <Like onClick={handleLike}>
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill={liked}
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M1.15388 7.69874C0.349134 5.18624 1.28963 2.31449 3.92738 1.46474C5.31488 1.01699 6.84638 1.28099 7.99988 2.14874C9.09113 1.30499 10.6789 1.01999 12.0649 1.46474C14.7026 2.31449 15.6491 5.18624 14.8451 7.69874C13.5926 11.6812 7.99988 14.7487 7.99988 14.7487C7.99988 14.7487 2.44838 11.7277 1.15388 7.69874Z"
            stroke="#FACD66"
            strokeWidth="0.5625"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </Like>
    </Container>
  );
};

export default TopChart;
