import styled from "styled-components";
import CollectionSongs from "../component/CollectionSongs";
import CollectionTop from "../component/CollectionTop";
import MobileSidebar from "../component/MobileSidebar";
import SearchBar from "../component/SearchBar";
import Sidebar from "../component/Sidebar";
import { useCycle } from "framer-motion";
import { useState } from "react";
import LikedSongs from "../component/LikedSongs";

const Container = styled.div`
  padding: 20px 20px 250px 20px;
  display: flex;
  background: #1d2123;
  height: 100vh;
`;
const Left = styled.div`
  flex: 1;
  @media (max-width: 950px) {
    flex: unset;
  }
`;
const Right = styled.div`
  flex: 9;
  margin-left: 25px;
  padding-right: 20px;
  overflow: hidden;
  @media (max-width: 950px) {
    margin-left: 0px;
    flex: unset;
  }
`;
const LikeContainer = styled.div`
  min-width: 100vw;
`;
const CollectionContainer = styled.div`
  min-width: 100vw;
`;
const Slide = styled.div`
  display: flex;
  width: 90vw;
  transition: all 0.5s ease-in-out;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
`;
const Collection = () => {
  const [menu, setMenu] = useCycle(false, true);
  const [collectionBg, setCollectionBg] = useState({
    bg: "#facd66",
    text: "",
  });
  const [LikeBg, setLike] = useState({
    bg: "",
    text: "rgba(239, 238, 224, 1)",
  });
  const [slideIndex, setSlideIndex] = useState(0);

  const handleBg = (type) => {
    if (type === "likes") {
      setSlideIndex(slideIndex + 1);
      setCollectionBg({ bg: "", text: "rgba(239, 238, 224, 1)" });
      setLike({ bg: "#facd66", text: "black" });
    } else {
      setLike({ bg: "", text: "rgba(239, 238, 224, 1)" });
      setCollectionBg({ bg: "#facd66", text: "" });
      setSlideIndex(slideIndex - 1);
    }
  };
  return (
    <Container>
      <MobileSidebar menu={menu} setMenu={setMenu} />
      <Left>
        <Sidebar />
      </Left>
      <Right>
        <SearchBar setMenu={setMenu} />
        <CollectionTop
          collectionBg={collectionBg}
          handleBg={handleBg}
          LikeBg={LikeBg}
        />
        <Slide slideIndex={slideIndex}>
          <CollectionContainer>
            <CollectionSongs />
          </CollectionContainer>
          <LikeContainer>
            <LikedSongs />
          </LikeContainer>
        </Slide>
      </Right>
    </Container>
  );
};

export default Collection;
