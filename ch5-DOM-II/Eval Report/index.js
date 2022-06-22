// write code here, dont change anything in HTML and css files 
// refer to id's mentioned in html files carefully
// Follow the exact column order for tables,for eg: name should be filled under "name" column 
// we are using form here, make sure you are using "submit" eventListener , or else you will get 0 marks

document.querySelector('form').addEventListener('submit', (e)=>{
    console.log("yes")
    e.preventDefault()
    var name = document.querySelector("#name").value;
    var batch = document.querySelector("#batch").value;
    var dsa = document.querySelector("#dsa").value;
    var cs = document.querySelector("#cs").value;
    var coding = document.querySelector("#coding").value;

    var tr =  document.createElement('tr');
    var tname = document.createElement('td');
    tname.innerText = name;
    var tbatch = document.createElement('td');
    tbatch.innerText = batch;
    var tdsa = document.createElement('td');
    tdsa.innerText = dsa;
    var tcs = document.createElement('td');
    tcs.innerText = cs;
    var tcoding = document.createElement('td');
    tcoding.innerText = coding;
    var tpercentage = document.createElement('td');
    const percentage = (((+dsa)+(+cs)+(+coding))/30)*100;
    tpercentage.innerText = percentage.toFixed(2) + " %";
    var tstatus = document.createElement('td');
    if(percentage > 50){
        tstatus.innerText = 'Regular';
        tstatus.style.backgroundColor = "green";
    }else{
        tstatus.innerText = 'Async';
        tstatus.style.backgroundColor = "red";
        
    }
    tstatus.style.color = "white";
    tstatus.style.width = "100%";
    var tdelete = document.createElement('td');
    var button = document.createElement('button');
    button.innerText = "Delete";
    tdelete.append(button);
    tr.append(tname, tbatch, tdsa, tcs, tcoding, tpercentage, tstatus, tdelete);
    document.querySelector('tbody').append(tr);

    button.addEventListener('click', (e)=>{
        e.preventDefault();
        tr.remove(tname, tbatch, tdsa, tcs, tcoding, tpercentage, tstatus, tdelete);
    })

})