
// define language 
let languages = {
    english: {
        navMenuHome: `Home`,
        navMenuPortfolio: `Portfolio`,
        navMenuAbout: `about`,
        navMenuStore: `Services`,
        navMenuContact: `Contact`,
        navMenuCollection: `Shop`,

        heroHeadingCollection: `Services`,

        servicesTitle: `OUR SERVICES`,
        servicesHeading: `We provide more than just quality services`,
        servicesButton: `GO TO COLLECTIONS`,
        servicesOneHeading: `Interior Design Consultation`,
        servicesOneDescription: `Unlock the potential of your space with a personalized consultation.Our experts will assess your needs, style, and vision to create a tailored design plan.`,
        servicesTwoHeading: `Space Planning and Layout`,
        servicesTwoDescription: `Maximize functionality and aesthetics with our space planning expertise.We'll optimize room layouts and flow for a harmonious living experience.`,
        servicesThreeHeading: `Custom Furnishings and Décor`,
        servicesThreeDescription: `Elevate your space with bespoke furniture and décor.Our custom creations add unique charm and personality to every room.`,

        workTitle: `HOW WE WORK`,
        workHeading: `3 Easy steps to get interior design`,
        workDescription: `The of your kitchen varies from one layout to another.The shape of the kitchen also determines the and space for cabinets, countertops, and accessories.`,

        workInnerOneHeading: `We Visit You In the Comfort of Your Home`,
        workInnerOneDescription: `The of your kitchen varies from one layout to another. The shape of the kitchen also determines the and space for cabinets, countertops, and accessories.`,

        workInnerTwoHeading: `preliminary Computer Designs`,
        workInnerTwoDescription: `Next, our experts translate your vision into preliminary computer designs. This step brings your ideas to life on  screen, ensuring we're on the right track.  `,

        workInnerThreeHeading: `Begin The Detailed design process`,
        workInnerThreeDescription: `With your feedback, we refine and begin the detailed design process. Every element is meticulously crafted to create a  space that reflects your unique style and personality.`,


        footerTitle: `YOU DREAM IT, WE DESIGN IT`,
        footerHeading: `We can build you the home of your dreams`,
        footerButton: `SCHEDULE A MEETING`,
    },
    arabic: {
        navMenuHome: `الرئيسية`,
        navMenuPortfolio: `المعرض`,
        navMenuAbout: `معلومات عنا`,
        navMenuStore: `الخدمات`,
        navMenuContact: `اتصل بنا`,
        navMenuCollection: `المتجر`,

        heroHeadingCollection: `الخدمات`,


        servicesTitle: `خدماتنا`,
        servicesHeading: `نحن نقدم أكثر من مجرد خدمات جودة`,
        servicesButton: `الذهاب إلى المجموعة `,
        servicesOneHeading: `استشارات تصميم داخلي`,
        servicesOneDescription: `استفد من إمكانيات مساحتك من خلال استشارة شخصية. سيقوم خبراؤنا بتقييم احتياجاتك وأسلوبك ورؤيتك لإنشاء خطة تصميم مخصصة.`,
        servicesTwoHeading: `تخطيط المساحة والتصميم`,
        servicesTwoDescription: `استفد من تخطيط المساحة والتصميم لزيادة الوظائف والجمال. سنقوم بتحسين تخطيط الغرف وتدفقها لتجربة سكنية متناغمة.`,
        servicesThreeHeading: `الأثاث المخصص والديكور`,
        servicesThreeDescription: `ارفع مساحتك مع الأثاث والديكور المخصص. إبداعاتنا المخصصة تضيف سحرًا وشخصية فريدة إلى كل غرفة.`,


        workTitle: `كيف نعمل`,
        workHeading: `3 خطوات سهلة للحصول على تصميم داخلي`,
        workDescription: `يتفاوت تصميم مطبخك اعتمادًا على التخطيط. شكل المطبخ يحدد أيضًا حجم ومساحة الخزائن والأسطح والإكسسوارات.`,
        workInnerOneHeading: `نزورك في منزلك بكل راحة`,
        workInnerOneDescription: `يتفاوت تصميم مطبخك اعتمادًا على التخطيط. شكل المطبخ يحدد أيضًا حجم ومساحة الخزائن والأسطح والإكسسوارات.`,
        workInnerTwoHeading: `تصاميم الكمبيوتر الأولية`,
        workInnerTwoDescription: `بعد ذلك، يترجم خبراؤنا رؤيتك إلى تصاميم كمبيوتر أولية. تجعل هذه الخطوة أفكارك تنبض بالحياة على الشاشة، مضمونين أننا على الطريق الصحيح.`,
        workInnerThreeHeading: `بدء عملية التصميم التفصيلي`,
        workInnerThreeDescription: `باستخدام ملاحظاتك، نقوم بتنقيح وبدء عملية التصميم التفصيلي. يتم صقل كل عنصر بعناية لإنشاء مساحة تعكس أسلوبك وشخصيتك الفريدة.`,

        footerTitle: `حلمت به، نحن نصممه`,
        footerHeading: `يمكننا بناء منزل أحلامك`,
        footerButton: `جدولة اجتماع`,

    }
}


