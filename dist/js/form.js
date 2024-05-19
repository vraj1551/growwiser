let url = 'https://script.google.com/macros/s/AKfycbz7ZvHYjHKcx9nbrsszu_cYS2zAQ-EajQHEeF0JfPct5QFDe55WntBP5ZqWKVIoFxdq/exec';
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