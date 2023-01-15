const body = document.querySelector("body")
sidebar = body.querySelector("nav");
sidebarToggle = document.getElementById("sidebar-toggle")

let getMode = localStorage.getItem("mode");
if (getMode && getMode === "dark") {
       body.classList.toggle("dark");
}

let getStatus = localStorage.getItem("status");
if (getStatus && getStatus === "close") {
       sidebar.classList.toggle("close");
}


sidebarToggle.addEventListener("click", () => {
       sidebar.classList.toggle("close");
       if (sidebar.classList.contains("close")) {
              localStorage.setItem("status", "close");
       } else {
              localStorage.setItem("status", "open");
       }
})

const text = `
          <tr>
                                                        <th scope="row">1</th>
                                                        <td>Comercial</td>
                                                        <td><span class="badge text-bg-success">Active</span></td>
                                                        <td>2022/12/25</td>
                                                        <td>

                                                               <div class="personas-container">
                                                                      <div class="persona">
                                                                             <img class="border"
                                                                                    src="https://avatars.githubusercontent.com/u/68261773?s=400&u=ca09fb7c49600be35a8943b8aba05aa0256a7c84&v=4"
                                                                                    alt="" />
                                                                      </div>
                                                                      <div class="persona">
                                                                             <img class="border"
                                                                                    src="https://avatars.githubusercontent.com/u/68261773?s=400&u=ca09fb7c49600be35a8943b8aba05aa0256a7c84&v=4"
                                                                                    alt="" />
                                                                      </div>
                                                                      <div class="persona">
                                                                             <img class="border"
                                                                                    src="https://avatars.githubusercontent.com/u/68261773?s=400&u=ca09fb7c49600be35a8943b8aba05aa0256a7c84&v=4"
                                                                                    alt="" />
                                                                      </div>
                                                                      <div class="persona">
                                                                             <img class="border"
                                                                                    src="https://avatars.githubusercontent.com/u/68261773?s=400&u=ca09fb7c49600be35a8943b8aba05aa0256a7c84&v=4"
                                                                                    alt="" />
                                                                      </div>
                                                                      <div class="persona">
                                                                             <img class="border"
                                                                                    src="https://avatars.githubusercontent.com/u/68261773?s=400&u=ca09fb7c49600be35a8943b8aba05aa0256a7c84&v=4"
                                                                                    alt="" />
                                                                      </div>
                                                               </div>

                                                        </td>
                                                 </tr>
`

const tbody = document.getElementById("tbody");


for (let i = 0; i < 10; i++) {
       tbody.innerHTML += text;

}

const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))
