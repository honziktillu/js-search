const jjmujinput = document.getElementById('jjmujinput');
const jjcolumn = document.getElementsByClassName('jjcolumn');

jjmujinput.addEventListener('keyup', (e) => {
    const search = e.target.value.toLowerCase().trim();
    [...jjcolumn].forEach((item) => {
        if (item.dataset.jjhodnotu.toLowerCase().includes(search)) return item.style.display = "block";
        return item.style.display = "none";
    });
});