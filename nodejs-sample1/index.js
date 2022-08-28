import axios from "axios";


const getData = async (userId) => {
   const userUrl = 'https://jsonplaceholder.typicode.com/users/'
   const userData = await axios.get(userUrl + userId)

   console.log(userData.data)

   const postUrl = 'https://jsonplaceholder.typicode.com/posts/'
   const postData = await axios.get(postUrl + userId)

   //console.log(postData.data)

   const allDatas = { ...userData.data, ...postData.data }
   //console.log(allDatas)

   return allDatas

}
export default getData
