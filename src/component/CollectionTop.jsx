import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-top: 49px;
`;
const Collection = styled.div`
  border-radius: 27px;
  padding: 10px 17px;
  font-size: 14px;
  cursor: pointer;
  transition: 0.3s all ease-in-out;
`;
const Likes = styled.div`
  border-radius: 27px;
  padding-top: 10px;
  padding-bottom: 10px;
  width: 85px;
  font-size: 14px;
  text-align: center;
  border: solid 1px #efeee0;
  cursor: pointer;
  transition: 0.3s all ease-in;
`;

const CollectionTop = (props) => {
  return (
    <Container>
      <Collection
        onClick={() => props.handleBg("collection")}
        style={{
          backgroundColor: props.collectionBg.bg,
          color: props.collectionBg.text,
        }}
      >
        My Collection
      </Collection>
      <Likes
        onClick={() => props.handleBg("likes")}
        style={{ backgroundColor: props.LikeBg.bg, color: props.LikeBg.text }}
      >
        Likes
      </Likes>
    </Container>
  );
};

export default CollectionTop;
