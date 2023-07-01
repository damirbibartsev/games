function showText(){
    let c=0
    let mas =['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин']
    mas=mas.sort(() => Math.random() - 0.5)
    alert(mas)
    let number1 = prompt('Чему равнялся первый элемент массива?')
    let number2 = prompt('Чему равнялся последний элемент массива?')
    if (number1 == mas[0]){
        c+=1;
    }
    if (number2 == mas[mas.length-1]){
        c+=1;
    }
    if(c==0){
        alert("Вы ответили неверно")
    }
    if(c==1){
        alert("Вы были близки к победе!")
    }
    if(c==2){
        alert("Поздравляем, вы победили!")
    }
}
function showMonth(){
    let mas =['Январь','Февраль','Март','Апрель','Май','Июнь','Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь',]
    let number = prompt('Введите номер месяца')
    if(number>=1 && number<=12){
        alert(`Это ${mas[number-1]}`)
    }
}










