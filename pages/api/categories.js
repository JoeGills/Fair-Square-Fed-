export default function handler(req, res) {
  const data = [
    {
      title: "Personality",
      description: "Personal identity and characteristics",
      example:"Ethnicity, Gender, Sexual Orientation"
    },
    {
      title: "Beliefs",
      description: "Personal beliefs and values",
      example:"Religion, Political Affiliation, Personal Values"
    },
    {
      title: "Background",
      description: "Personal background and context",
      example:"Gender, Ethnicity, Nationality"
    },
    {
      title: "Ability",
      description: "Personal abilities and disabilities",
      example:"Disability Status, Language Proficiency, Problem Solving Skills"
    },
    {
      title: "Experience",
      description: "Personal experience and skills",
      example:"Work Experience, Volunteer Experience, Internship Experience"
    },
  ];

  res.status(200).json(data);
}
