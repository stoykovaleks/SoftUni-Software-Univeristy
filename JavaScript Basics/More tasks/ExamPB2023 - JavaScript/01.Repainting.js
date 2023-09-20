function repainting(input) {
    let paintCount = Number(input[0]);
    let rollSkinCount = Number(input[1]);
    let pricePerGloves = Number(input[2]);
    let paintbrushPrice = Number(input[3]);

    let sumForPaint = paintCount * 21.50;
    let sumForRollskin = rollSkinCount * 5.20;
    let glovesCount = Math.ceil(rollSkinCount * 0.35);
    let sumForGloves = glovesCount * pricePerGloves;
    let countPaintbrush = Math.floor(paintCount * 0.48)
    let sumForPaintbrush = paintbrushPrice * countPaintbrush;

    let totalSumOfProducts = sumForGloves + sumForPaint + sumForPaintbrush + sumForRollskin;
    let deliverySum = totalSumOfProducts / 15;

    console.log(`This delivery will cost ${deliverySum.toFixed(2)} lv.`);
}

repainting(["10", "8", "2.2", "5"])