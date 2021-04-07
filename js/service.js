'use strict'

function getProjById(id){
    var proj = gProjs.find(function (proj) {
        return id === proj.id
    })
    return proj
}