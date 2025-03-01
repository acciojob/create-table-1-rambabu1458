function insert_Row() {
    //Write your code here
 //    let task = document.querySelector("#sampleTable");
	// let tr = document.createElement("tr");
	
	// ["NewCell", "NewCell"].forEach(cellText => {
	//     let td = document.createElement("td");
	//     td.innerText = cellText;
	//     tr.appendChild(td);
	// });
	
	// task.appendChild(tr);

	
let task = document.querySelector("#sampleTable");
let tr = document.createElement("tr");

let td1 = document.createElement("td");
td1.innerText = "New Cell1";
tr.appendChild(td1);

let td2 = document.createElement("td");
td2.innerText = "New Cell2";
tr.appendChild(td2);

// task.appendChild(tr);
// task.prepend(tr); //it is adding at top

  // Insert the new row at the top of the table
task.insertBefore(tr, task.firstChild);
}
