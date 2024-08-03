// module is a global object that there is access too

export const largeNum = 356;

// export default largeNum; <--- can still do this but above allows us to destructure on import.

// old way if using require('./script_2') this allows you to export different things using module.exports
// module.exports = {
//   largeNum: largeNum,
// };
