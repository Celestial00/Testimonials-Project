import RankingItem from './RankingItem';

const RankingList = ({ items }) => {
  return (
    <div className="space-y-6">
      {items.map((item, index) => (
        <RankingItem
          key={index}
          title={item.title}
          university={item.university}
          grade={item.grade}
        />
      ))}
    </div>
  );
};

export default RankingList;