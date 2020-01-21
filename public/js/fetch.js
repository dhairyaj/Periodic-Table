const name = document.getElementById("name");
const atomicNum = document.getElementById("atomicNum");
const symbol = document.getElementById("symbol");
const atomic_mass = document.getElementById("atomic_mass");
const category = document.getElementById("category");
const phase = document.getElementById("phase");

function submitVal(){
    var number = document.getElementById('number').value;
    fetch('/elements/'+number).then((response) => {
        response.json().then((data) => {
            if(data.error){
                alert("Something went wrong!")
                // console.log(data.error)
            }
            else{
                name.innerHTML = data.name
                atomicNum.innerHTML = data.number
                symbol.innerHTML = data.symbol
                atomic_mass.innerHTML = data.atomic_mass
                category.innerHTML = data.category
                phase.innerHTML = data.phase
            }
        });
    }).catch((error) => {
        alert("Something went wrong!")
        // console.log(error)
    })
}
