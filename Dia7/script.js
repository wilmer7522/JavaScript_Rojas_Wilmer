let Url = ""

for (let i = 1; i < 732; i++){
    Url = `https://superheroapi.com/api.php/55c7e797ed9fe799a27af7c20e0c3dd7/`+String(i);

    fetch(Url)
    .then(res => res.json())
    .then(Data => {
        console.log(Data.id);
        
    })
}


