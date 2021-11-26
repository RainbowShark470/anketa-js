/* jshint esversion: 6 */

function test() {
    let name = prompt('Ваше имя')
    let surname = prompt('Ваша Фамилия')
    let place = prompt('Ваше Место проживания')
    let  age = prompt('Ваш Возраст')
    let  date = prompt('Дата Рождения')
    let  about = prompt('Опишите информацию о себе')
    alert('Ваше имя' + name + 'Ваша Фамилия' + surname + 'Ваше Место проживания' + place + 'Ваш Возраст' + age + 'Дата Рождения' + date + 'Опишите информацию о себе' + about)
    document.getElementById('name').textContent = 'Имя:' + name
    document.getElementById('surname').textContent = 'Фамилия:' + surname
    document.getElementById('place').textContent = 'Место Проживания:' + place
    document.getElementById('age').textContent = 'Возраст:' + age
    document.getElementById('date').textContent = 'Дата Рождения: ' + date
    document.getElementById('about').textContent = 'О себе:' + about
}