const sortWords = (arr) => arr.sort((a, b) => {
  if (a.audio < b.audio) {
    return -1;
  }
  if (a.audio > b.audio) {
    return 1;
  }
  return 0;
});
export default sortWords