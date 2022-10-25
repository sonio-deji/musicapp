import styled from "styled-components";
import CollectionSong from "./CollectionSong";
import { useSelector } from "react-redux";

const Container = styled.div`
  margin-top: 23px;
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
`;
const NoCollection = styled.p`
  font-weight: 700;
  margin-top: 34px;
  font-size: 30px;
  color: rgba(239, 238, 224, 1);
  text-align: center;
  max-width: 70%;
`;
const CollectionSongs = () => {
  const collection = useSelector((state) => state.collection.collections);
  return (
    <>
      {collection.length < 1 ? (
        <NoCollection>YOUR COLLECTION IS EMPTY, ADD TO COLLECTION</NoCollection>
      ) : (
        <Container>
          {collection.map((song) => (
            <CollectionSong key={song.id} song={song} />
          ))}
        </Container>
      )}
    </>
  );
};

export default CollectionSongs;
