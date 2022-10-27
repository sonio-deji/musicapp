import styled from "styled-components";
import Sidebar from "../component/Sidebar";
import SearchBar from "../component/SearchBar";
import ChartMiddle from "../component/ChartMiddle";
import ChartSongs from "../component/ChartSongs";
import AudioPlayer from "../component/AudioPlayer";
import MobileSidebar from "../component/MobileSidebar";
import { useCycle } from "framer-motion";
import { useState } from "react";
const Container = styled.div`
  display: flex;
  padding: 20px 20px 650px 20px;
  background-image: linear-gradient(
      rgba(29, 33, 35, 0.8),
      rgba(29, 33, 35, 0.8),
      rgba(29, 33, 35, 1)
    ),
    url("/icons-and-images/main-lead.png");
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 100vh;
  position: relative;
`;
const Left = styled.div`
  flex: 0.5;
  @media (max-width: 950px) {
    flex: unset;
  }
`;
const Right = styled.div`
  flex: 9;
  margin-left: 25px;
  width: auto;
  @media (max-width: 950px) {
    margin-left: 0;
    flex: unset;
  }
`;

const Chart = () => {
  const [menu, setMenu] = useCycle(false, true);
  const [songLength, setSongLength] = useState(0);

  return (
    <Container>
      <MobileSidebar menu={menu} setMenu={setMenu} />
      <Left>
        <Sidebar />
      </Left>
      <Right>
        <SearchBar setMenu={setMenu} />
        <ChartMiddle songLength={songLength} />
        <ChartSongs setSongLength={setSongLength} />
      </Right>
      <AudioPlayer />
    </Container>
  );
};

export default Chart;
