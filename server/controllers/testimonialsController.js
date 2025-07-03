const TestModel = require("../models/testimonialModel");

const testimonialsAdd = async (req, res) => {
  const { title, desc, email } = req.body;

  try {
    if (!title || !desc || !email) {
      return res.status(400).json({ message: "All fields are required" });
    }
    const test = await TestModel.create({
      title,
      desc,
      email: email.toLowerCase(),
    });

    res.status(500).json({ msg: test });
  } catch (err) {
    res.status(500).json({ error: err.message || "Internal server error" });
  }
};

const testimonialsGet = async (req, res) => {
  try {
    const Data = await TestModel.find();

    if (!Data) {
      return res.status(404).json({ msg: "no testimonails yey" });
    }
    res.status(200).json({ response: "ok", data: Data });
  } catch (err) {
    res.status(500).json({ error: err.message || "Internal server error" });
  }
};

const testimonialsApprove = async (req, res) => {
  const id = req.body.id;
  try {
    const Testi = await TestModel.findByIdAndUpdate(
      id,
      { approved: true },
      { new: true }
    );

    if (!Testi) {
      return res.status(200).json({ response: "success" });
    }

    res.status(200).json({ response: "ok", Testi });
  } catch (err) {
    return res
      .status(500)
      .json({ error: err.message || "Internal server error" });
  }
};

const testimonialsDelete = async (req, res) => {
  try {
    const DeleteDoc = await TestModel.findByIdAndDelete(req.body.id);

    if (!DeleteDoc) {
      return res.status(404).json({ response: "Not Found" });
    }

    res.status(200).json({ response: "delete", data: DeleteDoc });
  } catch (err) {
    res.status(500).json({ error: err.message || "Internal server error" });
  }
};

const testimonialsReviewAdd = async (req, res) => {
  const { id, name, desc, score } = req.body;

  try {
    const UpdateReview = await TestModel.findByIdAndUpdate(
      id,
      {
        $push: {
          ratings: {
            name,
            desc,
            score,
          },
        },
      },
      { new: true }
    );

    if (!UpdateReview) {
      return res.status(404).json({ response: "Not Found" });
    }
    res.status(200).json({ response: "ok", Data: UpdateReview });
  } catch (err) {
    res.status(500).json({ error: err.message || "Internal server error" });
  }
};




module.exports = {
  testimonialsReviewAdd,
  testimonialsAdd,
  testimonialsGet,
  testimonialsApprove,
  testimonialsDelete,
};
