import { ActionIcon } from "@mantine/core";
import { keyframes, styled } from "@stitches/react";
import { useEffect, useState } from "react";
import { ChevronUp } from "tabler-icons-react";

const backOnTopAnimation = keyframes({
  from: { transform: "translateY(3px)" },
  to: { transform: "translateY(-1px)" },
});

const StyledIcon = styled(ChevronUp, {
  animation: `${backOnTopAnimation} 0.5s alternate ease infinite`,
});

const BackOnTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [breakpoint, setBreakpoint] = useState(0);

  useEffect(() => {
    const home = document.querySelector(".Home") as HTMLElement;
    home !== null ? setBreakpoint(home.offsetHeight) : null;
  }, []);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > breakpoint / 2) {
      setIsVisible(true);
    } else if (scrolled <= breakpoint / 2) {
      setIsVisible(false);
    }
  };

  window.addEventListener("scroll", toggleVisible);

  const scrollButton = (): JSX.Element => {
    return (
      <ActionIcon
        color={"blue"}
        radius={"xl"}
        size={"xl"}
        variant={"filled"}
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          zIndex: "1",
        }}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <StyledIcon />
      </ActionIcon>
    );
  };

  return isVisible ? scrollButton() : <div></div>;
};

export default BackOnTop;
