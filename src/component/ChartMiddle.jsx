import styled from "styled-components";
import { useLocation } from "react-router-dom";
import { addCollection } from "../redux/collectionRedux";
import { useDispatch } from "react-redux";
const Container = styled.div`
  display: flex;
  align-items: center;
  margin-top: 49px;
  @media (max-width: 625px) {
    flex-direction: column;
    margin-bottom: 25px;
  }
`;
const Left = styled.div`
  flex: 1;
`;
const Right = styled.div`
  margin-left: 27px;
  flex: 9;
  @media (max-width: 625px) {
    margin-left: 0px;
  }
`;
const ChartImg = styled.img`
  border-radius: 35.17px;
  width: 284px;
  @media (max-width: 625px) {
    width: 357px;
    margin: auto;
    display: block;
  }
`;
const ChartTitle = styled.p`
  font-size: 35px;
  color: rgba(164, 199, 198, 1);
  font-weight: 700;
  margin-bottom: 9px;
`;
const ChartDesc = styled.p`
  max-width: 527px;
  font-size: 14px;
  color: rgba(239, 238, 224, 1);
  margin-bottom: 10px;
  @media (max-width: 625px) {
    max-width: 100%;
  }
`;
const ChartDetails = styled.p`
  font-size: 14px;
  color: rgba(239, 238, 224, 1);
  margin-bottom: 51px;
`;
const ActionContainer = styled.div`
  max-width: 350px;
  display: flex;
  justify-content: space-between;
`;
const Action = styled.div`
  background-color: rgba(255, 255, 255, 0.07);
  border-radius: 32px;
  font-size: 12px;
  border: none;
  color: rgba(255, 255, 255, 1);
  display: flex;
  align-items: center;
  padding-left: 11px;
  padding-right: 11px;
  width: ${(props) => (props.type === "play" ? "87px" : "151px")};
  justify-content: space-between;
  cursor: pointer;
`;
const ActionImg = styled.img``;
const Like = styled.div`
  display: flex;
  align-items: center;
  padding: 11px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.07);
  backdrop-filter: blur(5px);
`;
const LikeImg = styled.img``;

const ChartMiddle = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const handleCollection = () => {
    dispatch(addCollection(location.state.chart));
  };
  return (
    <Container>
      <Left>
        <ChartImg src={location.state.chart.cover} />
      </Left>
      <Right>
        <ChartTitle>{location.state.chart.artist}</ChartTitle>
        <ChartDesc>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit
          inventore nam earum expedita eaque enim tenetur facilis sint quisquam,
          dolores esse facere, possimus saepe modi velit. Reiciendis provident
          numquam magni?
        </ChartDesc>
        <ChartDetails>64 songs - 16 hrs+</ChartDetails>
        <ActionContainer>
          <Action type="play">
            <ActionImg src="/icons-and-images/play.png" />
            Play all
          </Action>
          <Action type="collection" onClick={handleCollection}>
            <ActionImg src="/icons-and-images/music-square-add.png" />
            Add to collection
          </Action>
          <Like>
            <LikeImg src="/icons-and-images/redlike.png" />
          </Like>
        </ActionContainer>
      </Right>
    </Container>
  );
};

export default ChartMiddle;
