const Axios = require ('axios');

const weatherApiKey = '5ad07cf92029c4d716df35fe6a1cd08d';
const weatherApiRoot = 'https://api.openweathermap.org/data/2.5';

async function getCurrentWeather(zip){
  const method = '/weather';
  const params = `?zip=${zip},us&units=imperial&appid=${weatherApiKey}`;

  const url = `${weatherApiRoot}${method}${params}`;

  let obj = {};
  try {
    const response = await Axios.get(url);
    obj = response.data;
  }catch (error){
    obj.error = error;
  }
  return obj;
}

module.exports = {
  getCurrent: getCurrentWeather
};
