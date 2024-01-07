import { useReducer } from "react";
import BoxDiv from "../ui/Box";
import { Button } from "../ui/Button";

export function MovieBox({ children }) {
  const [isClosed, toggleIsClosed] = useReducer((state) => {
    return !state;
  }, false);

  return (
    <BoxDiv>
      <Button type="toggle" onClick={toggleIsClosed}>
        {isClosed ? "-" : "+"}
      </Button>
      {!isClosed && children}
    </BoxDiv>
  );
}
