export default function handler(req, res) {
  const data = [
    {
      category: "Personality",
      title: "Gender",
      description: "Gender identity of you",
      options: ["Male", "Female", "Non-binary", "Other"],
    },
    {
      category: "Personality",
      title: "Ethnicity",
      description: "Ethnicity of you",
      options: ["White", "Black", "Asian", "Hispanic", "Other"],
    },
    {
      category: "Personality",
      title: "Sexual Orientation",
      description: "Sexual orientation of you",
      options: ["Heterosexual", "Homosexual", "Bisexual", "Other"],
    },
    {
      category: "Personality",
      title: "Religion",
      description: "Religious affiliation of you",
      options: [
        "Christianity",
        "Islam",
        "Judaism",
        "Buddhism",
        "Hinduism",
        "Other",
      ],
    },
    {
      category: "Personality",
      title: "Age",
      description: "Age of you",
      options: ["18-24", "25-34", "35-44", "45-54", "55+"],
    },
    {
      category: "Personality",
      title: "Disability Status",
      description: "Disability status of you",
      options: [
        "None",
        "Vision Impairment",
        "Hearing Impairment",
        "Mobility Impairment",
        "Other",
      ],
    },
    {
      category: "Personality",
      title: "Socioeconomic Status",
      description: "Socioeconomic status of you",
      options: ["Lower Class", "Middle Class", "Upper Class"],
    },
    {
      category: "Personality",
      title: "Nationality",
      description: "Nationality of you",
      options: ["American", "British", "Canadian", "Australian", "Other"],
    },
    {
      category: "Personality",
      title: "Marital Status",
      description: "Marital status of you",
      options: ["Single", "Married", "Divorced", "Widowed", "Other"],
    },
    {
      category: "Personality",
      title: "Body Type",
      description: "Body type of you",
      options: ["Underweight", "Average", "Overweight", "Obese"],
    },

    {
      category: "Beliefs",
      title: "Religion",
      description: "Religious beliefs.",
      options: [
        "Christianity",
        "Islam",
        "Buddhism",
        "Judaism",
        "Other",
        "None",
      ],
    },
    {
      category: "Beliefs",
      title: "Political Affiliation",
      description: "Political affiliation and beliefs.",
      options: ["Republican", "Democrat", "Independent", "Other"],
    },
    {
      category: "Background",
      title: "Ethnicity",
      description: "Ethnic or cultural background.",
      options: [
        "White",
        "Black",
        "Hispanic",
        "Asian",
        "Native American",
        "Other",
      ],
    },
    {
      category: "Background",
      title: "Nationality",
      description: "Nationality or country of origin.",
      options: [
        "American",
        "Canadian",
        "Mexican",
        "British",
        "Chinese",
        "Other",
      ],
    },
    {
      category: "Background",
      title: "Language",
      description: "Native or primary language.",
      options: ["English", "Spanish", "Mandarin", "French", "Arabic", "Other"],
    },
    {
      category: "Ability",
      title: "Disability Status",
      description: "Whether an individual has a physical or mental disability.",
      options: [
        "None",
        "Visual impairment",
        "Hearing impairment",
        "Mobility impairment",
        "Other",
      ],
    },
    {
      category: "Ability",
      title: "Mental Health",
      description: "Mental health status.",
      options: [
        "Healthy",
        "Anxiety disorder",
        "Depression",
        "Bipolar disorder",
        "Schizophrenia",
        "Other",
      ],
    },
    {
      category: "Experience",
      title: "Work Experience",
      description: "Years of work experience.",
      options: ["None", "1-2 years", "3-5 years", "6-10 years", "10+ years"],
    },
    {
      category: "Experience",
      title: "Volunteer Experience",
      description: "Years of experience volunteering.",
      options: ["None", "1-2 years", "3-5 years", "6-10 years", "10+ years"],
    },
    {
      category: "Experience",
      title: "Leadership Experience",
      description: "Years of experience in a leadership role.",
      options: ["None", "1-2 years", "3-5 years", "6-10 years", "10+ years"],
    },
  ];

  res.status(200).json(data);
}
