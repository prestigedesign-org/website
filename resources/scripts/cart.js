// FORM ////////////////////////////////////////////////

function showNotification(message, duration, color) {
  const notification = document.getElementById("notification");
  notification.textContent = message;
  notification.style.background = color;

  notification.style.display = "block";

  setTimeout(function () {
    notification.style.display = "none";
  }, duration);
}

const formWrapper = document.getElementById(`contact-form-wrapper`);
const orderNow = document.querySelectorAll(`.order-now`);
const shopPopup = document.querySelector(".shopping-cart");
const orders = document.getElementById("form-message");

document
  .getElementById("contact-form")
  .addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent the default form submission

    const codeData = {};
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key.startsWith("code")) {
        codeData[key] = localStorage.getItem(key);
      }
    }

    for (const key in codeData) {
      if (codeData.hasOwnProperty(key)) {
        const value = codeData[key];
        const parts = value.split(",");
        orders.value += "     [";
        for (let g = 0; g < 4; g++) {
          orders.value += " ";
          orders.value += parts[g];
          orders.value += " ";
        }
        orders.value += "]     ";
      }
    }

    // You can perform any additional actions here before submitting to Google Forms

    // Submit the form to Google Forms programmatically using JavaScript
    const form = e.target;
    const formData = new FormData(form);
    const xhr = new XMLHttpRequest();

    xhr.open("POST", form.action, true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

    // // Display the success message
    // const successMessage = document.getElementById('success-message');
    // successMessage.style.display = 'block';
    showNotification("Message Successfully Sent!", 2000, `green`);

    // // Clear the form fields
    form.reset();

    // // Hide the success message after 2 seconds
    // setTimeout(function () {
    //     successMessage.style.display = 'none';
    // }, 5000);

    // alert(`message sent!`);

    // xhr.onreadystatechange = function () {
    //     if (xhr.readyState === XMLHttpRequest.DONE) {
    //         if (xhr.status === 200) {
    //             // Form submission was successful

    //         } else {
    //             // Form submission failed
    //             // You can add your own error handling code here
    //             console.error('Form submission failed');
    //         }
    //     }
    // };

    // Convert the form data to URL-encoded format
    const encodedData = new URLSearchParams(formData).toString();

    // Send the POST request
    xhr.send(encodedData);

    let removerProduct = document.querySelectorAll(".fa-trash");
    const cartNotifyy = document.querySelector(".fa-info-circle");
    removerProduct.forEach((e) => {
      localStorage.removeItem(
        `code${
          e.parentElement.parentElement.querySelector(".data-code").innerText
        }`
      );
      e.parentElement.parentElement.remove();
    });
    cartNotifyy.style.display = "none";

    // formWrapper.style.display = 'none';
    document.body.style.overflow = "auto";
    shopPopup.style.display = "none";
  });

orderNow.forEach(function (e) {
  e.addEventListener("click", function () {
    formWrapper.style.display = "flex";
    body.style.overflow = "hidden";
  });
});

// CART ////////////////////////////////////////////////

const shoppingCartWrapper = document.querySelector(".shopping-cart");
const cartCloser = document.querySelector(".shopping-cart .fa-times");
const basketCart = document.querySelector(".nav-icons .fa-shopping-cart");
const productRow = document.querySelector(".shopping-row-wrapper");
let remover = document.querySelectorAll(".fa-trash");
const ShopNotif = document.querySelector(".shop-notification");
const emptyNotif = document.querySelector(".shop-notification-empty");
let producatQuantity = document.querySelectorAll(".product-quantity");

let refreshPage = false;

//quantity updater
function quantityUpdater() {
  producatQuantity = document.querySelectorAll(".product-quantity");
  producatQuantity.forEach((element) => {
    // console.log(element);

    element.addEventListener("keyup", function () {
      let data = localStorage
        .getItem(`code${element.dataset.quant}`)
        .split(",");
      data[3] = element.value;
      localStorage.setItem(`code${element.dataset.quant}`, data);
    });
  });
}

