// ----------------------------
// Default Users
// ----------------------------

let users = JSON.parse(localStorage.getItem("users")) || [
    {
        name: "Bhargavi",
        email: "bhargavi@gmail.com",
        status: "Active"
    },
    {
        name: "Saisri",
        email: "saisri@gmail.com",
        status: "Active"
    },
    {
        name: "Mounika",
        email: "mounika@gmail.com",
        status: "Inactive"
    }
];

// ----------------------------
// Save Users
// ----------------------------

function saveUsers() {
    localStorage.setItem("users", JSON.stringify(users));
}

// ----------------------------
// Display Users
// ----------------------------

function displayUsers() {

    const table = document.getElementById("userTable");

    table.innerHTML = "";

    users.forEach((user, index) => {

        table.innerHTML += `

        <tr class="border-b">

            <td class="p-3">${user.name}</td>

            <td class="p-3">${user.email}</td>

            <td class="p-3">${user.status}</td>

            <td class="p-3">

                <button onclick="editUser(${index})"
                class="bg-yellow-500 text-white px-3 py-1 rounded">

                Edit

                </button>

                <button onclick="deleteUser(${index})"
                class="bg-red-600 text-white px-3 py-1 rounded ml-2">

                Delete

                </button>

            </td>

        </tr>

        `;

    });

    document.getElementById("userCount").innerText = users.length;

}

displayUsers();

// ----------------------------
// Show Form
// ----------------------------

document.getElementById("showFormBtn").onclick = function () {

    document.getElementById("userForm").classList.remove("hidden");

};

// ----------------------------
// Save User
// ----------------------------

document.getElementById("saveBtn").onclick = function () {

    const name = document.getElementById("name").value;

    const email = document.getElementById("email").value;

    const status = document.getElementById("status").value;

    if(name==="" || email===""){

        alert("Please fill all fields");

        return;

    }

    users.push({

        name:name,

        email:email,

        status:status

    });

    saveUsers();

    displayUsers();

    document.getElementById("userForm").classList.add("hidden");

    document.getElementById("name").value="";

    document.getElementById("email").value="";

};

// ----------------------------
// Edit User
// ----------------------------

function editUser(index){

    let name=prompt("Edit Name",users[index].name);

    let email=prompt("Edit Email",users[index].email);

    let status=prompt("Edit Status",users[index].status);

    users[index]={

        name:name,

        email:email,

        status:status

    };

    saveUsers();

    displayUsers();

}

// ----------------------------
// Delete User
// ----------------------------

function deleteUser(index){

    if(confirm("Delete this user?")){

        users.splice(index,1);

        saveUsers();

        displayUsers();

    }

}

// ----------------------------
// Bar Chart
// ----------------------------

new Chart(document.getElementById("barChart"),{

    type:"bar",

    data:{

        labels:["Jan","Feb","Mar","Apr","May","Jun"],

        datasets:[{

            label:"Users",

            data:[12,19,15,20,18,25],

            backgroundColor:"#4F46E5"

        }]

    }

});

// ----------------------------
// Pie Chart
// ----------------------------

new Chart(document.getElementById("pieChart"),{

    type:"pie",

    data:{

        labels:["Active","Inactive"],

        datasets:[{

            data:[2,1],

            backgroundColor:["green","red"]

        }]

    }

});