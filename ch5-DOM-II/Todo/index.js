


// write code here, dont change anything in HTML and css files 
// refer to id's mentioned in html files carefully
// Follow the exact column order for tables,for eg: name should be filled under "name" column 
// we are using form here, make sure you are using "submit" eventListener , or else you will get 0 marks

document.querySelector('form').addEventListener('submit', (e)=>{
    console.log("yes")
    e.preventDefault()
    var name = document.querySelector("#task").value;
   var status = document.querySelector("#priority").value;
   
   
    var tr = document.createElement('tr');
    var tname = document.createElement('td');
    tname.innerText = name;
    var tstatus = document.createElement('td');
    tstatus.innerText = status;
    if(status == "High"){
        tstatus.innerText = 'High';
        tstatus.style.backgroundColor = "red";
    }else{
        tstatus.innerText = 'Low';
        tstatus.style.backgroundColor = "green";
        
    }
    var button = document.createElement('p');
    button.style.fontSize = "16px"
    button.style.color = "red"
    button.innerText = "Delete";
    tr.append(tname, tstatus, button);
    document.querySelector('tbody').append(tr);

    button.addEventListener('click', (e)=>{
        e.preventDefault();
        tr.remove(tname, tstatus, button);
    })

})