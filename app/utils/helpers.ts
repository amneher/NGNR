// functions to perform common actions.

export const generatePagination = (currentPage: number, totalPages: number) => {
    // If the total number of pages is 7 or less,
    // display all pages without any ellipsis.
    if (totalPages <= 7) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }
  
    // If the current page is among the first 3 pages,
    // show the first 3, an ellipsis, and the last 2 pages.
    if (currentPage <= 3) {
      return [1, 2, 3, '...', totalPages - 1, totalPages];
    }
  
    // If the current page is among the last 3 pages,
    // show the first 2, an ellipsis, and the last 3 pages.
    if (currentPage >= totalPages - 2) {
      return [1, 2, '...', totalPages - 2, totalPages - 1, totalPages];
    }
  
    // If the current page is somewhere in the middle,
    // show the first page, an ellipsis, the current page and its neighbors,
    // another ellipsis, and the last page.
    return [
      1,
      '...',
      currentPage - 1,
      currentPage,
      currentPage + 1,
      '...',
      totalPages,
    ];
  };

export const logError = (error: Error, info: { componentStack: string }) => {
    // Do something with the error, e.g. log to an external API
    console.log(`${Error} - ${info}`)
  };

  const { createHash } = require('crypto');

export const hashString = (string: String) => {
  return createHash('sha256').update(string).digest('hex');
}

const helpers = {
    // @ts-ignore
    friendlyDate: function (a) {
      var months = [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec',
      ];
      var days = ['Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat'];
      var year = a.getFullYear();
      var month = months[a.getMonth()];
      var day = days[a.getDay()];
      var date = a.getDate();
      var hour = a.getHours();
      var min = a.getMinutes();
      var sec = a.getSeconds();
      var time_friendly = this.getTime(a);
      var time = {
        day: day,
        date: date,
        month: month,
        year: year,
        hour: hour,
        min: min,
        sec: sec,
        time_friendly: time_friendly,
      };
      return time;
    },
    // @ts-ignore
    getTime: function (date) {
      var hours = date.getHours();
      var minutes = date.getMinutes();
      var ampm = hours >= 12 ? 'pm' : 'am';
      hours = hours % 12;
      hours = hours ? hours : 12; // the hour '0' should be '12'
      minutes = minutes < 10 ? '0' + minutes : minutes;
      var strTime = hours + ':' + minutes + ampm;
      return strTime;
    },
    // @ts-ignore
    stringToFriendlyDate: function (date_string) {
      const date = helpers.friendlyDate(new Date(date_string));
      const friendly_date = `${date.month} ${date.date}, ${date.year}`;
      return friendly_date;
    },
  };
  
  export default helpers;