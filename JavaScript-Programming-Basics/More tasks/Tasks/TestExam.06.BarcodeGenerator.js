function generateBarcodes(start, end) {
    let barcodes = [];
  
    // Обхождаме всички възможни комбинации от цифри между start и end
    for (let i = start; i <= end; i++) {
      let barcode = i.toString().padStart(4, '0');
      if (isOddBarcode(barcode)) {
        barcodes.push(barcode);
      }
    }
  
    return barcodes;
  }
  
  // Примерно извикване на функцията
  let start = 2345;
  let end = 6789;
  let result = generateBarcodes(start, end);
  console.log(result.join(' '));