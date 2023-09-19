
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


        productCta: 'Reach out to us for additional details',
        heroHeadingStore: 'Store',


        productOneTitle: 'SHIRAZ Collection',
        productOneDescription: `With inspiration from the Persian city of art and magnificence, the SHIRAZ album is the epitome of exclusiveness, speaking to those who want to make a true impression with their interiors.

`,

        productTwoTitle: 'MOSAIC Collection',
        productTwoDescription: `The MOSAIC album holds modern designs in sober nuances adapted for contemporary homes and spaces. Inspiration has been drawn from the botanical world as well as from geometrical shapes and patterns.`,


        productThreeTitle: 'PANTHERA Collection',
        productThreeDescription: `PANTHERA holds tribute to the extinct Caspian tiger. Just like her, the album is bold, thrilling and vibrating. The designs represent strong and modern statements, with beauties from the wilderness and silhouettes from nature. A mix of glass beads, fluid inks and exclusive colors creates a new level of special effects and visual sensations`,


        productFourTitle: 'NEGIN Collection',
        productFourDescription: `The NEGIN collection is inspired by traditional hand-printing techniques from the Indian subcontinent, mixed with exclusive textured and multi-layered plain patterns.`,

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

        productCta: 'تواصل معنا لمزيد من التفاصيل',
        heroHeadingStore: 'المتجر',
        productOneTitle: 'الأناقة في الأثاث',
        productOneDescription: `ارتق بمساحات معيشتك باختيارنا الدقيق لقطع الأثاث الأنيقة، المصنوعة بعناية فائقة لجلب الأناقة والراحة والجمال الدائم إلى منزلك. استكشف عالمًا من الخيارات، من الكلاسيكية إلى المعاصرة، وابحث عن القطع المثالية لإنشاء بيئة متناغمة حيث يمكنك الاسترخاء والترفيه بأناقة.`,
        productTwoTitle: 'ديكور المنزل الفني',
        productTwoDescription: `حولي مساحات منازلك إلى أعمال فنية ساحرة مع مجموعتنا المختارة بعناية من قطع ديكور المنزل الفريدة. كل قطعة هي روائع بحد ذاتها، حيث تمزج بين الإبداع الفني والجانب العملي. اكتشفي أناقة الديكور الخفية لدينا، المصممة لتنفس الحياة في مساحاتك وتلهم المحادثات بين ضيوفك.`,
        productThreeTitle: 'أقمشة ونسيج فاخرة',
        productThreeDescription: `انغمس في عالم الفخامة مع مجموعتنا الحصرية من الأقمشة والنسيج الرفيع. انغمس في متعة الشعور بالمواد الرائعة التي تعد براحة لا مثيل لها ودفء وجاذبية بصرية لا تضاهى. سواء كنت تزين أثاثك أو نوافذك، ستمنح أقمشتنا لمسة من الفخامة لتصميم داخلي مبهر.`,
        productFourTitle: 'خدمات التصميم المخصصة',
        productFourDescription: `ابدأ رحلة تصميم داخلي مصممة ومطابقة لرؤيتك الفريدة. تذهب خدماتنا المخصصة للتصميم إلى ما هو أبعد من العادي، حيث نتعاون بشكل وثيق معك لإحياء أماكنك الحلم. سيقوم مصممونا ذوي الخبرة بإرشادك خلال كل خطوة، مضمونين من خلالها أن تنعكس مساحاتك الداخلية شخصيتك وتقف كشهادة على ذوقك الرفيع.`,



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






const productCta = document.querySelectorAll('.product-cta');
const heroHeadingStore = document.getElementById('hero-heading-store');
const productOneTitle = document.getElementById('product-one-title');
const productOneDescription = document.getElementById('product-one-description');
const productTwoTitle = document.getElementById('product-two-title');
const productTwoDescription = document.getElementById('product-two-description');
const productThreeTitle = document.getElementById('product-three-title');
const productThreeDescription = document.getElementById('product-three-description');
const productFourTitle = document.getElementById('product-four-title');
const productFourDescription = document.getElementById('product-four-description');




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

            for (let z = 0; z < productCta.length; z++) {
                productCta[z].innerHTML = languages[currentLanguage].productCta;
            }

            heroHeadingStore.innerHTML = languages[currentLanguage].heroHeadingStore;
            productOneTitle.innerHTML = languages[currentLanguage].productOneTitle;
            productOneDescription.innerHTML = languages[currentLanguage].productOneDescription;
            productTwoTitle.innerHTML = languages[currentLanguage].productTwoTitle;
            productTwoDescription.innerHTML = languages[currentLanguage].productTwoDescription;
            productThreeTitle.innerHTML = languages[currentLanguage].productThreeTitle;
            productThreeDescription.innerHTML = languages[currentLanguage].productThreeDescription;
            productFourTitle.innerHTML = languages[currentLanguage].productFourTitle;
            productFourDescription.innerHTML = languages[currentLanguage].productFourDescription;




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

