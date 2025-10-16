export interface QuestionsTypes {
  id: number;
  question: string;
  choices: string[];
  correct: number;
}

export interface ContentTypes {
  title: string;
  type: "pdf" | "exam" | "view";
  questionsCount?: string;
  questionsTime?: string;
  questions?: QuestionsTypes[];
}

export interface CourseTopicsTypes {
  title: string;
  content: ContentTypes[];
}

const courseTopics = [
  {
    title: "Course Introduction",
    content: [
      {
        title: "Introduction",
        type: "pdf",
      },
      {
        title: "Course Overview",
        type: "pdf",
      },
      {
        title: "Course Overview",
        type: "exam",
        questionsCount: "0 QUESTIONS",
        questionsTime: "10 MINUTES",
        questions: [
          {
            id: 1,
            question:
              "What is the typical duration of the 'Introduction to Web' module in the Course Details page?",
            choices: ["1 week", "3 weeks", "6 weeks", "12 weeks"],
            correct: 1,
          },
          {
            id: 2,
            question: "Which field on the course page lists prerequisites?",
            choices: [
              "Course Overview",
              "Learning Outcomes",
              "Requirements",
              "Instructors",
            ],
            correct: 2,
          },
          {
            id: 3,
            question:
              "Which of these is commonly shown as a course metadata item?",
            choices: [
              "Enrollment cap",
              "Instructor's favorite color",
              "Student social media handles",
              "Cafeteria menu",
            ],
            correct: 0,
          },
          {
            id: 4,
            question: "What action should the 'Enroll' button perform?",
            choices: [
              "Download course PDF",
              "Add course to shopping cart / register",
              "Change course description",
              "Open instructor's email client",
            ],
            correct: 1,
          },
          {
            id: 5,
            question:
              "Which item is not typically part of a topic inside the course page?",
            choices: [
              "Topic title",
              "Estimated time to complete",
              "Quiz with questions",
              "Bank account number",
            ],
            correct: 3,
          },
        ],
      },
      {
        title: "Course Exercise / Reference Files",
        type: "pdf",
      },
      {
        title: "Code Editor Installation (Optional if you have one)",
        type: "pdf",
      },
      {
        title: "Embedding PHP in HTML",
        type: "pdf",
      },
    ],
  },
  {
    title: "JavaScript Language Basics",
    content: [
      {
        title: "Defining Functions",
        type: "pdf",
      },
      {
        title: "Functions Parameters",
        type: "pdf",
      },
      {
        title: "Return Values From Functions",
        type: "exam",
        questionsCount: "0 QUESTIONS",
        questionsTime: "10 MINUTES",
        questions: [
          {
            id: 1,
            question:
              "What is the typical duration of the 'Introduction to Web' module in the Course Details page?",
            choices: ["1 week", "3 weeks", "6 weeks", "12 weeks"],
            correct: 1,
          },
          {
            id: 2,
            question: "Which field on the course page lists prerequisites?",
            choices: [
              "Course Overview",
              "Learning Outcomes",
              "Requirements",
              "Instructors",
            ],
            correct: 2,
          },
          {
            id: 3,
            question:
              "Which of these is commonly shown as a course metadata item?",
            choices: [
              "Enrollment cap",
              "Instructor's favorite color",
              "Student social media handles",
              "Cafeteria menu",
            ],
            correct: 0,
          },
          {
            id: 4,
            question: "What action should the 'Enroll' button perform?",
            choices: [
              "Download course PDF",
              "Add course to shopping cart / register",
              "Change course description",
              "Open instructor's email client",
            ],
            correct: 1,
          },
          {
            id: 5,
            question:
              "Which item is not typically part of a topic inside the course page?",
            choices: [
              "Topic title",
              "Estimated time to complete",
              "Quiz with questions",
              "Bank account number",
            ],
            correct: 3,
          },
        ],
      },
      {
        title: "Global Variable and Scope",
        type: "pdf",
      },
      {
        title: "Newer Way of creating a Constant",
        type: "pdf",
      },
      {
        title: "Constant",
        type: "pdf",
      },
    ],
  },
  {
    title: "Components & Databinding",
    content: [
      {
        title: "Defining Functions",
        type: "pdf",
      },
      {
        title: "Functions Parameters",
        type: "pdf",
      },
      {
        title: "Return Values From Functions",
        type: "exam",
        questionsCount: "0 QUESTIONS",
        questionsTime: "10 MINUTES",
        questions: [
          {
            id: 1,
            question:
              "What is the typical duration of the 'Introduction to Web' module in the Course Details page?",
            choices: ["1 week", "3 weeks", "6 weeks", "12 weeks"],
            correct: 1,
          },
          {
            id: 2,
            question: "Which field on the course page lists prerequisites?",
            choices: [
              "Course Overview",
              "Learning Outcomes",
              "Requirements",
              "Instructors",
            ],
            correct: 2,
          },
          {
            id: 3,
            question:
              "Which of these is commonly shown as a course metadata item?",
            choices: [
              "Enrollment cap",
              "Instructor's favorite color",
              "Student social media handles",
              "Cafeteria menu",
            ],
            correct: 0,
          },
          {
            id: 4,
            question: "What action should the 'Enroll' button perform?",
            choices: [
              "Download course PDF",
              "Add course to shopping cart / register",
              "Change course description",
              "Open instructor's email client",
            ],
            correct: 1,
          },
          {
            id: 5,
            question:
              "Which item is not typically part of a topic inside the course page?",
            choices: [
              "Topic title",
              "Estimated time to complete",
              "Quiz with questions",
              "Bank account number",
            ],
            correct: 3,
          },
        ],
      },
      {
        title: "Global Variable and Scope",
        type: "pdf",
      },
      {
        title: "Newer Way of creating a Constant",
        type: "pdf",
      },
      {
        title: "Constant",
        type: "pdf",
      },
    ],
  },
];

export default courseTopics;
