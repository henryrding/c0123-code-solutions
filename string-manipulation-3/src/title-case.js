/* exported titleCase */
function titleCase(title) {
  var newTitle = '';
  var titleArray = title.split(' ');
  var minorWords = ['and', 'or', 'nor', 'but', 'a', 'an', 'the', 'as', 'at', 'by', 'for', 'in', 'of', 'on', 'per', 'to'];
  titleArray[0] = titleArray[0][0].toUpperCase() + titleArray[0].slice(1, titleArray[0].length).toLowerCase();
  if (titleArray[0] === 'Javascript') {
    titleArray[0] = 'JavaScript';
  } else if (titleArray[0] === 'Api') {
    titleArray[0] = titleArray[0].toUpperCase();
  }
  for (var i = 1; i < titleArray.length; i++) {
    titleArray[i] = titleArray[i][0].toUpperCase() + titleArray[i].slice(1, titleArray[i].length).toLowerCase();
    if (titleArray[i].length < 4 && minorWords.includes(titleArray[i].toLowerCase()) && i !== 0) {
      titleArray[i] = titleArray[i].toLowerCase();
    }
    if (titleArray[i - 1].split('').includes(':')) {
      titleArray[i - 1] = titleArray[i - 1].slice(0, titleArray[i - 1].length - 1);
      if (titleArray[i - 1] === 'Javascript') {
        titleArray[i - 1] = 'JavaScript';
      } titleArray[i - 1] = titleArray[i - 1] + ':';
      titleArray[i] = titleArray[i][0].toUpperCase() + titleArray[i].slice(1, titleArray[i].length);
    }
    if (titleArray[i].split('').includes('-')) {
      var split = titleArray[i].split('-');
      split[1] = split[1][0].toUpperCase() + split[1].slice(1, split[1].length);
      titleArray[i] = split.join('-');
    }
    if (titleArray[i] === 'Javascript') {
      titleArray[i] = 'JavaScript';
    } else if (titleArray[i] === 'Api') {
      titleArray[i] = titleArray[i].toUpperCase();
    }
  } newTitle = titleArray.join(' ');
  return newTitle;
}
