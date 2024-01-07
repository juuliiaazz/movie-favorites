import { LogoDiv, LogoSpan, LogoTitle } from "../ui/Logo";

export function Logo() {
  return (
    <LogoDiv>
      <LogoSpan>
        <box-icon
          type="solid"
          name="camera-movie"
          color="white"
          size="lg"
        ></box-icon>
      </LogoSpan>
      <LogoTitle>Movie Favorites</LogoTitle>
    </LogoDiv>
  );
}
