const axios = require('axios');
const { OMDB_API_KEY } = process.env

//netlify에서 제공하는 서버리스 함수에서는 node.js환경에서 동작을 하는 것이기 때문에
//import가 아닌 require을 사용

exports.handler = async function (event, context) {

    //요청이 들어온 정보에 대한 객체가 event 객체고 
    //그 이벤트 객체의 body라는 속성에 그 내용이 JSON형태로 들어있는데 
    const params = JSON.parse(event.body)
    const { title, type, year, page, id } = params
    // const OMDB_API_KEY = '7035c60c'

    const url = id
        ? `https://www.omdbapi.com/?apikey=${OMDB_API_KEY}&i=${id}&plot=full`
        : `https://www.omdbapi.com/?apikey=${OMDB_API_KEY}&s=${title}&type=${type}&y=${year}&page=${page}`
    try {
        const res = await axios.get(url)
        console.log(res.data)
        if (res.data.error) {
            //  reject(error.message)
            return {
                statusCode: 400,
                body: JSON.stringify(res.data.Error)
            }
        }
        // resolve(res)
        return {
            statusCode: 200,
            body: JSON.stringify(res.data)
        }
    } catch (error) {
        console.log(error.response.status)

        return {
            statusCode: error.response.status,
            body: JSON.stringify(error.message)
        }
        //   reject(error.message)
    }
}
