
// define language 
let languages = {
    english: {
        navMenuHome: `Home`,
        navMenuPortfolio: `Portfolio`,
        navMenuAbout: `About`,
        navMenuStore: `Services`,
        navMenuContact: `Contact`,
        navMenuCollection: `Shop`,

        sloganOne: `Prestige Design`,
        sloganTwo: `SERVICES`,
        sloganThree: `ONLINE SHOP`,
        sloganFour: `PORTFOLIO`,


    },
    arabic: {
        navMenuHome: `الرئيسية`,
        navMenuPortfolio: `المعرض`,
        navMenuAbout: `معلومات عنا`,
        navMenuStore: `الخدمات`,
        navMenuContact: `اتصل بنا`,
        navMenuCollection: `المتجر`,


        sloganOne: `تصميم الهيبة`,
        sloganTwo: `الخدمات`,
        sloganThree: `المتجر الإلكتروني`,
        sloganFour: `المعرض `,
    }
}


//define elements
const navMenuPortfolio = document.getElementById(`nav-menu-portfolio`);
const navMenuHome = document.getElementById(`nav-menu-home`);
const navMenuStore = document.getElementById(`nav-menu-store`);
const navMenuContact = document.getElementById(`nav-menu-contact`);
const navMenuCollection = document.getElementById(`nav-menu-collection`);
const navMenuAbout = document.getElementById(`nav-menu-about`);


const navMenuPortfolioBurger = document.getElementById(`nav-menu-portfolio-burger`);
const navMenuHomeBurger = document.getElementById(`nav-menu-home-burger`);
const navMenuStoreBurger = document.getElementById(`nav-menu-store-burger`);
const navMenuContactBurger = document.getElementById(`nav-menu-contact-burger`);
const navMenuCollectionBurger = document.getElementById(`nav-menu-collection-burger`);


const sloganOne = document.getElementById(`slogan-one`);
const sloganTwo = document.getElementById(`slogan-two`);
const sloganThree = document.getElementById(`slogan-three`);
const sloganFour = document.getElementById(`slogan-four`);


const languageToggeler = document.getElementById(`language-toggeler`);

let websiteLanguage = localStorage.getItem('language');

const enLanguageIcon = document.getElementById(`en-language`);
const arLanguageIcon = document.getElementById(`ar-language`);


if (websiteLanguage === null) {
    websiteLanguage = 'english';
}

function laguageSetter() {
    for (let i = 0; i < Object.keys(languages).length; i++) {
        const currentLanguage = Object.keys(languages)[i];
        localStorage.setItem(`language`, `english`);
        if (currentLanguage === websiteLanguage) {
            navMenuHome.innerHTML = languages[currentLanguage].navMenuHome;
            navMenuPortfolio.innerHTML = languages[currentLanguage].navMenuPortfolio;
            navMenuStore.innerHTML = languages[currentLanguage].navMenuStore;
            navMenuContact.innerHTML = languages[currentLanguage].navMenuContact;
            navMenuCollection.innerHTML = languages[currentLanguage].navMenuCollection;
            navMenuAbout.innerHTML = languages[currentLanguage].navMenuAbout;

            navMenuHomeBurger.innerHTML = languages[currentLanguage].navMenuHome;
            navMenuPortfolioBurger.innerHTML = languages[currentLanguage].navMenuPortfolio;
            navMenuStoreBurger.innerHTML = languages[currentLanguage].navMenuStore;
            navMenuContactBurger.innerHTML = languages[currentLanguage].navMenuContact;
            navMenuCollectionBurger.innerHTML = languages[currentLanguage].navMenuCollection;



            sloganOne.innerHTML = languages[currentLanguage].sloganOne;
            sloganTwo.innerHTML = languages[currentLanguage].sloganTwo;
            sloganThree.innerHTML = languages[currentLanguage].sloganThree;
            sloganFour.innerHTML = languages[currentLanguage].sloganFour;

        }
    }
    localStorage.setItem('language', websiteLanguage);
}

function loadLanguage() {
    while (document.body.classList.length > 0) {
        document.body.classList.remove(document.body.classList.item(0));
    }

    if (websiteLanguage === `english`) {
        document.body.classList.add(`website-language-english`);
        enLanguageIcon.style.display = `none`;
        arLanguageIcon.style.display = `flex`;
    }
    else if (websiteLanguage === `arabic`) {
        document.body.classList.add(`website-language-arabic`);
        enLanguageIcon.style.display = `flex`;
        arLanguageIcon.style.display = `none`;
    }
    laguageSetter();
}
loadLanguage();

languageToggeler.addEventListener(`click`, function () {
    while (document.body.classList.length > 0) {
        document.body.classList.remove(document.body.classList.item(0));
    }
    if (websiteLanguage === `english`) {
        websiteLanguage = `arabic`;
        document.body.classList.add(`website-language-arabic`);
        enLanguageIcon.style.display = `flex`;
        arLanguageIcon.style.display = `none`;
    }
    else if (websiteLanguage === `arabic`) {
        websiteLanguage = `english`;
        document.body.classList.add(`website-language-english`);
        enLanguageIcon.style.display = `none`;
        arLanguageIcon.style.display = `flex`;
    }
    laguageSetter();
})

