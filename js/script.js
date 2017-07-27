$('.mobileNav').hide(0);

$('#xs-img').click(function(){
    $('.mobileNav.hidden-sm').slideToggle();
});
$('#sm-img').click(function(){
    $('.mobileNav.hidden-xs').slideToggle();
});

$('#stopGif').click(function(){
    console.log('hey')
    $('#header-image').toggleClass('stop')
});

var $containerProjectMD = $('#Projects div.container.hidden-xs.hidden-sm')
var $containerProjectSM = $('#Projects div.container.hidden-xs.hidden-md.hidden-lg')
var $containerProjectXS = $('#Projects div.container.hidden-sm.hidden-md.hidden-lg')

var projects = [
{
src : "./images/ForceGraph.png",
name : "Force directed Graph",
technologies : "Technologies used: HTML, SVG, Javascript, D3.js",
projectLink : "https://hernanmendez.github.io/D3-Force-Graph/",
repoLink : "https://github.com/hernanmendez/D3-Force-Graph"
},
{
src : "./images/heatmap.png",
name : "Heatmap",
technologies : "Technologies used: HTML, SVG, Javascript, D3.js",
projectLink : "https://hernanmendez.github.io/D3-HeatMap/",
repoLink : "https://github.com/hernanmendez/D3-HeatMap"
},
{
src : "./images/gameoflife.png",
name : "Game of life",
technologies : "Technologies used: HTML, Javascript, React.js",
projectLink : "https://hernanmendez.github.io/Game-of-life/",
repoLink : "https://github.com/hernanmendez/Game-of-life"
},
{
src : "./images/leaderboard.png",
name : "FreeCodeCamp LeaderBoard",
technologies : "Technologies used: HTML, CSS, Javascript, Redux.js",
projectLink : "https://hernanmendez.github.io/Leaderboard/",
repoLink : "https://github.com/hernanmendez/Leaderboard"
},
{
src : "./images/roguelikegame.png",
name : "Roguelike Game React",
technologies : "Technologies used: HTML, CSS, Javascript, React.js",
projectLink : "https://hernanmendez.github.io/React-Roguelike-Game/",
repoLink : "https://github.com/hernanmendez/React-Roguelike-Game"
},
{
src : "./images/recipes.png",
name : "Recipe Holder React",
technologies : "Technologies used: HTML, CSS, Javascript, React.js",
projectLink : "https://hernanmendez.github.io/Recipes/",
repoLink : "https://github.com/hernanmendez/Recipes"
},
{
src : "./images/scatterplotgraph.png",
name : "D3 Scatterplot Graph",
technologies : "Technologies used: SVG, Javascript, D3.js",
projectLink : "https://hernanmendez.github.io/D3-Scatterplot-graph/",
repoLink : "https://github.com/hernanmendez/D3-Scatterplot-graph"
},
{
src : "./images/maps.png",
name : "Google Maps - meteorite landings",
technologies : "Technologies used: Javascript",
projectLink : "https://hernanmendez.github.io/Map-Google-Map-API/",
repoLink : "https://github.com/hernanmendez/Map-Google-Map-API"
},
{
src : "./images/barchart.png",
name : "Bar Chart",
technologies : "Technologies used: SVG, Javascript, D3.js",
projectLink : "https://hernanmendez.github.io/D3-VizData-with-a-Bar-Chart/",
repoLink : "https://github.com/hernanmendez/D3-VizData-with-a-Bar-Chart"
},
{
src : "./images/wikipedia.png",
name : "wikipedia Viewer",
technologies : "Technologies used: HTML, CSS, Javascript",
projectLink : "https://hernanmendez.github.io/wikipedia-API/",
repoLink : "https://github.com/hernanmendez/wikipedia-API"
},
{
src : "./images/TicTacToe.png",
name : "Tic Tac Toe Game",
technologies : "Technologies used: HTML, Javascript",
projectLink : "https://hernanmendez.github.io/TIC-TAC-TOE-GAME/",
repoLink : "https://github.com/hernanmendez/TIC-TAC-TOE-GAME"
},
{
src : "./images/weather.png",
name : "Get Weather",
technologies : "Technologies used: HTML, CSS, Javascript",
projectLink : "https://hernanmendez.github.io/get-Weather/",
repoLink : "https://github.com/hernanmendez/get-Weather"
},
{
src : "./images/Quote Generator.png",
name : "Quote Generator",
technologies : "Technologies used: HTML, CSS, Javascript",
projectLink : "https://hernanmendez.github.io/Quote-Generator/",
repoLink : "https://github.com/hernanmendez/Quote-Generator"
},
{
src : "./images/Tribute Project.png",
name : "Tribute Page",
technologies : "Technologies used: Bootstrap,SASS,HTML,CSS",
projectLink : "https://hernanmendez.github.io/Tribute-Page/",
repoLink : "https://github.com/hernanmendez/Tribute-Page"
}
]

function createProject(obj){
    var title = document.createElement('h3')
    title.innerHTML = obj.name

    var projectIMG = document.createElement('a')
    projectIMG.href = obj.projectLink

    var img = document.createElement('img')
    img.src = obj.src

    projectIMG.appendChild(img)

    var p = document.createElement('p')

    var technologies = document.createTextNode(obj.technologies)
    p.appendChild(technologies)

    p.appendChild(document.createElement('br'))

    var githubRepo = document.createElement('a')
    githubRepo.innerHTML = 'Github Repo'
    githubRepo.href = obj.repoLink
    p.appendChild(githubRepo)

    var project = document.createElement('div')
    project.appendChild(projectIMG)
    project.appendChild(title)
    project.appendChild(p)

    return project
}

for(let i=0 ;i<projects.length;i++){
    $containerProjectMD.append(createProject(projects[i]))
    $containerProjectSM.append(createProject(projects[i]))
    $containerProjectXS.append(createProject(projects[i]))
}


var $containerProjectMD = $('#Projects div.container.hidden-xs.hidden-sm')
var $containerProjectSM = $('#Projects div.container.hidden-xs.hidden-md')
function resize(){
var topsMD = [0,0,0]
$($containerProjectMD.children()).each(function(){
    var index = topsMD.indexOf(Math.min(...topsMD))
    $(this).css('left', 100/3 *index + '%')
        .css('top',topsMD[index])
        
    topsMD[index] += parseInt($(this).css('height'))
})

var topsSM = [0,0]
$($containerProjectSM.children()).each(function(){
    var index = topsSM.indexOf(Math.min(...topsSM))
    $(this).css('left', 50*index  + '%')
        .css('top',topsSM[index])

    topsSM[index] += parseInt($(this).css('height'))
})
}

$('.skillsBTN').click(function(){
    window.scrollTo(0,$('#skills').offset().top)
})

$('.aboutBTN').click(function(){
    window.scrollTo(0,$('#about').offset().top)
})

$('.projectsBTN').click(function(){
    window.scrollTo(0,$('#Projects').offset().top)
})

resize()
window.onload = resize
$(window).resize(resize)