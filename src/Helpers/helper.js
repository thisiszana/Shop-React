const shortenText = (text) => {
  return text.split(" ").splice(0, 3).join(" ");
};

export { shortenText };
