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

	
// 

	let table=document.querySelector("#sampleTable");
//inserting new row at the top
	let newRow=table.insertRow(0);
//insert 2 new cells in a row
	let cell1=newRow.insertCell(0);
	let cell2=newRow.insertCell(1);
//set content each cell
	cell1.textContent="New Cell1";
	cell2.textContent="New Cell2";
}
