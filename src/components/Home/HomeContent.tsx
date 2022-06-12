import { Button } from "@mantine/core";
import { useContext } from "react";
import { MoneyContext } from "../../context/moneyContext";
import { scrollToElement } from "../../utils/scrollToElement";
import {
  StyledButtonContainer,
  StyledContentContainer,
  StyledTitle,
} from "./style";

const HomeContent = () => {
  const { display, setDisplay } = useContext(MoneyContext);

  const handleNewProfile = async () => {
    console.log("New Profile");
    setDisplay({
      ...display,
      Settings: true,
    });
    scrollToElement(".Settings");
  };

  return (
    <StyledContentContainer>
      <StyledTitle>💸 Money</StyledTitle>
      <StyledButtonContainer>
        <Button size="lg" onClick={handleNewProfile}>
          Créer un nouveau profil
        </Button>
        <Button size="lg">Charger un profil</Button>
      </StyledButtonContainer>
    </StyledContentContainer>
  );
};

export default HomeContent;