// shopping cart row remover
function productRowRemover() {
  remover = document.querySelectorAll(".fa-trash");
  const cartNotif = document.querySelector(".fa-info-circle");
  remover.forEach((e) => {
    e.addEventListener("click", function (elem) {
      const removeElem = elem.target.parentElement.parentElement;
      //   console.log(removeElem.querySelector(".data-code").dataset.code);
      // console.log(`code${removeElem.querySelector('.data-code').innerText}`);
      localStorage.removeItem(
        `code${removeElem.querySelector(".data-code").dataset.code}`
      );
      // removeElem.style.display = 'none';
      removeElem.remove();

      remover = document.querySelectorAll(".fa-trash");
      // console.log(remover.length);
      if (remover.length > 0) {
        cartNotif.style.display = "block";
      } else {
        cartNotif.style.display = "none";
        shoppingCartWrapper.style.display = "none";
      }
    });
  });
  remover = document.querySelectorAll(".fa-trash");
  if (remover.length > 0) {
    cartNotif.style.display = "block";
  } else {
    shoppingCartWrapper.style.display = "none";
    cartNotif.style.display = "none";
  }
}
productRowRemover();

// add to cart
cartCloser.addEventListener("click", () => {
  shoppingCartWrapper.style.display = "none";
});

basketCart.addEventListener("click", () => {
  //   console.log("check point 1");
  remover = document.querySelectorAll(".fa-trash");
  if (remover.length > 0) {
    // console.log("check point 2");
    shoppingCartWrapper.style.display = "flex";
  } else {
    // console.log("check point 3");
    emptyNotif.style.display = "block";
    setTimeout(() => {
      emptyNotif.style.display = "none";
    }, 1000);
  }
});

function addToShoppingCart(mainCat, subCat, codeCat, quantity, imageSrc) {
  const isProduct = document.querySelector(`[data-Code='${codeCat}'`);
  const productquant = document.querySelector(`[data-quant='${codeCat}']`);

  if (isProduct) {
    productquant.setAttribute("value", quantity);

    if (refreshPage) {
      ShopNotif.style.display = "flex";
      setTimeout(() => {
        ShopNotif.style.display = "none";
      }, 500);
    }
  } else {
    try {
      productRow.innerHTML += `
           <div class="shopping-row shopping-row-data" >
                <div><img src="${imageSrc}" alt="${subCat}"></div>
                <div data-code='${codeCat}' class='data-code'> ${mainCat} | ${subCat} | ${codeCat}</div>
                <div class="shopping-data-input">
                    <input class="product-quantity" data-quant='${codeCat}' type="number" style="-webkit-appearance: none;" value="${quantity}"></input>
                    <i class="fa fa-trash"></i>
                </div>
             </div>`;
      if (refreshPage) {
        ShopNotif.style.display = "flex";
        setTimeout(() => {
          ShopNotif.style.display = "none";
        }, 500);
      }
    } catch (error) {
      console.log(error + "  | Error 212");
    }
  }
  productRowRemover();
  quantityUpdater();
}

// cart initializer
function cartInit() {
  const codeData = {};

  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    if (key.startsWith("code")) {
      codeData[key] = localStorage.getItem(key);
    }
  }
  const codeDataArray = Object.entries(codeData);

  codeDataArray.forEach(([key, value]) => {
    const valuesArray = value.split(",");
    addToShoppingCart(
      valuesArray[0],
      valuesArray[1],
      valuesArray[2],
      valuesArray[3],
      valuesArray[4]
    );
  });
  refreshPage = true;
}
cartInit();

// cart notification
// function cartNotification() {

// }
// cartNotification();

