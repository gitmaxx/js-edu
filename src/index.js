/**
 * @param preferences - target student focus
 * @param knowsProgramming - if student can do programming and know basics
 * @param config - private student ability to perform for different focus modes
 * @returns number of weeks needed for finish education
 */
module.exports = function getTimeForEducation(
    focus, 
    knowsProgramming,
    config
    ) {
      let totalHours=0;
      let pace = 0;
      let totalWeeks = 0;

      if (knowsProgramming) {
        totalHours = 800;
      } else {
        totalHours = 1300;
      }
      pace = config[focus];
      totalWeeks = Math.ceil(totalHours/pace);
      return totalWeeks;
  };
  