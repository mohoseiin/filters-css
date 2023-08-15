var filters = [];
function filter(name,fil){
    var check = document.getElementById(name);
    var img = document.getElementById('base');

    if (check.checked){
        filters.push(fil);
        img.setAttribute('style','filter: '+filters.join(' '));
    }else {
        filters.forEach((value, index) =>{
            if (value == fil){
                filters.splice(index,1);
            }
        })
        img.removeAttribute('style');
        img.setAttribute('style','filter: '+filters.join(' '));
    }
}