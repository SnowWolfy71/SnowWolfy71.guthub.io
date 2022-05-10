function city()
{
    if (confirm('Укажите город рождения')){
        var namecity = prompt('Введите ваш город','');
    }
    alert("Принято")

    document.getElementById("city").innerHTML = namecity;
}
function color()
{
    alert("Работает")
    document.getElementById("color1").style.background ="red";
    document.getElementById("color2").style.background ="blue";
    document.getElementById("color3").style.background ="yellow";
    document.getElementById("color3").style.color ="black";
}
function gender()
{
    var ava = document.getElementById('photo');
    ava.setAttribute('src','skala.jpg');
}