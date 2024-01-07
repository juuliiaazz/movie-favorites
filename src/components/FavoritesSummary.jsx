import { useContext, useState } from "react";
import { MovieContext, average } from "../App";
import { SummaryBox, SummaryDiv, SummaryTitle } from "../ui/Summary";
import { Paragraph } from "../ui/Paragraph";
import SummaryExplanationDetails from "./SummaryExplanationDetails";

export function FavoritesSummary() {
  const { favorites } = useContext(MovieContext);
  const avgImdbRating = average(favorites.map((movie) => movie.imdbRating));
  const avgUserRating = average(favorites.map((movie) => movie.userRating));
  const avgRuntime = average(favorites.map((movie) => movie.runtime));
  const [openExplanation, setOpenExplanation] = useState(false);

  return (
    <>
      <SummaryBox
        onMouseEnter={() => setOpenExplanation(true)}
        onMouseLeave={() => setOpenExplanation(false)}
      >
        <SummaryTitle>Your favorite movies</SummaryTitle>
        <SummaryDiv>
          <Paragraph>
            <box-icon name="hash" color="#fb903d" size="sm"></box-icon>
            <span>{favorites.length} movies</span>
          </Paragraph>
          <Paragraph>
            <box-icon
              name="bookmark"
              type="solid"
              color="#fb903d"
              size="sm"
            ></box-icon>
            <span>{avgImdbRating.toFixed(2)}</span>
          </Paragraph>
          <Paragraph>
            <box-icon
              name="star"
              type="solid"
              color="#fb903d"
              size="sm"
            ></box-icon>
            <span>{avgUserRating.toFixed(2)}</span>
          </Paragraph>
          <Paragraph>
            <box-icon
              name="hourglass"
              type="solid"
              color="#fb903d"
              size="sm"
            ></box-icon>
            <span>{avgRuntime.toFixed(0)} min</span>
          </Paragraph>
        </SummaryDiv>
      </SummaryBox>

      {openExplanation && <SummaryExplanationDetails />}
    </>
  );
}
