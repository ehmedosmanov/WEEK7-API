const baseUrl = 'https://northwind.vercel.app/api/categories'
const dataTable = document.getElementById('data-table')


async function fetchData() {
    try {
        const response = await axios.get(baseUrl)
        const data = response.data
        addTable(data)
    } catch (error) {
        console.log('Error:',error);
    }
}

function addTable(data) {

    data.forEach(element => {
        console.log(element);
    let row = document.createElement('tr')
        
        row.innerHTML = 
        `
        <td>${element.id}</td>
        <td>${element.name}</td>
        <td>${element.description}</td>
        <td>
           <button onclick="editPost(${element.id})">Edit</button>
           <button onclick="deletePost(${element.id})">Delete</button>
        </td>
        `
    dataTable.appendChild(row)

    });

}


 function createPost() {
    const descValue = document.getElementById('desc-input').value
    const nameValue = document.getElementById('name-input').value
    try {
         axios.post(baseUrl,{
            description: descValue,
            name: nameValue
        })
        fetchData()
    } catch (error) {
        console.log('Error:',error);
    }
}

async function deletePost(postId) {
    try {
        await axios.delet(`${baseUrl}/${postId}`)
        fetchData()
    } catch (error) {
        console.log('Error:',error);
    }
}




























async function editPost(postId) {
    const descValue = document.getElementById('desc-input').value
    const nameValue = document.getElementById('name-input').value
    try {
        const response = await axios.get(`${baseUrl}/${postId}`)
        const data = response.data
        console.log(data);       
        const { description, name } = data; 

        document.getElementById('desc-input').value = description;
        document.getElementById('name-input').value = name;
    } catch (error) {
        console.error("Error:", error);
    }
}

async function updatePost(postId) {
    
    const descValue = document.getElementById('desc-input').value
    const nameValue = document.getElementById('name-input').value
    try {
        const response = await axios.post(`${baseUrl}`)
    } catch (error) {
        console.error("Error:", error);
        
    }
}




fetchData()