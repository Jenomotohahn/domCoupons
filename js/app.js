//The entire dev nation is up in arms since our Ultimate Developer Gift Guide is not complete! Please use your DOM skills to help us complete this site and quash any uprising from this unruly group!

//And don't forget, please feel free to reach out for help. There is such a thing as a DOM question...

//1. Target the h3 element with the id of 'disclaimer' and change the contents to the follow:
const finePrint = 'Coupons VALID from Tuesday 12/4/2018 thru Saturday 6/29/2019. All sales FINAL. NO REFUNDS and EXCHANGES. And definitely NO RAINCHECKS! And ONLY POSITIVE reviews allowed on Social Media (FB, Instagram, Twitter, Yelp, etc.). And PLEASE Follow us on FB, Instagram, Twitter.'

const getDisclaimer = document.getElementById('disclaimer');
getDisclaimer.innerHTML = finePrint;



//2. Target the div elemenet with the id of 'brand1' and update the content to Nabisco.
const cookies = 'Nabisco';

const getBrand1 = document.getElementById('brand1');
getBrand1.innerHTML = cookies;

//3. Target the div element with the id of 'item1' and update the content with Cheeseburger Oreos. 

const cookiesName = 'Cheeseburger Oreos'

const getItem1 = document.getElementById('item1');
getItem1.innerHTML = cookiesName;


//4. Target the div element with the id of 'price1' and update the content to $8.99.

const price = '$' + 8.99;
const getPrice1 = document.getElementById('price1');
getPrice1.innerHTML = price;



//5. Target the button element with the id of 'discount1' and update the content to Free fries with purchase!

const content = 'Free fries with purchase!';
const getButtonEl = document.getElementById('discount1');
getButtonEl.innerHTML = content;


//6. Create a div element with the id of 'item2' and update the content to Hendrick's Gin. Append this element to William Grand & Sons div.

const drinkType = 'Hendrick\'s Gin';
const item2 = document.createElement('div');
item2.id = 'item2';
item2.innerHTML = drinkType;
brand2.appendChild(item2);


//7. Create a div element with the id of 'price2' and update the content to $34.99. Append this element to the Hendrick's Gin div.

const price2 = document.createElement('div');
price2.id = 'price2';
price2.innerHTML = '$'+34.99;
item2.appendChild(price2);



//8. Create a button element with the id of 'discount3' and give it a content of 50% OFF Axe body soap!. Append this element to the appropriate div class 'block3.

const discountButton = document.createElement('button');
const getClassBlock = document.getElementsByClassName('block3 col-sm-4');
discountButton.id = 'discount3';
discountButton.innerHTML = '50% off Axe body Soap!';
getClassBlock[0].appendChild(discountButton);




//9. Target the div element with a class of 'item' for the Panda Express section and update the content to Orange Chicken.


const getPandaBlock = document.getElementsByClassName('item');
const foodItemName = 'Orange Chicken';
getPandaBlock[0].innerHTML = foodItemName;

//10. Create a button element with a class of 'discount' and update the content to Free T-shirt and fortune cookie with purchase! Append this button to Panda Express section.


const discountButton2 = document.createElement('button');
const getPandaClassBlock = document.getElementsByClassName('block1 col-sm-4');
discountButton2.className = 'discount';
discountButton2.innerHTML = 'Free T-shirt and fortune cookie with purchase!';
getPandaClassBlock[1].appendChild(discountButton2);


//11. Target the div element with the class of 'brand' for the red hoodie section and update the content to Uniqlo.

const getRedHoodieBlock = document.getElementsByClassName('brand');
const brandUniqlo = 'Uniqlo';
getRedHoodieBlock[1].innerHTML = brandUniqlo;



//12. Target the div element with the class of 'price' for the red hoodie section and update the content to 10,000. 

const getRedHoodiePrice = document.getElementsByClassName('price');
const hoodiePrice = '$10,000';
getRedHoodiePrice[1].innerHTML = hoodiePrice;



//13. Create a div element with the class of 'brand' and give it a content of Hifiman Shangri-La. Append this element in the headphones section. 

const getHeadphoneBlock = document.getElementsByClassName('block3');
const brandHifiman = 'Hifiman Shangri-La';
const hifimanBlock = document.createElement('div');
hifimanBlock.className = 'brand';
hifimanBlock.innerHTML = brandHifiman;
getHeadphoneBlock[1].appendChild(hifimanBlock);


//14. Create a div element with the class of 'item' and give it a content of Electronstatic Headphones. Append this element in the headphones section. 

const headphoneName = document.createElement('div');
headphoneName.className = 'item';
headphoneName.innerHTML = 'Electrostatic Headphones';
getHeadphoneBlock[1].appendChild(headphoneName);

//15. Create a div element with the class of 'price' and give it a content of $18,000. Append this element in the headphones section.

const headPhonePrice = document.createElement('div');
headPhonePrice.className = 'price';
headPhonePrice.innerHTML = '$18,000';
getHeadphoneBlock[1].appendChild(headPhonePrice);

//16. Create a button element with the class of 'discount' and give it a content of Free Barry Manilow CD with purchase! Append this element in the headphones section.

const barryButton = document.createElement('button');
barryButton.className = 'discount';
barryButton.innerHTML = 'Free Barry Manilow CD with purchase!';
getHeadphoneBlock[1].appendChild(barryButton);


