const floorsTable = document.getElementById("Floors")
const compatibilitiesTable = document.getElementById("Compatibilities")

const addFloorButton = document.getElementById("addFloor")
const removeFloorButton = document.getElementById("removeFloor")

const addTeamButton = document.getElementById("addTeam")
const removeTeamButton = document.getElementById("removeTeam")


addFloorButton.addEventListener("click", () => {
    let newRow = document.createElement("tr")

    for (let i = 0; i < 2; i++) {
        let cells = document.createElement("td")
        cells.innerHTML = '<input type="text">'
        newRow.appendChild(cells)
    }

    floorsTable.appendChild(newRow)
})


function removeFloorRows() {
    var rows;
    $(document).ready(function(){
        var rowCount = $("#Floors tr").length;
        rows = parseInt(rowCount) 
        if (rows > 2) {
            floorsTable.removeChild(floorsTable.lastChild);
        }
      });
}

removeFloorButton.addEventListener("click", removeFloorRows)

addTeamButton.addEventListener("click", () => {
    let newRow = document.createElement("tr")

    for (let i = 0; i < 5; i++) {
        let cells = document.createElement("td")
        cells.innerHTML = '<input type="text">'
        newRow.appendChild(cells)
    }

    compatibilitiesTable.appendChild(newRow)
})

function removeCompatibilitiesRows() {
    var rows;
    $(document).ready(function(){
        var rowCount = $("#Compatibilities tr").length;
        rows = parseInt(rowCount) 
        if (rows > 2) {
            compatibilitiesTable.removeChild(compatibilitiesTable.lastChild);
        }
      });
}

removeTeamButton.addEventListener("click", removeCompatibilitiesRows)