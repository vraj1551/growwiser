let url = 'https://script.google.com/macros/s/AKfycbxYbXFf9kfzgQ8ReZEAybxo4tMOdae0ASd37F1TqBfmHSI97OPayOgxfg1l0yLfujlQ/exec';
let form = document.querySelector('#applicationForm');

form.addEventListener("submit", (e)=>{
    e.target.submitForm.innerHTML = 'Submitting...'
    let d = new FormData(form);
    fetch(url, {
        method: "POST",
        body: d
    }).then((res)=>res.text())
    .then((finalRes)=>{
        e.target.submitForm.innerHTML = 'Apply Now'
        document.getElementById("res").innerHTML = finalRes;
        form.reset();
        setTimeout(()=>{
            document.getElementById("res").innerHTML = '';
        },5000)
        console.log(finalRes)
    })
    e.preventDefault();
})