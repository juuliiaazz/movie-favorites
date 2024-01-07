import {
  SummaryExplanation,
  SummaryExplanationList,
  SummaryExplanationLists,
} from "../ui/Summary";

// Ruta som förklarar symbolerna i FavoritesSummary

export default function SummaryExplanationDetails() {
  return (
    <SummaryExplanation>
      <SummaryExplanationLists>
        <SummaryExplanationList>
          <box-icon name="hash" color="#fb903d" size="sm"></box-icon>
          <p>The number of movies you&apos;ve added to the list</p>
        </SummaryExplanationList>

        <SummaryExplanationList>
          <box-icon
            name="bookmark"
            type="solid"
            color="#fb903d"
            size="sm"
          ></box-icon>
          <p>The average IMDB rating of the movies</p>
        </SummaryExplanationList>

        <SummaryExplanationList>
          <box-icon
            name="star"
            type="solid"
            color="#fb903d"
            size="sm"
          ></box-icon>
          <p>Your average rating of the movies</p>
        </SummaryExplanationList>

        <SummaryExplanationList>
          <box-icon
            name="hourglass"
            type="solid"
            color="#fb903d"
            size="sm"
          ></box-icon>
          <p>The total number of minutes you&apos;ve watched</p>
        </SummaryExplanationList>
      </SummaryExplanationLists>
    </SummaryExplanation>
  );
}
