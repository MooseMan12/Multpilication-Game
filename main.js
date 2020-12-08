console.log("Hi");
const N=10;

const mtbl=document.getElementById("mtbl");
const tbody=mtbl.getElementsByTagName("tbody")[0];

const topRow=document.createElement("tr");

for (let column=0; column<=N; column++){
    const colHeadEmt=document.createElement("th");
    colHeadEmt.innerHTML= (column==0)?"&prod;":String(column);
    topRow.appendChild(colHeadEmt);
}

tbody.appendChild(topRow);

for (let row=1; row<=N; row++){
    console.log("row="+row);
    const rowEmt=document.createElement("tr");
    const rowNumEmt=document.createElement("th");
    rowNumEmt.innerText=String(row);
    rowEmt.appendChild(rowNumEmt);
    
    for (let column=1; column<=N; column++){
        const cellEmt=document .createElement("td");
        if (Math.random()<0.7){

        } else {

            cellEmt.innerText=String(column*row);
        }
        
        rowEmt.appendChild(cellEmt);
    }
    tbody.appendChild(rowEmt);
}

