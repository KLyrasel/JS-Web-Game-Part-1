function newImage(url,bottom,left,){
    let object = document.createElement('img')
    object.src = url
    object.style.position = 'fixed'
    object.style.left = left + 'px'
    object.style.bottom = bottom + 'px'
    document.body.append(object)
    return object
}


newImage('assets/green-character.gif', 100, 100)
newImage('assets/pine-tree.png', 200, 300)
newImage('assets/well.png', 350, 100)
newImage('assets/rock.png', 150, 200)
newImage('assets/pillar.png', 500, 425)

