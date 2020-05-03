export const isValidDate = (date) => {
  return date instanceof Date && !isNaN(date);
};

export const formatDate = (date) => {
  if (!isValidDate(date)) {
    return "aujourd’hui";
  }

  var monthNames = [
    "janvier",
    "février",
    "mars",
    "avril",
    "mai",
    "juin",
    "juillet",
    "aout",
    "septembre",
    "octobre",
    "novembre",
    "décembre",
  ];

  const monthIndex = date.getMonth();
  const year = date.getFullYear();

  return `${monthNames[monthIndex]} ${year}`;
};
