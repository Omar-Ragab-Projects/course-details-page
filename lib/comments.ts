export interface CommentTypes {
  image: string;
  name: string;
  date: string;
  comment: string;
}

const comments = [
  {
    image: "/man-avatar.svg",
    name: "Student Name Goes Here",
    date: "Oct 10, 2021",
    comment:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
  },
  {
    image: "/man-avatar-2.svg",
    name: "Student Name Goes Here",
    date: "Oct 15, 2021",
    comment:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
  },
];

export default comments;
