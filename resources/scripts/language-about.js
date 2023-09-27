let languageAssitant;
let collections;
// define language 
let languages = {
    english: {
        navMenuHome: `Home`,
        navMenuPortfolio: `Portfolio`,
        navMenuAbout: `About`,
        navMenuStore: `Services`,
        navMenuContact: `Contact`,
        navMenuCollection: `Shop`,

        aboutUpTitle: `ABOUT US`,
        aboutUpHeading: `Creative Solutions by professional designers`,
        aboutUpDescription: `We are an interior design studio in Muscat, focusing on creating personalized and eco-friendly spaces that align with our clients' unique personalities, values, and artistic preferences, promoting a better way of living.`,
        aboutUpButton: `CONTACT US`,

        aboutDownDescription: `At Prestige Design, we view design as a fusion of art, psychology, and biology, drawing inspiration from Biomimicry. Our holistic design approach involves deeply understanding our clients' personality, values, and beliefs to express them creatively. We use design elements, lighting, sound, and nature to create spaces that engage all five senses, fostering happier and healthier living and working environments where cherished memories can be made.`,
        aboutDownName: `Majid and Zahra`,
        aboutDownPosition: `Founders`,


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

        aboutUpTitle: `معلومات عنا`,
        aboutUpHeading: `حلول إبداعية من مصممين محترفين`,
        aboutUpDescription: `في Navan.one، نحن متحمسون لتحويل المنازل إلى منازل. بخبرة سنوات والتزام بالتميز في التصميم، يقدم فريقنا أحلامك الداخلية بواقعية. تعرَّف على الأشخاص الذين يقفون وراء التصاميم وفلسفتنا.`,
        aboutUpButton: "اتصل بنا",

        aboutDownDescription: `في Navan.one، نحن متحمسون لتحويل المنازل إلى منازل. بخبرة سنوات والتزام بالتميز في التصميم، يقدم فريقنا أحلامك الداخلية بواقعية. تعرَّف على الأشخاص الذين يقفون وراء التصاميم وفلسفتنا.`,
        aboutDownName: `جون دو`,
        aboutDownPosition: `الرئيس التنفيذي`,



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


const aboutUpTitle = document.getElementById(`about-up-title`);
const aboutUpHeading = document.getElementById(`about-up-heading`);
const aboutUpDescription = document.getElementById(`about-up-description`);
const aboutUpButton = document.getElementById(`about-up-button`);


const aboutDownDescription = document.getElementById(`about-down-description`);
const aboutDownName = document.getElementById(`about-down-name`);
const aboutDownPosition = document.getElementById(`about-down-position`);

const navMenuPortfolioBurger = document.getElementById(`nav-menu-portfolio-burger`);
const navMenuHomeBurger = document.getElementById(`nav-menu-home-burger`);
const navMenuStoreBurger = document.getElementById(`nav-menu-store-burger`);
const navMenuContactBurger = document.getElementById(`nav-menu-contact-burger`);
const navMenuCollectionBurger = document.getElementById(`nav-menu-collection-burger`);


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

            footerTitle.innerHTML = languages[currentLanguage].footerTitle;
            footerHeading.innerHTML = languages[currentLanguage].footerHeading;
            footerButton.innerHTML = languages[currentLanguage].footerButton;



            aboutUpTitle.innerHTML = languages[currentLanguage].aboutUpTitle;
            aboutUpHeading.innerHTML = languages[currentLanguage].aboutUpHeading;
            aboutUpDescription.innerHTML = languages[currentLanguage].aboutUpDescription;
            aboutUpButton.innerHTML = languages[currentLanguage].aboutUpButton;

            aboutDownDescription.innerHTML = languages[currentLanguage].aboutDownDescription;
            aboutDownName.innerHTML = languages[currentLanguage].aboutDownName;
            aboutDownPosition.innerHTML = languages[currentLanguage].aboutDownPosition;



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
        collections = [
            [
                // collection name
                [`PANTHERA Collection`],
                // collection description
                [`PANTHERA holds tribute to the extinct Caspian tiger. Just like her, the album is bold, thrilling and vibrating. The designs represent strong and modern statements, with beauties from the wilderness and silhouettes from nature. A mix of glass beads, fluid inks and exclusive colors creates a new level of special effects and visual sensations`],
                // design
                [
                    [
                        [`Golshan`],
                        // roll size 
                        [`0.53 m x 10.05 m `],
                        // repeat
                        [`64 cm`],
                        // match
                        [`Drop`],
                        // quality
                        [`100% FSC-certified non-woven`],
                        // images
                        [
                            [`resources/images/collections/panthera/golshan/golshan-1.webp`],
                            [`resources/images/collections/panthera/golshan/golshan-2.webp`],
                            [`resources/images/collections/panthera/golshan/golshan-3.webp`]


                        ],
                        // color ways
                        [
                            [`resources/images/collections/panthera/golshan/ph49201.png`],
                            [`resources/images/collections/panthera/golshan/ph49202.png`],
                            [`resources/images/collections/panthera/golshan/ph49203.png`],
                            [`resources/images/collections/panthera/golshan/ph49204.png`],
                            [`resources/images/collections/panthera/golshan/ph49205.png`],
                            [`resources/images/collections/panthera/golshan/ph49206.png`]
                        ],
                        [
                            [`ph49201`],
                            [`ph49202`],
                            [`ph49203`],
                            [`ph49204`],
                            [`ph49205`],
                            [`ph49206`]
                        ]
                    ],
                    [
                        [`Palangi`],
                        // roll size 
                        [`0.53 m x 10.05 m `],
                        // repeat
                        [`64 cm`],
                        // match
                        [`Drop`],
                        // quality
                        [`100% FSC-certified non-woven`],
                        // images
                        [
                            [`resources/images/collections/panthera/palangi/palangi-1.webp`],

                        ],
                        // color ways
                        [
                            [`resources/images/collections/panthera/palangi/ph49001.png`],
                            [`resources/images/collections/panthera/palangi/ph49002.png`],
                            [`resources/images/collections/panthera/palangi/ph49003.png`],
                            [`resources/images/collections/panthera/palangi/ph49004.png`],
                            [`resources/images/collections/panthera/palangi/ph49005.png`]
                        ],
                        [
                            [`ph49001`],
                            [`ph49002`],
                            [`ph49003`],
                            [`ph49004`],
                            [`ph49005`]
                        ]
                    ],
                    [
                        [`Bisheh`],
                        // roll size 
                        [`0.53 m x 10.05 m `],
                        // repeat
                        [`64 cm`],
                        // match
                        [`Drop`],
                        // quality
                        [`100% FSC-certified non-woven`],
                        // images
                        [
                            [`resources/images/collections/panthera/bisheh/bisheh-1.webp`],
                            [`resources/images/collections/panthera/bisheh/bisheh-2.webp`]

                        ],
                        // color ways
                        [
                            [`resources/images/collections/panthera/bisheh/ph49301.png`],
                            [`resources/images/collections/panthera/bisheh/ph49302.png`],
                            [`resources/images/collections/panthera/bisheh/ph49303.png`],
                            [`resources/images/collections/panthera/bisheh/ph49304.png`],
                            [`resources/images/collections/panthera/bisheh/ph49305.png`]
                        ],
                        [
                            [`ph49301`],
                            [`ph49302`],
                            [`ph49303`],
                            [`ph49304`],
                            [`ph49305`]
                        ]
                    ],
                    [
                        [`Maroc`],
                        // roll size 
                        [`0.53 m x 10.05 m `],
                        // repeat
                        [`64 cm`],
                        // match
                        [`Drop`],
                        // quality
                        [`100% FSC-certified non-woven`],
                        // images
                        [
                            [`resources/images/collections/panthera/maroc/maroc-1.webp`],
                            [`resources/images/collections/panthera/maroc/maroc-2.webp`]

                        ],
                        // color ways
                        [
                            [`resources/images/collections/panthera/maroc/ph49101.png`],
                            [`resources/images/collections/panthera/maroc/ph49102.png`],
                            [`resources/images/collections/panthera/maroc/ph49103.png`],
                            [`resources/images/collections/panthera/maroc/ph49104.png`],
                            [`resources/images/collections/panthera/maroc/ph49105.png`]
                        ],
                        [
                            [`ph49101`],
                            [`ph49102`],
                            [`ph49103`],
                            [`ph49104`],
                            [`ph49105`]
                        ]
                    ],
                    [
                        [`Nazok`],
                        // roll size 
                        [`0.53 m x 10.05 m `],
                        // repeat
                        [`64 cm`],
                        // match
                        [`Straight`],
                        // quality
                        [`100% FSC-certified non-woven`],
                        // images
                        [
                            [`resources/images/collections/panthera/nazok/nazok-1.webp`],

                        ],
                        // color ways
                        [
                            [`resources/images/collections/panthera/nazok/ph49501.png`],
                            [`resources/images/collections/panthera/nazok/ph49502.png`],
                            [`resources/images/collections/panthera/nazok/ph49503.png`],
                            [`resources/images/collections/panthera/nazok/ph49504.png`],

                        ],
                        [
                            [`ph49501`],
                            [`ph49502`],
                            [`ph49503`],
                            [`ph49504`]]
                    ],
                    [
                        [`Kish`],
                        // roll size 
                        [`0.53 m x 10.05 m `],
                        // repeat
                        [`64 cm`],
                        // match
                        [`Drop`],
                        // quality
                        [`100% FSC-certified non-woven`],
                        // images
                        [
                            [`resources/images/collections/panthera/kish/kish-1.webp`],
                            [`resources/images/collections/panthera/kish/kish-2.webp`],

                        ],
                        // color ways
                        [
                            [`resources/images/collections/panthera/kish/ph49401.png`],
                            [`resources/images/collections/panthera/kish/ph49402.png`],
                            [`resources/images/collections/panthera/kish/ph49403.png`],
                            [`resources/images/collections/panthera/kish/ph49404.png`],
                            [`resources/images/collections/panthera/kish/ph49405.png`],
                            [`resources/images/collections/panthera/kish/ph49406.png`]
                        ],
                        [
                            [`ph49401`],
                            [`ph49402`],
                            [`ph49403`],
                            [`ph49404`],
                            [`ph49405`],
                            [`ph49406`]
                        ]
                    ],
                    [
                        [`Plain-1`],
                        // roll size 
                        [`0.53 m x 10.05 m `],
                        // repeat
                        [`64 cm`],
                        // match
                        [`Drop`],
                        // quality
                        [`100% FSC-certified non-woven`],
                        // images
                        [
                            [`resources/images/collections/panthera/plain-1/plain-1.webp`],


                        ],
                        // color ways
                        [
                            [`resources/images/collections/panthera/plain-1/ph49701.png`],
                            [`resources/images/collections/panthera/plain-1/ph49702.png`],
                            [`resources/images/collections/panthera/plain-1/ph49703.png`],
                            [`resources/images/collections/panthera/plain-1/ph49704.png`],
                            [`resources/images/collections/panthera/plain-1/ph49705.png`],
                            [`resources/images/collections/panthera/plain-1/ph49706.png`],
                            [`resources/images/collections/panthera/plain-1/ph49707.png`],
                            [`resources/images/collections/panthera/plain-1/ph49708.png`]
                        ],
                        [
                            [`ph49701`],
                            [`ph49702`],
                            [`ph49703`],
                            [`ph49704`],
                            [`ph49705`],
                            [`ph49706`],
                            [`ph49707`],
                            [`ph49708`]
                        ]
                    ],
                    [
                        [`Plain-2`],
                        // roll size 
                        [`0.53 m x 10.05 m `],
                        // repeat
                        [`64 cm`],
                        // match
                        [`Drop`],
                        // quality
                        [`100% FSC-certified non-woven`],
                        // images
                        [
                            [`resources/images/collections/panthera/plain-2/plain-1.webp`],
                            [`resources/images/collections/panthera/plain-2/plain-2.webp`],

                        ],
                        // color ways
                        [
                            [`resources/images/collections/panthera/plain-2/ph49601.png`],
                            [`resources/images/collections/panthera/plain-2/ph49602.png`],
                            [`resources/images/collections/panthera/plain-2/ph49603.png`],
                            [`resources/images/collections/panthera/plain-2/ph49604.png`],
                            [`resources/images/collections/panthera/plain-2/ph49605.png`],

                        ],
                        [
                            [`ph49601`],
                            [`ph49602`],
                            [`ph49603`],
                            [`ph49604`],
                            [`ph49605`]
                        ]
                    ],

                ]
            ],
            [
                // collection name
                [`SHIRAZ Collection`],
                // collection description
                [`With inspiration from the Persian city of art and magnificence, the SHIRAZ album is the epitome of exclusiveness, speaking to those who want to make a true impression with their interiors.`],
                // design
                [
                    // kaj
                    [
                        [`KAJ`],
                        // roll size 
                        [`0.53 m x 10.05 m`],
                        // repeat
                        [`64 cm`],
                        // match
                        [`Drop`],
                        // quality
                        [`100% FSC-certified non-woven`],
                        // images
                        [
                            [`resources/images/collections/shiraz/kaj/kaj-1.webp`],
                            [`resources/images/collections/shiraz/kaj/kaj-2.webp`],
                            [`resources/images/collections/shiraz/kaj/kaj-3.webp`],
                            [`resources/images/collections/shiraz/kaj/kaj-4.webp`],
                            [`resources/images/collections/shiraz/kaj/kaj-5.webp`],
                            [`resources/images/collections/shiraz/kaj/kaj-6.webp`],
                            [`resources/images/collections/shiraz/kaj/kaj-7.webp`]
                        ],
                        // color ways
                        [
                            [`resources/images/collections/shiraz/kaj/sr28001.png`],
                            [`resources/images/collections/shiraz/kaj/sr28002.png`],
                            [`resources/images/collections/shiraz/kaj/sr28003.png`],
                            [`resources/images/collections/shiraz/kaj/sr28004.png`],
                            [`resources/images/collections/shiraz/kaj/sr28005.png`],
                            [`resources/images/collections/shiraz/kaj/sr28006.png`]
                        ],
                        [
                            [`sr28001`],
                            [`sr28002`],
                            [`sr28003`],
                            [`sr28004`],
                            [`sr28005`],
                            [`sr28006`]
                        ]
                    ],
                    // ardakan
                    [
                        [`ARDAKAN`],
                        // roll size 
                        [`0.53 m x 10.05 m`],
                        // repeat
                        [`26.5 cm`],
                        // match
                        [`Straight`],
                        // quality
                        [`100% FSC-certified non-woven`],
                        // images
                        [
                            [`resources/images/collections/shiraz/ardakan/ardakan-1.webp`],
                            [`resources/images/collections/shiraz/ardakan/ardakan-2.webp`],
                            [`resources/images/collections/shiraz/ardakan/ardakan-3.webp`],
                            [`resources/images/collections/shiraz/ardakan/ardakan-4.webp`],
                        ],
                        // color ways
                        [
                            [`resources/images/collections/shiraz/ardakan/sr28301.png`],
                            [`resources/images/collections/shiraz/ardakan/sr28302.png`],
                            [`resources/images/collections/shiraz/ardakan/sr28303.png`],
                            [`resources/images/collections/shiraz/ardakan/sr28304.png`],
                            [`resources/images/collections/shiraz/ardakan/sr28305.png`],
                        ],
                        [
                            [`sr28301`],
                            [`sr28302`],
                            [`sr28303`],
                            [`sr28304`],
                            [`sr28305`]
                        ]
                    ]
                ]
            ],
            [
                // collection name
                [`TORANJ Collection`],
                // collection description
                [`Inspired from elements of old home décor, TORANJ’s rustique yet sophisticated designs will be centerpieces of any room.`],
                // design
                [
                    [
                        [`ZIBA`],
                        // roll size 
                        [`0.53 m x 10.05 m`],
                        // repeat
                        [`53 cm`],
                        // match
                        [`Straight`],
                        // quality
                        [`100% FSC-certified non-woven`],
                        // images
                        [
                            [`resources/images/collections/toranj/ziba/ziba-1.webp`],
                            [`resources/images/collections/toranj/ziba/ziba-2.webp`],
                            [`resources/images/collections/toranj/ziba/ziba-3.webp`]
                        ],
                        // color ways
                        [
                            [`resources/images/collections/toranj/ziba/tn83201.png`],
                            [`resources/images/collections/toranj/ziba/tn83202.png`],
                            [`resources/images/collections/toranj/ziba/tn83203.png`],
                            [`resources/images/collections/toranj/ziba/tn83204.png`],
                            [`resources/images/collections/toranj/ziba/tn83205.png`]
                        ],
                        [
                            [`tn83201`],
                            [`tn83202`],
                            [`tn83203`],
                            [`tn83204`],
                            [`tn83205`]
                        ]
                    ]
                ]
            ],

        ]
        languageAssitant = [`Design:`, `Roll size:`, `Repeat:`, `Match:`, `Quality:`, `Colourways`];
    }
    else if (websiteLanguage === `arabic`) {
        document.body.classList.add(`website-language-arabic`);
        enLanguageIcon.style.display = `flex`;
        arLanguageIcon.style.display = `none`;

        collections = [
            [
                // اسم المجموعة
                [`مجموعة PANTHERA`],
                // وصف المجموعة
                [`تحمل مجموعة PANTHERA تحية للنمر الكاسبي الذي انقرض. تمامًا مثلها، الألبوم جريء ومثير ومتنوع. تمثل التصاميم بيانات قوية وحديثة، مع جماليات من البرية وصور من الطبيعة. مزيج من الخرز الزجاجي والأحبار السائلة والألوان الحصرية يخلق مستوى جديد من التأثيرات الخاصة والإحساس البصري`],
                // التصميم
                [
                    [
                        [`Golshan`],
                        // حجم اللفة
                        [`0.53 م × 10.05 م`],
                        // التكرار
                        [`64 سم`],
                        // التطابق
                        [`تناظر`],
                        // الجودة
                        [`100% غير منسوج معتمد من FSC`],
                        // الصور
                        [
                            [`resources/images/collections/panthera/golshan/golshan-1.webp`],
                            [`resources/images/collections/panthera/golshan/golshan-2.webp`],
                            [`resources/images/collections/panthera/golshan/golshan-3.webp`]
                        ],
                        // طرق الألوان
                        [
                            [`resources/images/collections/panthera/golshan/ph49201.png`],
                            [`resources/images/collections/panthera/golshan/ph49202.png`],
                            [`resources/images/collections/panthera/golshan/ph49203.png`],
                            [`resources/images/collections/panthera/golshan/ph49204.png`],
                            [`resources/images/collections/panthera/golshan/ph49205.png`],
                            [`resources/images/collections/panthera/golshan/ph49206.png`]
                        ],
                        [
                            [`ph49201`],
                            [`ph49202`],
                            [`ph49203`],
                            [`ph49204`],
                            [`ph49205`],
                            [`ph49206`]
                        ]
                    ],
                    [
                        [`Palangi`],
                        // حجم اللفة
                        [`0.53 م × 10.05 م`],
                        // التكرار
                        [`64 سم`],
                        // التطابق
                        [`تناظر`],
                        // الجودة
                        [`100% غير منسوج معتمد من FSC`],
                        // الصور
                        [
                            [`resources/images/collections/panthera/palangi/palangi-1.webp`]
                        ],
                        // طرق الألوان
                        [
                            [`resources/images/collections/panthera/palangi/ph49001.png`],
                            [`resources/images/collections/panthera/palangi/ph49002.png`],
                            [`resources/images/collections/panthera/palangi/ph49003.png`],
                            [`resources/images/collections/panthera/palangi/ph49004.png`],
                            [`resources/images/collections/panthera/palangi/ph49005.png`]
                        ],
                        [
                            [`ph49001`],
                            [`ph49002`],
                            [`ph49003`],
                            [`ph49004`],
                            [`ph49005`]
                        ]
                    ],
                    [
                        [`Bisheh`],
                        // حجم اللفة
                        [`0.53 م × 10.05 م`],
                        // التكرار
                        [`64 سم`],
                        // التطابق
                        [`تناظر`],
                        // الجودة
                        [`100% غير منسوج معتمد من FSC`],
                        // الصور
                        [
                            [`resources/images/collections/panthera/bisheh/bisheh-1.webp`],
                            [`resources/images/collections/panthera/bisheh/bisheh-2.webp`]
                        ],
                        // طرق الألوان
                        [
                            [`resources/images/collections/panthera/bisheh/ph49301.png`],
                            [`resources/images/collections/panthera/bisheh/ph49302.png`],
                            [`resources/images/collections/panthera/bisheh/ph49303.png`],
                            [`resources/images/collections/panthera/bisheh/ph49304.png`],
                            [`resources/images/collections/panthera/bisheh/ph49305.png`]
                        ],
                        [
                            [`ph49301`],
                            [`ph49302`],
                            [`ph49303`],
                            [`ph49304`],
                            [`ph49305`]
                        ]
                    ],
                    [
                        [`Maroc`],
                        // حجم اللفة
                        [`0.53 م × 10.05 م`],
                        // التكرار
                        [`64 سم`],
                        // التطابق
                        [`تناظر`],
                        // الجودة
                        [`100% غير منسوج معتمد من FSC`],
                        // الصور
                        [
                            [`resources/images/collections/panthera/maroc/maroc-1.webp`],
                            [`resources/images/collections/panthera/maroc/maroc-2.webp`]
                        ],
                        // طرق الألوان
                        [
                            [`resources/images/collections/panthera/maroc/ph49101.png`],
                            [`resources/images/collections/panthera/maroc/ph49102.png`],
                            [`resources/images/collections/panthera/maroc/ph49103.png`],
                            [`resources/images/collections/panthera/maroc/ph49104.png`],
                            [`resources/images/collections/panthera/maroc/ph49105.png`]
                        ],
                        [
                            [`ph49101`],
                            [`ph49102`],
                            [`ph49103`],
                            [`ph49104`],
                            [`ph49105`]
                        ]
                    ],
                    [
                        [`Nazok`],
                        // حجم اللفة
                        [`0.53 م × 10.05 م`],
                        // التكرار
                        [`64 سم`],
                        // التطابق
                        [`متساوي`],
                        // الجودة
                        [`100% غير منسوج معتمد من FSC`],
                        // الصور
                        [
                            [`resources/images/collections/panthera/nazok/nazok-1.webp`]
                        ],
                        // طرق الألوان
                        [
                            [`resources/images/collections/panthera/nazok/ph49501.png`],
                            [`resources/images/collections/panthera/nazok/ph49502.png`],
                            [`resources/images/collections/panthera/nazok/ph49503.png`],
                            [`resources/images/collections/panthera/nazok/ph49504.png`]
                        ],
                        [
                            [`ph49501`],
                            [`ph49502`],
                            [`ph49503`],
                            [`ph49504`]
                        ]
                    ],
                    [
                        [`Kish`],
                        // حجم اللفة
                        [`0.53 م × 10.05 م`],
                        // التكرار
                        [`64 سم`],
                        // التطابق
                        [`تناظر`],
                        // الجودة
                        [`100% غير منسوج معتمد من FSC`],
                        // الصور
                        [
                            [`resources/images/collections/panthera/kish/kish-1.webp`],
                            [`resources/images/collections/panthera/kish/kish-2.webp`]
                        ],
                        // طرق الألوان
                        [
                            [`resources/images/collections/panthera/kish/ph49401.png`],
                            [`resources/images/collections/panthera/kish/ph49402.png`],
                            [`resources/images/collections/panthera/kish/ph49403.png`],
                            [`resources/images/collections/panthera/kish/ph49404.png`],
                            [`resources/images/collections/panthera/kish/ph49405.png`],
                            [`resources/images/collections/panthera/kish/ph49406.png`]
                        ],
                        [
                            [`ph49401`],
                            [`ph49402`],
                            [`ph49403`],
                            [`ph49404`],
                            [`ph49405`],
                            [`ph49406`]
                        ]
                    ],
                    [
                        [`Plain-1`],
                        // حجم اللفة
                        [`0.53 م × 10.05 م`],
                        // التكرار
                        [`64 سم`],
                        // التطابق
                        [`تناظر`],
                        // الجودة
                        [`100% غير منسوج معتمد من FSC`],
                        // الصور
                        [
                            [`resources/images/collections/panthera/plain-1/plain-1.webp`]
                        ],
                        // طرق الألوان
                        [
                            [`resources/images/collections/panthera/plain-1/ph49701.png`],
                            [`resources/images/collections/panthera/plain-1/ph49702.png`],
                            [`resources/images/collections/panthera/plain-1/ph49703.png`],
                            [`resources/images/collections/panthera/plain-1/ph49704.png`],
                            [`resources/images/collections/panthera/plain-1/ph49705.png`],
                            [`resources/images/collections/panthera/plain-1/ph49706.png`],
                            [`resources/images/collections/panthera/plain-1/ph49707.png`],
                            [`resources/images/collections/panthera/plain-1/ph49708.png`]
                        ],
                        [
                            [`ph49701`],
                            [`ph49702`],
                            [`ph49703`],
                            [`ph49704`],
                            [`ph49705`],
                            [`ph49706`],
                            [`ph49707`],
                            [`ph49708`]
                        ]
                    ],
                    [
                        [`Plain-2`],
                        // حجم اللفة
                        [`0.53 م × 10.05 م`],
                        // التكرار
                        [`64 سم`],
                        // التطابق
                        [`تناظر`],
                        // الجودة
                        [`100% غير منسوج معتمد من FSC`],
                        // الصور
                        [
                            [`resources/images/collections/panthera/plain-2/plain-1.webp`],
                            [`resources/images/collections/panthera/plain-2/plain-2.webp`]
                        ],
                        // طرق الألوان
                        [
                            [`resources/images/collections/panthera/plain-2/ph49601.png`],
                            [`resources/images/collections/panthera/plain-2/ph49602.png`],
                            [`resources/images/collections/panthera/plain-2/ph49603.png`],
                            [`resources/images/collections/panthera/plain-2/ph49604.png`],
                            [`resources/images/collections/panthera/plain-2/ph49605.png`]
                        ],
                        [
                            [`ph49601`],
                            [`ph49602`],
                            [`ph49603`],
                            [`ph49604`],
                            [`ph49605`]
                        ]
                    ]
                ]
            ],
            [
                // اسم المجموعة
                [`مجموعة SHIRAZ`],
                // وصف المجموعة
                [`مستوحاة من مدينة الفن والعظمة الفارسية، يمثل ألبوم SHIRAZ تجسيدًا للحصرية، يتحدث لأولئك الذين يرغبون في ترك انطباع حقيقي في ديكور منازلهم.`],
                // التصميم
                [
                    // kaj
                    [
                        [`KAJ`],
                        // حجم اللفة
                        [`0.53 م × 10.05 م`],
                        // التكرار
                        [`64 سم`],
                        // التطابق
                        [`تناظر`],
                        // الجودة
                        [`100% غير منسوج معتمد من FSC`],
                        // الصور
                        [
                            [`resources/images/collections/shiraz/kaj/kaj-1.webp`],
                            [`resources/images/collections/shiraz/kaj/kaj-2.webp`],
                            [`resources/images/collections/shiraz/kaj/kaj-3.webp`],
                            [`resources/images/collections/shiraz/kaj/kaj-4.webp`],
                            [`resources/images/collections/shiraz/kaj/kaj-5.webp`],
                            [`resources/images/collections/shiraz/kaj/kaj-6.webp`],
                            [`resources/images/collections/shiraz/kaj/kaj-7.webp`]
                        ],
                        // طرق الألوان
                        [
                            [`resources/images/collections/shiraz/kaj/sr28001.png`],
                            [`resources/images/collections/shiraz/kaj/sr28002.png`],
                            [`resources/images/collections/shiraz/kaj/sr28003.png`],
                            [`resources/images/collections/shiraz/kaj/sr28004.png`],
                            [`resources/images/collections/shiraz/kaj/sr28005.png`],
                            [`resources/images/collections/shiraz/kaj/sr28006.png`]
                        ],
                        [
                            [`sr28001`],
                            [`sr28002`],
                            [`sr28003`],
                            [`sr28004`],
                            [`sr28005`],
                            [`sr28006`]
                        ]
                    ],
                    // ardakan
                    [
                        [`ARDAKAN`],
                        // حجم اللفة
                        [`0.53 م × 10.05 م`],
                        // التكرار
                        [`26.5 سم`],
                        // التطابق
                        [`متساوي`],
                        // الجودة
                        [`100% غير منسوج معتمد من FSC`],
                        // الصور
                        [
                            [`resources/images/collections/shiraz/ardakan/ardakan-1.webp`],
                            [`resources/images/collections/shiraz/ardakan/ardakan-2.webp`],
                            [`resources/images/collections/shiraz/ardakan/ardakan-3.webp`],
                            [`resources/images/collections/shiraz/ardakan/ardakan-4.webp`]
                        ],
                        // طرق الألوان
                        [
                            [`resources/images/collections/shiraz/ardakan/sr28301.png`],
                            [`resources/images/collections/shiraz/ardakan/sr28302.png`],
                            [`resources/images/collections/shiraz/ardakan/sr28303.png`],
                            [`resources/images/collections/shiraz/ardakan/sr28304.png`],
                            [`resources/images/collections/shiraz/ardakan/sr28305.png`]
                        ],
                        [
                            [`sr28301`],
                            [`sr28302`],
                            [`sr28303`],
                            [`sr28304`],
                            [`sr28305`]
                        ]
                    ]
                ]
            ],
            [
                // اسم المجموعة
                [`مجموعة TORANJ`],
                // وصف المجموعة
                [`مستوحاة من عناصر ديكور المنازل القديمة، ستكون تصاميم مجموعة TORANJ الريفية والمتطورة مركزًا في أي غرفة.`],
                // التصميم
                [
                    [
                        [`ZIBA`],
                        // حجم اللفة
                        [`0.53 م × 10.05 م`],
                        // التكرار
                        [`53 سم`],
                        // التطابق
                        [`متساوي`],
                        // الجودة
                        [`100% غير منسوج معتمد من FSC`],
                        // الصور
                        [
                            [`resources/images/collections/toranj/ziba/ziba-1.webp`],
                            [`resources/images/collections/toranj/ziba/ziba-2.webp`],
                            [`resources/images/collections/toranj/ziba/ziba-3.webp`]
                        ],
                        // طرق الألوان
                        [
                            [`resources/images/collections/toranj/ziba/tn83201.png`],
                            [`resources/images/collections/toranj/ziba/tn83202.png`],
                            [`resources/images/collections/toranj/ziba/tn83203.png`],
                            [`resources/images/collections/toranj/ziba/tn83204.png`],
                            [`resources/images/collections/toranj/ziba/tn83205.png`]
                        ],
                        [
                            [`tn83201`],
                            [`tn83202`],
                            [`tn83203`],
                            [`tn83204`],
                            [`tn83205`]
                        ]
                    ]
                ]
            ]
        ];



        languageAssitant = [
            "التصميم:",
            "حجم اللفة:",
            "التكرار:",
            "التطابق:",
            "الجودة:",
            "ألوان الديكور"
        ];
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
    window.location = window.location;

})

