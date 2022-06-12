import { styled } from "@stitches/react";

export const StyledHomeContainer = styled("div", {
  position: "relative",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  width: "100vw",
  height: "100vh",
});

export const StyledButtonContainer = styled("div", {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  gap: "1rem",
});

export const StyledTitle = styled("h1", {
  marginBottom: "32px",
});

export const StyledContentContainer = styled("div", {
  position: "absolute",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  background: "rgba(255, 255, 255, 0.2)",
  backdropFilter: "blur(8px)",
  borderRadius: "8px",
  padding: "2rem",
});

export const StyledBackgroundVideo = styled("video", {
  width: "100%",
  height: "100%",
  objectFit: "cover",
  backgroundColor: "#fafafa",
  zIndex: -1,
});
