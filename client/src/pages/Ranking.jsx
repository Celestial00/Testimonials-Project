import RankingList from '../components/RankingList';
import AverageGrade from '../components/AverageGrade';

const RankingPage = () => {
  const rankingData = [
    {
      title: "Establishment of a method for determining body composition in premature infants in clinical routine",
      university: "University of Duisburg-Essen",
      grade: "1.0"
    },
    {
      title: "Biomechanical work on the radius",
      university: "Friedrich Schiller University Jena",
      grade: "1.0"
    },
    {
      title: "Communication in the multidisciplinary team",
      university: "University of Linz",
      grade: "1.0"
    },
    {
      title: "PAA, Sec. transmembrane proteins",
      university: "Justus Liebig University Giessen",
      grade: "1.0"
    },
    {
      title: "Liver failure DRG discharge data",
      university: "Heinrich Heine University Düsseldorf",
      grade: "1.0"
    },
    {
      title: "The fate of hippocampal neural stem cells in the pre-plaque phase of Alzheimer's disease",
      university: "Friedrich Schiller University Jena",
      grade: "1.0"
    },
    {
      title: "Interviews on primary care for gay men",
      university: "Charité University Medicine Berlin",
      grade: "1.0"
    },
    {
      title: "Barriers to fasting therapy in fertility medicine",
      university: "Charité University Medicine Berlin",
      grade: "1.0"
    },
    {
      title: "Quality of reporting of diagnostic accuracy studies in the radiological literature",
      university: "Charité University Medicine Berlin",
      grade: "1.0"
    },
    {
      title: "Comorbidities in patients with PAD Findings from MRA",
      university: "University of Rostock",
      grade: "1.2"
    },
    {
      title: "Smart words and artificial intelligence in medicine",
      university: "University of Duisburg-Essen",
      grade: "1.2"
    },
    {
      title: "Social determinants and exposure risk factors of SARS-CoV-2 infection",
      university: "Eberhard Karls University of Tübingen",
      grade: "1.2"
    },
    {
      title: "CAD Man EXTEND: Clinical 10-year follow-up of the randomized CAD-Man study",
      university: "Charité University Medicine Berlin",
      grade: "1.2"
    },
    {
      title: "Development of novel telemedical applications in ultrasound training",
      university: "Friedrich Wilhelm University of Bonn",
      grade: "1.3"
    },
    {
      title: "Interventional treatment of HR pulmonary embolism effects on invasive and non-invasive parameters",
      university: "University of Rostock",
      grade: "1.3"
    }
  ];

  // Calculate average grade
  const averageGrade = (
    rankingData.reduce((sum, item) => sum + parseFloat(item.grade), 0) / 
    rankingData.length
  ).toFixed(1);

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-blue-200 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Our ranking</h1>
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">dissertation</h2>
        
        <RankingList items={rankingData} />
        
      
      </div>
    </div>
  );
};

export default RankingPage;