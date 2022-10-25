import styled from "styled-components";
import Sidebar from "../component/Sidebar";
import SearchBar from "../component/SearchBar";
import CuratedPlaylist from "../component/CuratedPlaylist";
import TopCharts from "../component/TopCharts";
import NewReleases from "../component/NewReleases";
import AudioPlayer from "../component/AudioPlayer";
import MobileSidebar from "../component/MobileSidebar";
import { useState } from "react";
import { useCycle } from "framer-motion";

const Container = styled.main`
  background-color: #1d2123;
  display: flex;
  padding: 20px 20px 250px 20px;
  min-height: 100vh;
`;
const Left = styled.div`
  flex: 1;
  @media (max-width: 950px) {
    flex: unset;
  }
`;
const Right = styled.div`
  flex: 9;
  padding-left: 24px;
  @media (max-width: 950px) {
    padding-left: unset;
    flex: unset;
    width: 100%;
    margin: auto;
  }
`;
const Middle = styled.div`
  margin-top: 49px;
  display: flex;

  @media (max-width: 1105px) {
    flex-direction: column;
  }
`;

const Home = () => {
  const [search, setSearch] = useState("");
  const [menu, setMenu] = useCycle(false, true);
  const [time, setTime] = useState(0);
  const handleSearch = (e) => {
    setSearch(e.target.value);
  };
  const timeUpdate = (e) => {
    setTime(e.target.currentTime);
  };
  return (
    <Container>
      <MobileSidebar menu={menu} setMenu={setMenu} />
      <Left>
        <Sidebar />
      </Left>
      <Right>
        <SearchBar setSearchArtist={handleSearch} setMenu={setMenu} />
        <Middle>
          <CuratedPlaylist />
          <TopCharts />
        </Middle>
        <NewReleases
          title={"New Releases."}
          searchArtist={search}
          timeUpdate={timeUpdate}
        />
        <NewReleases
          title={"Popular in your area"}
          searchArtist={search}
          timeUpdate={timeUpdate}
        />
        <AudioPlayer timeUpdate={timeUpdate} time={time} />
      </Right>
    </Container>
  );
};

export default Home;
