url = "";

function nextimg() {

   pl = document.getElementById('pd');
     pl.style.display = 'contents';
     pl.style.height= '100vh';
     pl.style.width = '100%';
    pl.style.position = 'absolute'
    
     topic = document.getElementById('topic').value
    width = document.getElementById('width').value
    height = document.getElementById('height').value
    console.log(topic)
    console.log(width)
    console.log(height)
    if (topic.length == 0) {
        alert("Select any topic")
    }
    if (width == 0) {
        console.log("hiii")
        width = Math.floor(Math.random() * 100) + 100;
        console.log(width)
    }
    if (height == 0) {
        console.log("bye")
        height = Math.floor(Math.random() * 100) + 100;
        console.log(height)
    }


    img = document.getElementById("newimg");
    img.addEventListener('load',function(e){
        
        document.getElementById('pd').style.display = 'none';
        console.log("helloolo")
    })
    api = `https://source.unsplash.com/random/${width}x${height}/?${topic}`;

    console.log(img);
    fetch(api).then((response) => {
        return response.url;
    }).then((data) => {
        console.log(data)
        url = data;
        img.src = data;
    })
}
function saveimg() {
    fetch(url)
        .then(resp => resp.blob())
        .then(blobobject => {
            blob = window.URL.createObjectURL(blobobject);
            anchor = document.createElement('a');
            anchor.style.display = 'none';
            anchor.href = blob;
            anchor.download = document.getElementById("topic").value;
            document.body.appendChild(anchor);
            anchor.click();
            window.URL.revokeObjectURL(blob);
        })
        .catch(() => console.log('An error in downloadin gthe file sorry'));
}