//define elements
const navMenuPortfolio = document.getElementById(`nav-menu-portfolio`);
const navMenuHome = document.getElementById(`nav-menu-home`);
const navMenuStore = document.getElementById(`nav-menu-store`);
const navMenuContact = document.getElementById(`nav-menu-contact`);
const navMenuCollection = document.getElementById(`nav-menu-collection`);
const navMenuAbout = document.getElementById(`nav-menu-about`);

const heroHeadingCollection = document.getElementById(`hero-heading-collection`);

const navMenuPortfolioBurger = document.getElementById(`nav-menu-portfolio-burger`);
const navMenuHomeBurger = document.getElementById(`nav-menu-home-burger`);
const navMenuStoreBurger = document.getElementById(`nav-menu-store-burger`);
const navMenuContactBurger = document.getElementById(`nav-menu-contact-burger`);
const navMenuCollectionBurger = document.getElementById(`nav-menu-collection-burger`);


const servicesTitle = document.getElementById(`services-title`);
const servicesHeading = document.getElementById(`services-heading`);
const servicesButton = document.getElementById(`services-button`);
const servicesOneHeading = document.getElementById(`service-one-heading`);
const servicesOneDescription = document.getElementById(`service-one-description`);
const servicesTwoHeading = document.getElementById(`service-two-heading`);
const servicesTwoDescription = document.getElementById(`service-two-description`);
const servicesThreeHeading = document.getElementById(`service-three-heading`);
const servicesThreeDescription = document.getElementById(`service-three-description`);


const workTitle = document.getElementById(`work-title`);
const workHeading = document.getElementById(`work-heading`);
const workDescription = document.getElementById(`work-description`);
const workInnerOneHeading = document.getElementById(`work-inner-one-heading`);
const workInnerOneDescription = document.getElementById(`work-inner-one-description`);
const workInnerTwoHeading = document.getElementById(`work-inner-two-heading`);
const workInnerTwoDescription = document.getElementById(`work-inner-two-description`);
const workInnerThreeHeading = document.getElementById(`work-inner-three-heading`);
const workInnerThreeDescription = document.getElementById(`work-inner-three-description`);


const footerTitle = document.getElementById(`footer-title`);
const footerHeading = document.getElementById(`footer-heading`);
const footerButton = document.getElementById(`footer-button`);
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


            heroHeadingCollection.innerHTML = languages[currentLanguage].heroHeadingCollection;

            servicesTitle.innerHTML = languages[currentLanguage].servicesTitle;
            servicesHeading.innerHTML = languages[currentLanguage].servicesHeading;
            servicesButton.innerHTML = languages[currentLanguage].servicesButton;
            servicesOneHeading.innerHTML = languages[currentLanguage].servicesOneHeading;
            servicesOneDescription.innerHTML = languages[currentLanguage].servicesOneDescription;
            servicesTwoHeading.innerHTML = languages[currentLanguage].servicesTwoHeading;
            servicesTwoDescription.innerHTML = languages[currentLanguage].servicesTwoDescription;
            servicesThreeHeading.innerHTML = languages[currentLanguage].servicesThreeHeading;
            servicesThreeDescription.innerHTML = languages[currentLanguage].servicesThreeDescription;


            workTitle.innerHTML = languages[currentLanguage].workTitle;
            workHeading.innerHTML = languages[currentLanguage].workHeading;
            workDescription.innerHTML = languages[currentLanguage].workDescription;
            workInnerOneHeading.innerHTML = languages[currentLanguage].workInnerOneHeading;
            workInnerOneDescription.innerHTML = languages[currentLanguage].workInnerOneDescription;
            workInnerTwoHeading.innerHTML = languages[currentLanguage].workInnerTwoHeading;
            workInnerTwoDescription.innerHTML = languages[currentLanguage].workInnerTwoDescription;
            workInnerThreeHeading.innerHTML = languages[currentLanguage].workInnerThreeHeading;
            workInnerThreeDescription.innerHTML = languages[currentLanguage].workInnerThreeDescription;

            footerTitle.innerHTML = languages[currentLanguage].footerTitle;
            footerHeading.innerHTML = languages[currentLanguage].footerHeading;
            footerButton.innerHTML = languages[currentLanguage].footerButton;

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

