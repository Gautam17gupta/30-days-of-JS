const countriesAPI = 'https://restcountries.com/v2/all'
const catsAPI = 'https://api.thecatapi.com/v1/breeds'

fetch(countriesAPI)
.then(response => response.json())
.then(data => {
    // console.log(data)
})
.catch(error=> console.error(error))

const fetchdata = async() => {
    try{
        const response = await fetch(catsAPI)
        const cats= await response.json()
        cats.forEach(element => {
           console.log(element.name)
        });
        }catch(err){
            console.error(err)
        }
}
fetchdata()
