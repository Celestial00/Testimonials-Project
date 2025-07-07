const mongoose = require('mongoose');

const ProjectDetailsSchema = new mongoose.Schema({
  coAuthor: String,
  contract: String,
  degree: String,
  degreeLevel: String,
  dissertationFormat: String,
  dissertationTitle: String,
  firstAuthor: String,
  formOtherSpecify: String,
  freeSemesters: String,
  meetings: String,
  projectEndDate: Date,
  projectStartDate: Date,
  projectStatus: String,
  remuneration: String,
  researchMethodology: String,
  researchPublication: String,
  statistician: String,
  training: String,
  workMode: String,
});

const UniversityDetailsSchema = new mongoose.Schema({
  department: String,
  selectedCity: String,
  selectedCountry: String,
  selectedUniversity: String,
  speciality: String,
  workingGroup: String,
});

const EvaluationSchema = new mongoose.Schema({
  communication: String,
  overallGrade: String,
  scopeOfWork: String,
  structurePlanning: String,
  workingGroup: String,
});

const FeedbackSchema = new mongoose.Schema({
  anonymousContact: Boolean,
  care: String,
  dissertationGrade: String,
  email: String,
  finalGrade: String,
  gender: String,
  improvement: String,
  name: String,
  recommendations: String,
  researchTopic: String,
  workingGroup: String,
});

const DissertationSchema = new mongoose.Schema({
  universityDetails: UniversityDetailsSchema,
  projectDetails: ProjectDetailsSchema,
  evaluation: EvaluationSchema,
  feedback: FeedbackSchema,
  approved: {
    type: Boolean,
    default: false,
  },
}, { timestamps: true });

module.exports = mongoose.model('Dissertation', DissertationSchema);
