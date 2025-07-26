import { type JobProfileDataType } from "./types";

export const FIELD_SYNONYMS: Record<keyof JobProfileDataType, string[]> = {
  // Personal
  firstName: [
    "first_name",
    "fname",
    "given_name",
    "forename",
    "applicant_firstname",
  ],
  lastName: [
    "last_name",
    "surname",
    "lname",
    "family_name",
    "applicant_lastname",
  ],
  dateOfBirth: ["dob", "birthdate", "birth_date", "date_of_birth"],
  gender: ["sex", "applicant_gender"],
  nationality: ["citizenship", "nationality_status"],

  // Contact
  email: ["email_address", "emailid", "contact_email", "applicant_email"],
  phone: [
    "mobile",
    "mobile_number",
    "phone_number",
    "contact_number",
    "telephone",
    "tel",
    "applicant_phone",
  ],

  // Address
  addressLine1: [
    "address1",
    "street_address1",
    "street1",
    "line1",
    "address_line1",
  ],
  addressLine2: [
    "address2",
    "street_address2",
    "street2",
    "line2",
    "address_line2",
  ],
  city: ["town", "city_name", "applicant_city"],
  state: ["province", "region", "state_province", "state_name"],
  zipCode: ["zip", "zipcode", "postal", "postalcode", "postcode"],
  country: ["nation", "country_name", "residence_country"],

  // Education
  highSchoolName: ["hs_name", "highschool_name", "school_name", "ssc_school"],
  highSchoolPassingYear: ["hs_passing_year", "school_passing_year", "ssc_year"],
  highSchoolPercentage: [
    "hs_percentage",
    "school_percentage",
    "ssc_percentage",
  ],

  secondarySchoolName: [
    "hss_name",
    "intermediate_school",
    "senior_secondary_name",
    "12th_school",
  ],
  secondarySchoolPassingYear: [
    "hss_passing_year",
    "intermediate_year",
    "12th_passing_year",
  ],
  secondarySchoolPercentage: [
    "hss_percentage",
    "intermediate_percentage",
    "12th_percentage",
  ],

  collegeName: [
    "university_name",
    "college",
    "college_university",
    "graduation_college",
  ],
  degree: ["qualification", "degree_name", "education_degree"],
  passingYear: ["graduation_year", "degree_passing_year"],
  cgpa: ["gpa", "grade", "cumulative_gpa", "final_gpa"],
  specialization: ["specialization"],

  // Professional
  currentCompany: ["company", "employer", "organization", "org_name"],
  experienceYears: ["years_experience", "total_experience", "work_experience"],
  skills: ["skill_set", "technical_skills", "competencies", "expertise"],
  coverLetter: ["motivation_letter", "motivation", "cover_note"],
  linkedInProfile: ["linkedin", "linkedin_url", "linkedin_profile"],
  githubProfile: ["github", "github_url", "github_profile"],
  resume: ["resume", "resume_link", "resumeLink"],
};
