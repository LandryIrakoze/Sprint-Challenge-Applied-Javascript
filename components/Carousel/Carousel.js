class Carousel {
    constructor(element) {
        this.element = element;
        
        this.images = Array.from(this.element.querySelectorAll('img'));

        this.leftButton = this.element.querySelector('.left-button');
        this.rightButton = this.element.querySelector('.right-button');

        this.leftButton.addEventListener('click', () => this.slideLeft());
        this.rightButton.addEventListener('click', () => this.slideRight());

        // this.test = [1, 2, 3, 4]
    }
    
    slideRight() {
        // let images = Array.from(this.element.querySelectorAll('img'));
        // console.log(images);
        // console.log(this.images);

        this.images.forEach(item => item.style.display = 'none');

        this.images.unshift(this.images[this.images.length -1]);
        this.images.pop();

        this.images[0].style.display = 'block';

        // console.log(this.test);
        // this.test.unshift(this.test[this.test.length -1]);
        // this.test.pop();
        // console.log(this.test);
    }

    slideLeft() {

        this.images.forEach(item => item.style.display = 'none');

        this.images.push(this.images[0]);
        this.images.shift();

        this.images[0].style.display = 'block';

        // console.log(this.test);
        // this.test.push(this.test[0]);
        // this.test.shift();
        // console.log(this.test);
    }
}

let carousel = document.querySelector('.carousel');
let myCarousel = new Carousel(carousel);

/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the left and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* Create an 'infinite loop' carousel */
/* In which as long as you click on an arrow, the array of images will loop over itself. */