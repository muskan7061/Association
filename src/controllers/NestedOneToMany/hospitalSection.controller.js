const { HospitalSection } = require("../../models");

const hospitalSection = async (req, res) => {
  try {
    console.log("Request Body:", req.body);
    const { hospitalSectionName, onWhichfloor, buildingName, hospitalID } =
      req.body;
    //   console.log("data====", hospitalSectionName, onWhichfloor, buildingName, hospitalID );
      
    const createHospitalSection = await HospitalSection.create({
      hospitalSectionName,
      onWhichfloor,
      buildingName,
      hospitalID,
    });
    return res.status(201).json({
      message: "Hospital created",
      data: createHospitalSection,
    });
  } catch (error) {
    console.error("Error in hospitalSection", error);
    res.status(500).json({ error: error.message });
  }
};

module.exports = { hospitalSection };
