import axios from 'axios';
import qs from 'qs';
/*import cookie from 'react-cookie';*/
const headers = {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Accept': 'application/json'
};

const API_URL = process.env.REACT_APP_API_URL;
console.log(API_URL);

export default {

    sendMessage: (formState) => {
        return axios.post( API_URL + '/contact', qs.stringify(formState), {headers: headers})
        },

    home: () => { 
        return axios.get( API_URL + '/')
    }, 
    actualities: () => { 
        return axios.get( API_URL + '/actualities')
    },
    chandelier: () => { 
        return axios.get( API_URL + '/chandelier')
    },
    contact: () => { 
        return axios.get( API_URL + '/contact')
    },
    lightSpot: () => { 
        return axios.get( API_URL + '/light-spot')
    },
    lamp: () => { 
        return axios.get( API_URL + '/lamp')
    },
    lamppost: () => { 
        return axios.get( API_URL + '/lamppost')
    },
    partners: () => { 
        return axios.get( API_URL + '/partners')
    },
    presentation: () => { 
        return axios.get( API_URL + '/presentation')
    },
    references: () => { 
        return axios.get( API_URL + '/references')
    },
    wallLight: () => { 
        return axios.get( API_URL + '/wall-light')
    },

}