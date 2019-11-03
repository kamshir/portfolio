const selects = document.querySelectorAll('.slct');

selects.forEach((box) => {
    const select = box.querySelector('.chose');
    const placeholder = box.querySelector('.placeholder');
    select.addEventListener('change', () => {
        placeholder.classList.add('transparent');
    });
})

const areas = {
    'russia': ['Ленинградская', 'Амурская', 'Брянская'],
    'usa': ['Флорида', 'Калифорния', 'Гавайи'],
    'china': ['Гуандун', 'Цзянсу', 'Сычуань'],
    'japan': ['Киото', 'Сига', 'Хёго'],
    'england': ['Бристоль', 'Девон', 'Камбрия']
};

const country = document.querySelector('.country');
const area = document.querySelector('.area');

country.addEventListener('change', function() {
    let val = country.value;
    let cntr = areas[val];
    $('.area option').remove();
    for (let i in cntr){
        let opt = document.createElement('option');
        opt.value = val;
        opt.textContent = cntr[i];
        area.append(opt);
    }
});