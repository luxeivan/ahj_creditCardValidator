import visa from '../img/visa.png';
import mastercard from '../img/mastercard.png';
import mir from '../img/mir.png';
import american_express from '../img/american_express.png';
import discover from '../img/discover.png';

export default class CartValidator {
    constructor(place) {
        this.place = place;
        this.match = {
            4: 'visa',
            5: 'mastercard',
            2: 'mir',
            3: 'american_express',
            6: 'discover',
        }
        this.render();
    }
    generateForm() {
        return `
<h2>Проверить принадлежность карты</h2>
<form class="card_valid">
    <ul class="card_list">
        <li class="card_list__item"><img class="card_list__img" src="${visa}" id="visa"></li>
        <li class="card_list__item"><img class="card_list__img" src="${mastercard}" id="mastercard"></li>
        <li class="card_list__item"><img class="card_list__img" src="${mir}" id="mir"></li>
        <li class="card_list__item"><img class="card_list__img" src="${american_express}" id="american_express"></li>
        <li class="card_list__item"><img class="card_list__img" src="${discover}" id="discover"></li>
    </ul>
    <input class="number_card" placeholder="Номер">
    <button class="button">Проверить</button>
    <div class="message" id="not_value">Введите номер карты</div>
    <div class="message" id="not_correct">Некорректный номер</div>
</form>
`;
    }
    render() {
        this.place.innerHTML = this.generateForm();
        this.buttonSubmit = document.querySelector('.button');
        this.numberCard = document.querySelector('.number_card');
        this.buttonSubmit.addEventListener('click', (event) => {
            event.preventDefault();
            if (this.numberCard.value.length) {
                for (const key in this.match) {
                    if (key === this.numberCard.value[0]) {
                        this.mark(this.match[key]);
                        break;
                    }else{
                        this.unmark();
                        document.getElementById('not_correct').classList.add('visible');
                    }
                }

            }else{
                this.unmark();
                document.getElementById('not_value').classList.add('visible');
            }
        })
    }
    mark(cardName) {        
        this.unmark();
        const markCard = document.getElementById(cardName);
        markCard.classList.add('card_list__img_valid');
    }
    unmark() {
        const cardImages = document.querySelectorAll('.card_list__img');
        const message = document.querySelectorAll('.message');
        for (const item of cardImages) {
            item.classList.remove('card_list__img_valid');
        }
        for (const item of message) {
            item.classList.remove('visible');
        }
    }
}