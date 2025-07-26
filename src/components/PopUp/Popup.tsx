import { useEffect, useState, type ChangeEvent } from "react";
import "./Popup.css";
import { type JobProfileDataType } from "../../lib/types";
import { getData, saveData } from "../../lib/storage";

const Popup = () => {
  // state for storing the job profile data
  const [formData, setFormData] = useState<JobProfileDataType>({
    // Personal
    firstName: "",
    lastName: "",
    dateOfBirth: "",
    gender: "",
    nationality: "",

    // Contact
    email: "",
    phone: "",

    // Address
    addressLine1: "",
    addressLine2: "",
    city: "",
    state: "",
    zipCode: "",
    country: "",

    // Education
    highSchoolName: "",
    highSchoolPassingYear: "",
    highSchoolPercentage: "",

    secondarySchoolName: "",
    secondarySchoolPassingYear: "",
    secondarySchoolPercentage: "",

    collegeName: "",
    degree: "",
    passingYear: "",
    cgpa: "",
    specialization: "",

    // Professional
    currentCompany: "",
    experienceYears: "",
    skills: "",
    coverLetter: "",
    linkedInProfile: "",
    githubProfile: "",
    resume: "",
  });

  // load the data when component mounts
  useEffect(() => {
    (async () => {
      const result: JobProfileDataType = await getData("profileData");
      if (result) {
        setFormData(result);
      }
    })();
  }, []);

  // handing the input change
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    // set the data into formData
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // save the data into storage when button clicked
  const handleSave = async () => {
    await saveData("profileData", formData);
    alert("Profile saved successfully");
  };

  return (
    <>
      <div className="popup-container">
        <h1 className="popup-title">Welcome to Appifill </h1>

        {/* Wrapper for scrollable form content */}
        <div className="form-sections-wrapper">
          {/* Personal */}
          <div className="form-section">
            <h2 className="section-heading">Personal Information</h2>
            <div className="input-group">
              <input
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="First Name"
                className="input-field"
              />
              <input
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Last Name"
                className="input-field"
              />
            </div>
            <div className="input-group">
              <input
                name="dateOfBirth"
                type="date"
                value={formData.dateOfBirth}
                onChange={handleChange}
                className="input-field"
              />
              <input
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                placeholder="Gender"
                className="input-field"
              />
            </div>
            <input
              name="nationality"
              value={formData.nationality}
              onChange={handleChange}
              placeholder="Nationality"
              className="input-field"
            />
          </div>

          {/* Contact */}
          <div className="form-section">
            <h2 className="section-heading">Contact Details</h2>
            <input
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              className="input-field"
            />
            <input
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone"
              className="input-field"
            />
          </div>

          {/* Address */}
          <div className="form-section">
            <h2 className="section-heading">Address</h2>
            <input
              name="addressLine1"
              value={formData.addressLine1}
              onChange={handleChange}
              placeholder="Address Line 1"
              className="input-field"
            />
            <input
              name="addressLine2"
              value={formData.addressLine2}
              onChange={handleChange}
              placeholder="Address Line 2 (Optional)"
              className="input-field"
            />
            <div className="input-group">
              <input
                name="city"
                value={formData.city}
                onChange={handleChange}
                placeholder="City"
                className="input-field"
              />
              <input
                name="state"
                value={formData.state}
                onChange={handleChange}
                placeholder="State"
                className="input-field"
              />
            </div>
            <div className="input-group">
              <input
                name="zipCode"
                value={formData.zipCode}
                onChange={handleChange}
                placeholder="Zip Code"
                className="input-field"
              />
              <input
                name="country"
                value={formData.country}
                onChange={handleChange}
                placeholder="Country"
                className="input-field"
              />
            </div>
          </div>

          {/* Education */}
          <div className="form-section">
            <h2 className="section-heading">Education</h2>
            <h3>High School</h3>
            <input
              name="highSchoolName"
              value={formData.highSchoolName}
              onChange={handleChange}
              placeholder="High School Name"
              className="input-field"
            />
            <div className="input-group">
              <input
                name="highSchoolPassingYear"
                value={formData.highSchoolPassingYear}
                onChange={handleChange}
                placeholder="Passing Year"
                className="input-field"
              />
              <input
                name="highSchoolPercentage"
                value={formData.highSchoolPercentage}
                onChange={handleChange}
                placeholder="Percentage (%)"
                className="input-field"
              />
            </div>

            <h3>Secondary School / Intermediate</h3>
            <input
              name="secondarySchoolName"
              value={formData.secondarySchoolName}
              onChange={handleChange}
              placeholder="Secondary School Name"
              className="input-field"
            />
            <div className="input-group">
              <input
                name="secondarySchoolPassingYear"
                value={formData.secondarySchoolPassingYear}
                onChange={handleChange}
                placeholder="Passing Year"
                className="input-field"
              />
              <input
                name="secondarySchoolPercentage"
                value={formData.secondarySchoolPercentage}
                onChange={handleChange}
                placeholder="Percentage (%)"
                className="input-field"
              />
            </div>

            <h3>College / University</h3>
            <input
              name="collegeName"
              value={formData.collegeName}
              onChange={handleChange}
              placeholder="College Name"
              className="input-field"
            />
            <div className="input-group">
              <input
                name="degree"
                value={formData.degree}
                onChange={handleChange}
                placeholder="Degree"
                className="input-field"
              />
              <input
                name="specialization"
                value={formData.specialization}
                onChange={handleChange}
                placeholder="Specialization (e.g., CSE)"
                className="input-field"
              />
            </div>
            <div className="input-group">
              <input
                name="passingYear"
                value={formData.passingYear}
                onChange={handleChange}
                placeholder="College Passing Year"
                className="input-field"
              />
              <input
                name="cgpa"
                value={formData.cgpa}
                onChange={handleChange}
                placeholder="CGPA (e.g., 8.5)"
                className="input-field"
              />
            </div>
          </div>

          {/* Professional */}
          <div className="form-section">
            <h2 className="section-heading">Professional Details</h2>
            <input
              name="currentCompany"
              value={formData.currentCompany}
              onChange={handleChange}
              placeholder="Current Company"
              className="input-field"
            />
            <input
              name="experienceYears"
              value={formData.experienceYears}
              onChange={handleChange}
              placeholder="Years of Experience (e.g., 3)"
              className="input-field"
            />
            <input
              name="skills"
              value={formData.skills}
              onChange={handleChange}
              placeholder="Skills (comma separated, e.g., React, Node.js)"
              className="input-field"
            />
            <textarea
              name="coverLetter"
              value={formData.coverLetter}
              onChange={handleChange}
              placeholder="Cover Letter"
              className="input-field textarea-field"
            ></textarea>
            <input
              name="linkedInProfile"
              value={formData.linkedInProfile}
              onChange={handleChange}
              placeholder="LinkedIn Profile URL"
              className="input-field"
            />
            <input
              name="githubProfile"
              value={formData.githubProfile}
              onChange={handleChange}
              placeholder="GitHub Profile URL"
              className="input-field"
            />
            <input
              name="resume"
              value={formData.resume}
              onChange={handleChange}
              placeholder="Resume Link / URL"
              className="input-field"
            />
          </div>
        </div>
        <button className="save-btn" onClick={handleSave}>
          Save Profile
        </button>
      </div>
    </>
  );
};

export default Popup;
