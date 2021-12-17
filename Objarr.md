<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style type="text/css">
        .controlled-img{
            width: 100px;
            height: 100px;
        }
        img{
            max-width: 33%;
            max-height: 33%;
            min-height: 33%;
            min-width: 33%;
        }
    </style>
</head>
<body>
    <div class="controlled-img" id="all-dogs"></div>
    <div class="controlled-img" id="odd-boys"></div>
    <div class="controlled-img" id="even-boys"></div>
    <div class="controlled-img" id="good-boys"></div>
    <div class="controlled-img" id="naughty-doggos"></div>
    <div class="controlled-img" id="carousel-doggos"></div>
</div>
    <script>
        const IMG_ARR = ["https://images.dog.ceo/breeds/terrier-border/n02093754_7440.jpg",
"https://images.dog.ceo/breeds/spaniel-sussex/n02102480_8117.jpg",
"https://images.dog.ceo/breeds/appenzeller/n02107908_737.jpg",
"https://images.dog.ceo/breeds/pitbull/20190801_154956.jpg",
"https://images.dog.ceo/breeds/mastiff-tibetan/n02108551_146.jpg",
"https://images.dog.ceo/breeds/newfoundland/n02111277_3067.jpg",
"https://images.dog.ceo/breeds/papillon/n02086910_3924.jpg",
"https://images.dog.ceo/breeds/terrier-welsh/lucy.jpg",
"https://images.dog.ceo/breeds/terrier-kerryblue/n02093859_2835.jpg",
"https://images.dog.ceo/breeds/poodle-standard/n02113799_848.jpg"]

const NAUGHTY_LIST = [
{goodboy: false, url: "https://images.dog.ceo/breeds/terrier-norwich/n02094258_2559.jpg"},
{goodboy: true, url: "https://images.dog.ceo/breeds/kuvasz/n02104029_1369.jpg"},
{goodboy: true, url: "https://images.dog.ceo/breeds/basenji/n02110806_2580.jpg"},
{goodboy: false, url: "https://images.dog.ceo/breeds/terrier-russell/iguet4.jpeg"},
{goodboy: true, url:"https://images.dog.ceo/breeds/springer-english/n02102040_841.jpg"},
{goodboy: true, url:"https://images.dog.ceo/breeds/hound-english/n02089973_2249.jpg"},
{goodboy: false, url: "https://images.dog.ceo/breeds/terrier-westhighland/n02098286_345.jpg"},
{goodboy: true, url:"https://images.dog.ceo/breeds/ovcharka-caucasian/IMG_20190822_215037.jpg"},
{goodboy: false, url:"https://images.dog.ceo/breeds/briard/n02105251_6840.jpg"},
{goodboy: true, url:"https://images.dog.ceo/breeds/hound-blood/n02088466_10773.jpg"}
]

const allDogs =document.getElementsById('all-dog')

const newDog = =document.getElementsById('img')
newBod.setAtrribute('src' , IMG_ARR[0])
allDogs.appendchild(newDog);
    
    
    </script>
</body>
</html>












