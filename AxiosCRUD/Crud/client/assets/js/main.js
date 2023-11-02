const baseUrl = "http://localhost:3000/users";
const dataTable = document.getElementById("data-table");
const createBtn = document.getElementById("create");
const showBtn = document.getElementById("show");
const updateBtn = document.getElementById("update");
const nameValue = document.getElementById('name-input')
const editBtn = document.getElementById('edit')
const deleteBtn = document.getElementById('delete')

async function fetchData() {
  try {
    const response = await axios.get(baseUrl);
    const data = response.data;
    showBtn.addEventListener("click", (e) => {
      data.forEach((element) => {
        console.log(element);
      });
    });
    addTable(data);
  } catch (error) {
    console.log("Error:", error);
  }
}

function addTable(data) {
  data.forEach((element) => {
    let row = document.createElement("tr");
    row.innerHTML += `
        <td>${element.id}</td>
        <td>${element.name}</td>

        <td class='actions'>
           <button id="edit">Edit</button>
           <button id="delete"">Delete</button>
        </td>
        `;
    dataTable.append(row);
  });
}


createBtn.addEventListener('click', async (e) => {
    async function createPost() {
        try {
          await axios.post(baseUrl, {
            name: nameValue.value
          });
      
          await fetchData();
        } catch (error) {
          console.log("eror", error);
        }
      }
      dataTable.innerHTML =""
     await createPost()
})


deleteBtn.addEventListener('click', async (e) => {
    async function deletePost(postId) {
        try {
            await axios.delete(`${baseUrl}/${postId}`)

            await fetchData()
        } catch (error) {
            console.log("Error:",error);
        }
    }
    await deletePost()
})


fetchData();
