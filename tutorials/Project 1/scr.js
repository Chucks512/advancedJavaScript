var min = 12,
    max = 100,
    select = document.getElementById('keySelector');

for (var i = min; i<=max; i++){
    var opt = document.createElement('option');
    opt.value = i;
    opt.innerHTML = i;
    select.appendChild(opt);
}