//17. For the Unicorn Slippers, change the contents for each element to the following: 
//div.brand = H&M
//div.item =  Unicorn-Head Slippers
//div.price = $21.99
// button.discount = Free knee-high tube socks with purchase!

const getBrand = document.getElementsByClassName('brand');
const unicornBrand = getBrand[3].innerHTML = 'H&M';

const getItem = document.getElementsByClassName('item');
const unicornItem = getItem[3].innerHTML = 'Unicorn-Head Slippers';

const getPrice = document.getElementsByClassName('price');
const unicornPrice = getPrice[3].innerHTML = '$21.00';

const getButton = document.getElementsByClassName('discount');
const unicornButton = getButton[3].innerHTML = 'Free Knee-high tube socks with purchase!';










//18. For the Doritos, change the contents for each element to the following:
//div.brand = Frito Lay
//div.item =  Poppin' Jalapeno Doritos
//div.price = $7.77
// button.discount = 33% OFF any 6 pack Budweiser or Bud Light.


;
const doritosBrand = getBrand[4].innerHTML = 'Frito Lay';

const doritosItem = getItem[4].innerHTML = 'Poppin\' Jalapeno Doritos';

const doritosPrice = getPrice[4].innerHTML = '$7.77';

const doritosButton = getButton[4].innerHTML = '33% OFF any 6 pack Budweiser of Bud Light';






//19. For the Pug, change the contents for each element to the following:
//div.brand = Any Dog Breeder
//div.item =  Baby Puggy
//div.price = Priceless
// button.discount = No Discounts. This cutie is worth every penny!

const pugBrand = getBrand[5].innerHTML = 'Any Dog Breeder';
const pugItem = getItem[5].innerHTML = 'Baby Puggy';
const pugPrice = getPrice[5].innerHTML = 'Priceless';
const pugButton = getButton[5].innerHTML = 'No Discounts. This cutie is worth every penny!';






//Final Boss 
//Create your own product for the last three sections.

const getImage = document.getElementsByTagName('img');

const myFavMovie = getImage[10].src = 'https://i5.walmartimages.com/asr/c6b7cfa6-0703-4c78-aa09-16f83d2de0d8_1.483cd3f1321e294dddbb0d6ff506c1f5.jpeg?odnHeight=450&odnWidth=450&odnBg=FFFFFF';

const myFavMovieBrand = getBrand[6].innerHTML = 'By Taika Waititi';
const myFavMovieItem = getItem[6].innerHTML = 'Better Than "The Room" movie';
const myFavMoviePrice = getPrice[6].innerHTML = '$Your Soul';
const myFavMovieButton = getButton[6].innerHTML = 'A Free Ticket to the Unholy Masquerade!'


const instaCoffeeBlock = document.getElementsByClassName('block2');
const instaCoffeeImg = getImage[11].src = 'https://www.dhresource.com/0x0s/f2-albu-g5-M00-61-25-rBVaJFoKn8SAcAAPAAWMSg-6clg456.jpg/portable-coffee-maker-mini-espresso-machine.jpg';

const instaCoffeeBrand = document.createElement('div');
instaCoffeeBrand.className = 'brand';
instaCoffeeBrand.innerHTML = 'InstaCoffee';
instaCoffeeBlock[3].appendChild(instaCoffeeBrand);

const instaCoffeeItem = document.createElement('div');
instaCoffeeItem.className = 'item';
instaCoffeeItem.innerHTML = 'Elixer Of Life: for the nearly dead';
instaCoffeeBlock[3].appendChild(instaCoffeeItem);

const instaCoffeePrice = document.createElement('div');
instaCoffeePrice.className = 'price';
instaCoffeePrice.innerHTML = '$1';
instaCoffeeBlock[3].appendChild(instaCoffeePrice);

const instaCoffeeButton = document.createElement('button');
instaCoffeeButton.className = 'discount';
instaCoffeeButton.innerHTML = '70% off Cat mug with every purchase!';
instaCoffeeBlock[3].appendChild(instaCoffeeButton);


const ultimateBedImg = getImage[12].src = 'https://odditymall.com/includes/content/upload/the-ultimate-bed-with-integrated-massage-chair-9156.jpg';

const ultimateBedBlock = document.getElementsByClassName('block3');
const ultimateBedBrand = document.createElement('div');
ultimateBedBrand.className = 'brand';
ultimateBedBrand.innerHTML = 'The Ultimate Bed';
ultimateBedBlock[3].appendChild(ultimateBedBrand);

const ultimateBedItem = document.createElement('div');
ultimateBedItem.className = 'item';
ultimateBedItem.innerHTML = 'The Only Piece of Furniture You\'ll need';
ultimateBedBlock[3].appendChild(ultimateBedItem);

const ultimateBedPrice = document.createElement('div');
ultimateBedPrice.className = 'price';
ultimateBedPrice.innerHTML = '$2,000';
ultimateBedBlock[3].appendChild(ultimateBedPrice);

const ultimateBedButton = document.createElement('button');
ultimateBedButton.className = 'discount';
ultimateBedButton.innerHTML = '30% off Shipping!If purchased today!';
ultimateBedBlock[3].appendChild(ultimateBedButton);














