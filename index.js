
function pullData(event){
    let results = document.getElementById('mainData')
    fetch("./data.json").then((response)=>{
        return response.json()
    }).then((data) =>{
        console.log("DATA",data)
        let els = data.map((data)=>{
            return `
                <div class="card p-0 m-1" style="width: 19rem;">
                    <img src="${data.pic}" class="card-img-top" alt="${data.id}">
                    <div class="card-body">
                        <p class=""card-text">${data.name}.</p>
                    </div>
                </div>
            `
        }).join(" ")
        return results.innerHTML = els
    })
    .catch(err=>console.warn(err.message));
}