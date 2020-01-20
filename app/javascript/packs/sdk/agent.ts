import axios from 'axios'
import Qs from 'qs'

const agent = axios.create({
  headers: {
    common: {
      'Accept': 'application/json',
    },
  },
  paramsSerializer: function (params) {
    return Qs.stringify(params, {arrayFormat: 'brackets'})
  },
});

export default agent;

export function setBaseUrl (url: string) {
  agent.defaults.baseURL = url;
}
