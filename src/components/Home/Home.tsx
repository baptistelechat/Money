import { useContext } from "react";
import video from "../../assets/video/Graph.mp4";
import { MoneyContext } from "../../context/moneyContext";
import HomeContent from "./HomeContent";
import { StyledHomeContainer, StyledBackgroundVideo } from "./style";

const Home = () => {
  const { display } = useContext(MoneyContext);

  return (
    <StyledHomeContainer
      className="Home"
      style={{
        display: display.Home ? "flex" : "none",
      }}
    >
      <StyledBackgroundVideo autoPlay muted loop>
        <source src={video} type="video/mp4" />
        Sorry, your browser doesn't support embedded videos.
      </StyledBackgroundVideo>
      <HomeContent />
    </StyledHomeContainer>
  );
};

export default Home;
