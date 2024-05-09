import moment from "moment";

export const dateFormat = (date) => {
  return moment(date).format("DD/MM/YYYY");
};

export const chartDate = (date) => {
  return moment(date).format("MMM YY");
};

const currentDate = new Date();
const options = { weekday: "long", month: "long", day: "numeric" };
export const formattedCurrentDate = currentDate.toLocaleDateString("en-US", options);