// JavaScript
const url = "http://127.0.0.1:8080/ModelWestKardashian/model.json"
var x = document.getElementById('myImg');
console.log(x);
async function loadModel(){
   
    const model = await tf.loadLayersModel(url);
    console.log("Model loaded")

    const example = tf.browser.fromPixels(x)
    const batched = example.expandDims(0)
    const prob = model.predict(batched)
    const output = prob.dataSync()
    prob.print()
    if (output > 0.5)
    {
        console.log("yes")
        return
    }
       console.log("no")
}


