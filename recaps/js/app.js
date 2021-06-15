// //PROTOTYPES RECAP
// function Task(_task, _priority) {
//     this.task = _task;
//     this.priority = _priority;
// }

// Task.prototype.showTaskInfo = function() {
//     return `Task ${this.task} has ${this.priority} priority`;
// };

// const task1 = new Task("Learn REACT", "high");
// const task2 = new Task("Go to shop", "medium");

// console.log(task1);
// console.log(task1.showTaskInfo())

// console.log(task2);
// console.log(task2.showTaskInfo())



//AJAX PROMISES
const downloadUsers = (quantity)=>{
    new Promise((resolve, reject)=>{
       
        const api = `https://randomuser.me/api/?results=${quantity}&nat=us`;

        //ajax call:
        const xhr = new XMLHttpRequest();

        //open connection:
        xhr.open('GET', api, true);

        //onload:
        xhr.onload = ()=>{
            if(xhr.status === 200){
                resolve( JSON.parse(xhr.responseText).results );
            } else {
                reject(Error(xhr.statusText));
            }
        };

        //(optional) on error:
        xhr.onerror = err => reject(err);

        //send:
        xhr.send();
    });
};


downloadUsers(20)
.then(
    users => printHTML(users),
    error => console.error(
        new Error(error)
    )
)

function printHTML(info) {
    //console.log(info)
    let html;
    info.forEach(entry => {
        html += `
            <li>
                Name: ${entry.name.first} ${entry.name.last}
                Country: ${entry.nat}
                Image:
                    <img src="${entry.picture.medium}" alt=" ${entry.name.first}">
            </li>
        `;
    })

    appContainer = document.querySelector("#app");
    appContainer.innerHTML = html;
}

