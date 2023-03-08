export default function handler(req, res) {
  res.status(200).json([
    {
      category: "Identity",
      title: "Gender",
      options: ["Male", "Female", "Other"],
    },
    {
      category: "Identity",
      title: "Sexual Orientation",
      options: ["Gay", "Queer", "Straight", "Other"],
    },
    {
      category: "Beliefs",
      title: "Religion",
      options: ["Christian", "Muslim", "Athiest", "Other"],
    },
    {
      category: "Beliefs",
      title: "Political Affiliation",
      options: ["Option 1", "Option 2", "Other"],
    },
    {
      category: "Background",
      title: "Education Level",
      options: ["BSc", "Master's", "Other", "None"],
    },
    {
      category: "Background",
      title: "Native Language",
      options: ["English", "Persian", "Swedish"],
    },
    {
      category: "Ability",
      title: "Disability Status",
      options: ["None", "Visionary impaired"],
    },
    {
      category: "Experience",
      title: "Work Experience",
      options: ["None", "1", "2"],
    },
  ]);
}
