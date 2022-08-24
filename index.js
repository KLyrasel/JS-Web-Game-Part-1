function background(url, left, bottom, width, height){
    for(let x=0; x < height; x++){
        for(let y=0; y < width; y++){
            newImage(url, left + x*100, bottom+y*100)
        }
    }
}


function newImage(url,bottom,left,){
    let object = document.createElement('img')
    object.src = url
    object.style.position = 'fixed'
    object.style.left = left + 'px'
    object.style.bottom = bottom + 'px'
    document.body.append(object)
    return object
}

function newItem(url,bottom,left){
    let object = newImage(url,bottom,left)

    object.addEventListener('dblclick', function() {
        object.remove()
    })
}

let screen = window.innerHeight/1.70
let heightOfSky = window.innerHeight-screen
let heightOfGrass = screen

background('assets/sky.png', 0, screen, window.innerWidth/100, heightOfSky/100)
background('assets/grass.png', 0, 0, window.innerWidth/100, heightOfGrass/100)

newItem('assets/sword.png', 500, 405)
newItem('assets/crate.png', 165, 185)
newItem('assets/staff.png', 600, 100)

newImage('assets/green-character.gif', 100, 100)
newImage('assets/pine-tree.png', 200, 300)
newImage('assets/well.png', 350, 100)
newImage('assets/rock.png', 150, 200)
newImage('assets/pillar.png', 500, 425)