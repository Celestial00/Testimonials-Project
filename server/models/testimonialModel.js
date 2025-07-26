const mongoose = require("mongoose");

const ProjectDetailsSchema = new mongoose.Schema({
  dissertationFormat: String,
  dissertationTitle: String,
  formOtherSpecify: String,
  freeSemesters: String,
  MethodOtherSpecify: String,
  remuneration: String,
  researchMethodology: String,
  researchPublication: String,
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
  email: String,
  gender: String,
  name: String,
  researchTopic: String,
  workingGroup: String,
});

const DissertationSchema = new mongoose.Schema(
  {
    universityDetails: UniversityDetailsSchema,
    projectDetails: ProjectDetailsSchema,
    evaluation: EvaluationSchema,
    feedback: FeedbackSchema,
    approved: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Dissertation", DissertationSchema);
