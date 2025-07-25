import { useEffect, useState } from "react";
import RankingItem from "./RankingItem";

const RankingList = ({ items }) => {
  const [sortedItems, setSortedItems] = useState(null);

  useEffect(() => {
    if (items) {
      const sorted = getSortedEvaluationsWithUniversity(items);
      setSortedItems(sorted.slice(0, 10)); 
    }
  }, [items]);

  function getSortedEvaluationsWithUniversity(data) {
    return data
      .map((item) => ({
        _id: item._id,
        evaluation: item.evaluation,
        universityDetails: item.universityDetails,
      }))
      .sort(
        (a, b) =>
          parseFloat(b.evaluation.overallGrade) -
          parseFloat(a.evaluation.overallGrade)
      );
  }

  if (!items) return <p>Loading Data...</p>;
  if (!sortedItems) return <p>Sorting data...</p>;

  return (
    <div className="space-y-6">
      {sortedItems.length === 0 ? (
        <p>No data available</p>
      ) : (
        sortedItems.map((item, index) => (
          <RankingItem
            key={item._id}
            title={item.universityDetails.selectedUniversity}
            university={item.universityDetails.selectedCountry}
            grade={item.evaluation.overallGrade}
          />
        ))
      )}
    </div>
  );
};

export default RankingList;
