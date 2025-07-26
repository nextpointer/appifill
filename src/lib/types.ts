
export interface JobProfileDataType {
  // Personal
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  gender: string;
  nationality: string;

  // Contact
  email: string;
  phone: string;

  // Address
  addressLine1: string;
  addressLine2: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;

  // Education
  highSchoolName: string;
  highSchoolPassingYear: string;
  highSchoolPercentage: string;

  secondarySchoolName: string;
  secondarySchoolPassingYear: string;
  secondarySchoolPercentage: string;

  collegeName: string;
  degree: string;
  passingYear: string;
  cgpa: string;
  specialization: string;

  // Professional
  currentCompany: string;
  experienceYears: string;
  skills: string;
  coverLetter: string;
  
  // links
  linkedInProfile: string;
  githubProfile: string;
  resume: string;
}