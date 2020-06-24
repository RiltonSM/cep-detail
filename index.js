const axios = require('axios');

async function getCepDetail(cep){
    const info = []
    try{
        const {data} = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
        console.log(data);
        info.push(data);
        return info;
    } catch (err){
        console.log(err)
    }
}

async function getCepNumber(uf, city, street){
    const streetApi = street.split(' ').join('+');
    
    try{
        const {data} = await axios.get(`https://viacep.com.br/ws/${uf}/${city}/${streetApi}/json/`)
        console.log(data);
        return data;
    } catch(err) {
        console.log(err);
    }
}

module.exports = { getCepDetail, getCepNumber };



