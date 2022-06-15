import { ActionIcon } from "@mantine/core";
import { keyframes, styled } from "@stitches/react";
import { useEffect, useState } from "react";
import { ChevronUp } from "tabler-icons-react";
import "./style.css";

const backOnTopAnimation = keyframes({
  from: { transform: "translateY(3px)" },
  to: { transform: "translateY(-1px)" },
});

const StyledIcon = styled(ChevronUp, {
  animation: `${backOnTopAnimation} 0.5s alternate ease infinite`,
});

const BackOnTop = () => {
  const [backOnTopClassName, setBackOnTopClassName] = useState("back-on-top");
  const [breakpoint, setBreakpoint] = useState(0);

  useEffect(() => {
    const home = document.querySelector(".Home") as HTMLElement;
    home !== null ? setBreakpoint(home.offsetHeight) : null;
  }, []);

  console.log(breakpoint);

  const toggleVisible = () => {
    const scrolled = window.pageYOffset;
    if (scrolled >= breakpoint / 2) {
      setBackOnTopClassName("back-on-top enterAnimation");
    } else if (backOnTopClassName === "back-on-top enterAnimation") {
      setBackOnTopClassName("back-on-top exitAnimation");
    } else if (
      backOnTopClassName !== "back-on-top enterAnimation" &&
      backOnTopClassName !== "back-on-top exitAnimation"
    ) {
      setBackOnTopClassName("back-on-top");
    }
  };

  window.addEventListener("scroll", toggleVisible);

  return (
    <ActionIcon
      className={backOnTopClassName}
      color={"blue"}
      radius={"xl"}
      size={"xl"}
      variant={"filled"}
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    >
      <StyledIcon />
    </ActionIcon>
  );
};

export default BackOnTop;