// add to cart click handler
function shoppingCart() {
  const addToCart = document.querySelectorAll(".add-to-cart");
  const addToCartPoster = document.querySelectorAll(".poster-shopping-cart");
  const addToCartDecorative = document.querySelectorAll(
    ".decorative-shopping-cart"
  );

  addToCart.forEach((elem) => {
    elem.addEventListener("click", function (e) {
      // console.log(e.target.parentElement.parentElement.parentElement)
      const codeCat = e.target.parentElement.querySelector("span").innerText;

      // console.log(quantity);
      const imageSrc = e.target.parentElement.parentElement
        .querySelector("img")
        .getAttribute("src");
      // console.log(imageSrc)

      const subCategory =
        e.target.parentElement.parentElement.parentElement.parentElement.parentElement.querySelector(
          ".collection-info-design"
        ).innerHTML;
      // console.log(subCategory);

      const collectionNameSelected =
        e.target.parentElement.parentElement.parentElement.parentElement.parentElement
          .querySelector(".collection-heading-title")
          .innerHTML.split(" ")[0];
      // console.log(collectionNameSelected);

      // localStorage.setItem(`code${codeCat}`, [collectionNameSelected, subCategory, codeCat, quantity, imageSrc])

      if (localStorage.getItem(`code${codeCat}`)) {
        localStorage.setItem(`code${codeCat}`, [
          collectionNameSelected,
          subCategory,
          codeCat,
          parseInt(localStorage.getItem(`code${codeCat}`).split(",")[3]) + 1,
          imageSrc,
        ]);
      } else {
        localStorage.setItem(`code${codeCat}`, [
          collectionNameSelected,
          subCategory,
          codeCat,
          "1",
          imageSrc,
        ]);
      }

      const quantity = localStorage.getItem(`code${codeCat}`).split(",")[3];

      // cartNotification();

      addToShoppingCart(
        collectionNameSelected,
        subCategory,
        codeCat,
        quantity,
        imageSrc
      );
    });
  });

  addToCartPoster.forEach((elem) => {
    elem.addEventListener("click", function (e) {
      if (
        e.target.parentElement.parentElement.querySelector(".poster-width")
          .value &&
        e.target.parentElement.parentElement.querySelector(".poster-height")
          .value
      ) {
        //   console.log(e.target.parentElement.parentElement);
        //   console.log(e.target.parentElement.parentElement.parentElement);
        const codeCat =
          e.target.parentElement.parentElement.querySelector(".item-code-title").innerText;
        //   console.log(codeCat);
        // console.log(quantity);

        let imageSrc;
        if (e.target.parentElement.parentElement.querySelector("img")) {
          imageSrc = e.target.parentElement.parentElement
            .querySelector("img")
            .getAttribute("src");
        }
        //   console.log(imageSrc);

        const itemTitle =
          e.target.parentElement.parentElement.parentElement.querySelector("h3").innerText;

        let width = 0;
        if (
          e.target.parentElement.parentElement.querySelector(".poster-width")
            .value
        ) {
          width =
            e.target.parentElement.parentElement.querySelector(
              ".poster-width"
            ).value;
        }

        let height = 0;

        if (
          e.target.parentElement.parentElement.querySelector(".poster-height")
            .value
        ) {
          height =
            e.target.parentElement.parentElement.querySelector(
              ".poster-height"
            ).value;
        }

        const dimention = "W:" + width + "   H:" + height;

        if (localStorage.getItem(`code${codeCat}`)) {
          localStorage.setItem(`code${codeCat}`, [
            itemTitle,
            dimention,
            codeCat,
            parseInt(localStorage.getItem(`code${codeCat}`).split(",")[3]) + 1,
            imageSrc,
          ]);
        } else {
          localStorage.setItem(`code${codeCat}`, [
            itemTitle,
            dimention,
            codeCat,
            "1",
            imageSrc,
          ]);
        }

        const quantity = localStorage.getItem(`code${codeCat}`).split(",")[3];

        // cartNotification();

        addToShoppingCart(itemTitle, dimention, codeCat, quantity, imageSrc);
        //   console.log(itemTitle);
        //   console.log(imageSrc);
        //   console.log(codeCat);
        //   console.log(dimention);
      } else {
        showNotification("Please Enter dimention", 2000, `dodgerblue`);
      }
    });
  });

  addToCartDecorative.forEach((elem) => {
    elem.addEventListener("click", function (e) {
      //   console.log(e.target.parentElement.parentElement);
      //   console.log(e.target.parentElement.parentElement.parentElement);
      const codeCat =
        e.target.parentElement.parentElement.querySelector(".item-code-title").innerText;
      //   console.log(codeCat);
      // console.log(quantity);

      let imageSrc;
      if (e.target.parentElement.parentElement.querySelector("img")) {
        imageSrc = e.target.parentElement.parentElement
          .querySelector("img")
          .getAttribute("src");
      }
      //   console.log(imageSrc);

      const itemTitle =
        e.target.parentElement.parentElement.parentElement.querySelector("h3").innerText;

      if (localStorage.getItem(`code${codeCat}`)) {
        localStorage.setItem(`code${codeCat}`, [
          itemTitle,
          "",
          codeCat,
          parseInt(localStorage.getItem(`code${codeCat}`).split(",")[3]) + 1,
          imageSrc,
        ]);
      } else {
        localStorage.setItem(`code${codeCat}`, [
          itemTitle,
          "",
          codeCat,
          "1",
          imageSrc,
        ]);
      }

      const quantity = localStorage.getItem(`code${codeCat}`).split(",")[3];

      // cartNotification();

      addToShoppingCart(itemTitle, "", codeCat, quantity, imageSrc);
      //   console.log(itemTitle);
      //   console.log(imageSrc);
      //   console.log(codeCat);
      //   console.log(dimention);
    });
  });
}
shoppingCart();
