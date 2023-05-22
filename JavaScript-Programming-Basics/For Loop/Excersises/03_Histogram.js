function histo(input) {

    let nums = Number(input[0]);

    let p1Count = 0;
    let p2Count = 0;
    let p3Count = 0;
    let p4Count = 0;
    let p5Count = 0;

    for (let i = 1; i <= nums; i++) {

        let current = Number(input[i]);

        if (current < 200) {
            p1Count++;
        }
        else if (current < 400) {
            p2Count++;
        }
        else if (current < 600) {
            p3Count++;
        }
        else if (current < 800) {
            p4Count++;
        }
        else if (current >= 800) {
            p5Count++;
        }
    }

    console.log(((p1Count / nums) * 100).toFixed(2) + "%");
    console.log(((p2Count / nums) * 100).toFixed(2) + "%");
    console.log(((p3Count / nums) * 100).toFixed(2) + "%");
    console.log(((p4Count / nums) * 100).toFixed(2) + "%");
    console.log(((p5Count / nums) * 100).toFixed(2) + "%");
}
histo(["3", "1", "2", "999"]);
