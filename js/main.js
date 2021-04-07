'use strict'

$(document).ready(function () {
  initPage()
})

function initPage() {
  renderProjs()
  //renderModal()
}

var gProjs =
  [
    {
      "id": "1",
      "name": "MineSweeper",
      "title": "Defuse all the mines!",
      "desc": "Best Minesweeper ever",
      "url": "projs/1",
      "publishedAt": 1448693940000,
      "labels": ["Matrixes", "keyboard events"],
    },
    {
      "id": "2",
      "name": "Chess",
      "title": "Dynamic chess piece movement",
      "desc": "Dynamic chess piece movement",
      "url": "projs/2",
      "publishedAt": 1448693940000,
      "labels": ["Matrixes", "keyboard events"],
    },
    {
      "id": "3",
      "name": "Pacman",
      "title": "Eat all the food!",
      "desc": "Eat all the food!",
      "url": "projs/3",
      "publishedAt": 1448693940000,
      "labels": ["Matrixes", "keyboard events"],
    },

  ]


function renderProjs() {
  var strHtmls = `    
    <div class="container">
    <div class="row">
      <div class="col-lg-12 text-center">
        <h2 class="section-heading">Portfolio</h2>
        <h3 class="section-subheading text-muted">Check out my recent projects</h3>
      </div>
    </div>
    <div class="row">
    `
  strHtmls += gProjs.map(function (proj) {
    return `
          <div class="col-md-4 col-sm-6 portfolio-item">
            <a class="portfolio-link" data-toggle="modal"  href="#portfolioModal">
              <div class="portfolio-hover" onclick="renderModal(${proj.id})">
                <div class="portfolio-hover-content">
                  <i class="fa fa-plus fa-3x"></i>
                </div>
              </div>
              <img class="img-fluid" src="img/portfolio/${proj.id}-thumbnail.jpg" alt="">
            </a>
            <div class="portfolio-caption">
              <h4>${proj.name}</h4>
              <p class="text-muted">${proj.desc}</p>
            </div>
          </div>  
        `
  }).join('')
  $('.portfolio').html(strHtmls)
}


function renderModal(id) {
  var proj = getProjById(id) //return obj
  console.log(proj);
  var currId = id - 1
  var strHtmls = `  
  
    <h2>${gProjs[currId].name}</h2>

    <p class="item-intro text-muted">Lorem ipsum dolor sit amet consectetur.</p>
    <img class="img-fluid d-block mx-auto" src="img/portfolio/${gProjs[currId].id}-full.jpg" alt="">
    <p>${gProjs[currId].desc}</p>

    <ul class="list-inline">
      <li>Date: January 2017</li>
      <li>Client: Threads</li>
      <li>Category: Illustration</li>
    </ul>

    <button class="btn btn-primary" data-dismiss="modal" type="button">
      <i class="fa fa-times"></i>
      Close Project</button>

    `
  $('.modal-body').html(strHtmls)

}

