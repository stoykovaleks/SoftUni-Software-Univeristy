function solve() {
   const addProductButtonsElement = Array.from(document.querySelectorAll('.add-product'));
   let products = [];
   let totalPrice = 0;


   for (const btn of addProductButtonsElement) {
      btn.addEventListener('click', addProductInCart);  
   }

   function addProductInCart(e) {
      let productElement = e.target.parentNode.parentNode;
      let productTitle = productElement.querySelectorAll('.product-title');
      let priceElement = productElement.querySelector('.product-line-price');

      printMessage(productTitle, priceElement);

      if (!products.includes(productTitle.textContent)) {
         products.push(productTitle.textContent);
      }

      totalPrice += Number(priceElement.textContent);

   }

   function printMessage(productTitle, priceElement) {
      let textAreaElement = document.querySelector('textarea');
      textAreaElement.textContent += `Added ${productTitle
         .textContent} for ${priceElement
            .textContent} to the cart.\n`;

   }

   function checkout(e){
      textAreaElement. textContent += `You bought ${products.join(", ")} for ${totalPrice.toFixed(2)}.`;
   }
}