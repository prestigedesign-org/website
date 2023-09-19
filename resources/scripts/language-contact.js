
// define language 
let languages = {
    english: {
        navMenuHome: `Home`,
        navMenuPortfolio: `Portfolio`,
        navMenuStore: `Store`,
        navMenuContact: `Contact`,
        navMenuCollection: `Collection`,


        footerTitle: `YOU DREAM IT, WE DESIGN IT`,
        footerHeading: `We can build you the home of your dreams`,
        footerButton: `SCHEDULE A MEETING`,

        heroHeadingContact: "Contact",
        getContactTitle: "Our Contacts",
        getContactHeading: "Get in touch with us",
        getContactDescription: "Get in touch to discuss your employee wellbeing needs today. Please give us a call, drop us an email, or fill out the contact form, and we’ll get back to you.",
        getAddressHeading: "Headquarter",
        getAddressAddress: "LGF41, Al Araimi BLVD Mall <br>Muscat, Sultanate of Oman",
        getContactPhoneTitle: "Phone Number",
        getEmailTitle: "Email Us",
        formSubject: "Subject",
        formName: "Name",
        formEmail: "Email",
        formPhone: "Phone number",
        formMessage: "Message",
        formSubmit: `Submit Form`

    },
    arabic: {
        navMenuHome: `الرئيسية`,
        navMenuPortfolio: `مثال العمل`,
        navMenuStore: `المتجر`,
        navMenuContact: `اتصل بنا`,
        navMenuCollection: `مجموعة`,




        footerTitle: `حلمت به، نحن نصممه`,
        footerHeading: `يمكننا بناء منزل أحلامك`,
        footerButton: `جدولة اجتماع`,


        heroHeadingContact: "تواصل معنا",
        getContactTitle: "جهات الاتصال لدينا",
        getContactHeading: "تواصل معنا",
        getContactDescription: "تواصل معنا لمناقشة احتياجات صحة الموظفين الخاصة بك اليوم. الرجاء الاتصال بنا ، أرسل لنا بريدًا إلكترونيًا ، أو قم بملء نموذج الاتصال وسنعاود الاتصال بك.",
        getAddressHeading: "المقر الرئيسي",
        getAddressAddress: "LGF41، مركز العريمي بوليفارد، مسقط، سلطنة عمان ",
        getContactPhoneTitle: "رقم الهاتف",
        getEmailTitle: "أرسل لنا بريدًا إلكترونيًا",

        formSubject: "الموضوع",
        formName: "الاسم",
        formEmail: "البريد الإلكتروني",
        formPhone: "رقم الهاتف",
        formMessage: "الرسالة",
        formSubmit: 'إرسال الاستمارة'

    }
}


//define elements
const navMenuPortfolio = document.getElementById(`nav-menu-portfolio`);
const navMenuHome = document.getElementById(`nav-menu-home`);
const navMenuStore = document.getElementById(`nav-menu-store`);
const navMenuContact = document.getElementById(`nav-menu-contact`);
const navMenuCollection = document.getElementById(`nav-menu-collection`);


const navMenuPortfolioBurger = document.getElementById(`nav-menu-portfolio-burger`);
const navMenuHomeBurger = document.getElementById(`nav-menu-home-burger`);
const navMenuStoreBurger = document.getElementById(`nav-menu-store-burger`);
const navMenuContactBurger = document.getElementById(`nav-menu-contact-burger`);
const navMenuCollectionBurger = document.getElementById(`nav-menu-collection-burger`);




const footerTitle = document.getElementById(`footer-title`);
const footerHeading = document.getElementById(`footer-heading`);
const footerButton = document.getElementById(`footer-button`);

const getContactTitle = document.getElementById('get-contact-title');
const getContactHeading = document.getElementById('get-contact-heading');
const getContactDescription = document.getElementById('get-contact-description');
const getAddressHeading = document.getElementById('get-address-heading');
const getAddressAddress = document.getElementById('get-address-address');
const getContactPhoneTitle = document.getElementById('get-contact-phone-title');

const getEmailTitle = document.getElementById('get-email-title');
const formSubject = document.getElementById('form-subject');
const formName = document.getElementById('form-name');
const formEmail = document.getElementById('form-email');
const formPhone = document.getElementById('form-phone');
const formMessage = document.getElementById('form-message');
const formSubmit = document.getElementById('form-submit');



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

            navMenuHomeBurger.innerHTML = languages[currentLanguage].navMenuHome;
            navMenuPortfolioBurger.innerHTML = languages[currentLanguage].navMenuPortfolio;
            navMenuStoreBurger.innerHTML = languages[currentLanguage].navMenuStore;
            navMenuContactBurger.innerHTML = languages[currentLanguage].navMenuContact;
            navMenuCollectionBurger.innerHTML = languages[currentLanguage].navMenuCollectionBurger;
            footerTitle.innerHTML = languages[currentLanguage].footerTitle;
            footerHeading.innerHTML = languages[currentLanguage].footerHeading;
            footerButton.innerHTML = languages[currentLanguage].footerButton;




            getContactTitle.innerHTML = languages[currentLanguage].getContactTitle;
            getContactHeading.innerHTML = languages[currentLanguage].getContactHeading;
            getContactDescription.innerHTML = languages[currentLanguage].getContactDescription;
            getAddressHeading.innerHTML = languages[currentLanguage].getAddressHeading;
            getAddressAddress.innerHTML = languages[currentLanguage].getAddressAddress;
            getContactPhoneTitle.innerHTML = languages[currentLanguage].getContactPhoneTitle;
            getEmailTitle.innerHTML = languages[currentLanguage].getEmailTitle
            formSubject.placeholder = languages[currentLanguage].formSubject;
            formName.placeholder = languages[currentLanguage].formName;
            formEmail.placeholder = languages[currentLanguage].formEmail;
            formPhone.placeholder = languages[currentLanguage].formPhone;
            formMessage.placeholder = languages[currentLanguage].formMessage;
            formSubmit.innerHTML = languages[currentLanguage].formSubmit;

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

