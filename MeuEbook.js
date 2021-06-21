var filme1 = document.getElementById('filme1');
var filme2 = document.getElementById('filme2');
var filme3 = document.getElementById('filme3');
var filme4 = document.getElementById('filme4');
var filme5 = document.getElementById('filme5');
var filme6 = document.getElementById('filme6');
var filme7 = document.getElementById('filme7');
var filme8 = document.getElementById('filme8');
var filme9 = document.getElementById('filme9');
var filme10 = document.getElementById('filme10');
var filme11 = document.getElementById('filme11');

function genero() {
    switch(document.getElementById('genero').selectedIndex) {
        case 1:
            /* AÇÃO */
            filme1.src = "imagens/umHomemFurioso.jpeg";
            filme2.src = "imagens/ferry.jpeg";
            filme3.src = "imagens/mortalKombat.jpeg";
            filme4.src = "imagens/vanquish.jpeg";
            filme5.src = "imagens/xtremo.jpeg";
            filme6.src = "imagens/army-of-the-dead.jpeg";
            filme7.src = "imagens/endangered-species.jpeg";
            filme8.src = "imagens/godzilla-vs-kong.jpeg";
            filme9.src = "imagens/without-remorse.jpeg";
            filme10.src = "imagens/the-virtuoso.jpeg";
            filme11.src = "imagens/those-who-wish-me-dead.jpeg";
            break;
        case 2:
            /* COMEDIA */ 
            filme1.src = "imagens/nobody.jpeg";
            filme2.src = "imagens/thunder-force.jpeg";
            filme3.src = "imagens/22-vs-earth.jpeg";
            filme4.src = "imagens/luca.jpeg";
            filme5.src = "imagens/trippin-with-the-kandasamys.jpeg";
            filme6.src = "imagens/maggie-simpson-in-the-force-awakens-from-its-nap.jpeg";
            filme7.src = "imagens/miraculous-world-new-york-united-heroez.jpeg";
            filme8.src = "imagens/the-croods-a-new-age.jpeg";
            filme9.src = "imagens/benny-loves-you.jpeg";
            filme10.src = "imagens/willy-s-wonderland.jpeg";
            filme11.src = "imagens/despues-de-ti.jpeg";
            break;
        case 3:
            /* DRAMA */ 
            filme1.src = "imagens/i-am-all-girls.jpeg";
            filme2.src = "imagens/Demon Slayer-Mugen Train.jpeg";
            filme3.src = "imagens/sentinelle.jpeg";
            filme4.src = "imagens/awake.jpeg";
            filme5.src = "imagens/a-quiet-place.jpeg";
            filme6.src = "imagens/flashback.jpeg";
            filme7.src = "imagens/joker.jpeg";
            filme8.src = "imagens/evangelion-4-0.jpeg";
            filme9.src = "imagens/crisis.jpeg";
            filme10.src = "imagens/cherry.jpeg";
            filme11.src = "imagens/ava.jpeg";
            break;
        case 4:
            /*FANTASIA*/ 
            filme1.src = "imagens/raya-and-the-last-dragon.jpeg";
            filme2.src = "imagens/zack-snyder-s-justice-league.jpeg";
            filme3.src = "imagens/wonder-woman-1984.jpeg";
            filme4.src = "imagens/monster-hunter.jpeg";
            filme5.src = "imagens/New Gods Nezha Reborn.jpeg";
            filme6.src = "imagens/Nova Ordem Espacial.jpeg";
            filme7.src = "imagens/roald-dahl-s-the-witches.jpeg";
            filme8.src = "imagens/mortal-kombat-legends-scorpion-s-revenge.jpeg";
            filme9.src = "imagens/naruto.jpeg";
            filme10.src = "imagens/dragonheart-vengeance.jpeg";
            filme11.src = "imagens/jiu-jitsu.jpeg";
            break;
        case 5:
            /*TERROR*/ 
            filme1.src = "imagens/the-conjuring-the-devil-made-me-do-it.jpeg";
            filme2.src = "imagens/a-quiet-place-2.jpeg";
            filme3.src = "imagens/the-unholy.jpeg";
            filme4.src = "imagens/spiral-from-the-book-of-saw.jpeg";
            filme5.src = "imagens/the-conjuring-2.jpeg";
            filme6.src = "imagens/the-conjuring.jpeg";
            filme7.src = "imagens/the-banishing.jpeg";
            filme8.src = "imagens/pg-psycho-goreman.jpeg";
            filme9.src = "imagens/black-water-the-abyss.jpeg";
            filme10.src = "imagens/willy-s-wonderland.jpeg";
            filme11.src = "imagens/wrong-turn.jpeg";
            break;
    }
}


function abreLink1(){
    switch(document.getElementById('genero').selectedIndex) {
        case 1:
            window.open('https://www.themoviedb.org/movie/637649-wrath-of-man');
            break;
        case 2:
            window.open('https://www.themoviedb.org/movie/615457-nobody');
            break;
        case 3: 
            window.open('https://www.themoviedb.org/movie/823855-i-am-all-girls');
            break;
        case 4:
            window.open('https://www.themoviedb.org/movie/527774-raya-and-the-last-dragon');
            break;
        case 5:
            window.open('https://www.themoviedb.org/movie/423108-the-conjuring-the-devil-made-me-do-it');
            break;
    }
}

function abreLink2(){
    switch(document.getElementById('genero').selectedIndex) {
        case 1:
            window.open('https://www.themoviedb.org/movie/717192-ferry');
            break;
        case 2:
            window.open('https://www.themoviedb.org/movie/615678-thunder-force');
            break;
        case 3:
            window.open('https://www.themoviedb.org/movie/635302');
            break;
        case 4:
            window.open('https://www.themoviedb.org/movie/791373-zack-snyder-s-justice-league');
            break;
        case 5:
            window.open('https://www.themoviedb.org/movie/520763-a-quiet-place-2');
            break;
    }
}

function abreLink3() {
    switch(document.getElementById('genero').selectedIndex) {
        case 1:
            window.open('https://www.themoviedb.org/movie/460465-mortal-kombat');
            break;
        case 2:
            window.open('https://www.themoviedb.org/movie/811367-22-vs-earth');
            break;
        case 3:
            window.open('https://www.themoviedb.org/movie/793723-sentinelle');
            break;
        case 4:
            window.open('https://www.themoviedb.org/movie/464052-wonder-woman-1984');
            break;
        case 5:
            window.open('https://www.themoviedb.org/movie/632357-the-unholy');
            break;
    }
}

function abreLink4(){
    switch(document.getElementById('genero').selectedIndex) {
        case 1:
            window.open('https://www.themoviedb.org/movie/804435-vanquish');
            break;
        case 2:
            window.open('https://www.themoviedb.org/movie/508943-luca');
            break;
        case 3: 
            window.open('https://www.themoviedb.org/movie/615658-awake');
            break;
        case 4:
            window.open('https://www.themoviedb.org/movie/458576-monster-hunter');
            break;
        case 5:
            window.open('https://www.themoviedb.org/movie/602734-spiral-from-the-book-of-saw');
            break;
    }
}

function abreLink5(){
    switch(document.getElementById('genero').selectedIndex) {
        case 1:
            window.open('https://www.themoviedb.org/movie/726429-xtremo');
            break;
        case 2:
            window.open('https://www.themoviedb.org/movie/834500-trippin-with-the-kandasamys');
            break;
        case 3: 
            window.open('https://www.themoviedb.org/movie/447332-a-quiet-place');
            break;
        case 4:
            window.open('https://www.themoviedb.org/movie/663558');
            break;
        case 5:
            window.open('https://www.themoviedb.org/movie/259693-the-conjuring-2');
            break;
    }
}

function abreLink6(){
    switch(document.getElementById('genero').selectedIndex) {
        case 1:
            window.open('https://www.themoviedb.org/movie/503736-army-of-the-dead');
            break;
        case 2:
            window.open('https://www.themoviedb.org/movie/825597-maggie-simpson-in-the-force-awakens-from-its-nap');
            break;
        case 3: 
        window.open('https://www.themoviedb.org/movie/522406-flashback');
            break;
        case 4:
            window.open('https://www.themoviedb.org/movie/581389');
            break;
        case 5:
            window.open('https://www.themoviedb.org/movie/138843-the-conjuring');
            break;
    }
}

function abreLink7(){
    switch(document.getElementById('genero').selectedIndex) {
        case 1:
            window.open('https://www.themoviedb.org/movie/817451-endangered-species');
            break;
        case 2:
            window.open('https://www.themoviedb.org/movie/755812-miraculous-world-new-york-united-heroez');
            break;
        case 3: 
        window.open('https://www.themoviedb.org/movie/475557-joker');
            break;
        case 4:
            window.open('https://www.themoviedb.org/movie/531219-roald-dahl-s-the-witches');
            break;
        case 5:
            window.open('https://www.themoviedb.org/movie/573680-the-banishing');
            break;
    }
}

function abreLink8(){
    switch(document.getElementById('genero').selectedIndex) {
        case 1:
            window.open('https://www.themoviedb.org/movie/399566-godzilla-vs-kong');
            break;
        case 2:
            window.open('https://www.themoviedb.org/movie/529203-the-croods-a-new-age');
            break;
        case 3: 
        window.open('https://www.themoviedb.org/movie/283566-evangelion-4-0');
            break;
        case 4:
            window.open('https://www.themoviedb.org/movie/664767-mortal-kombat-legends-scorpion-s-revenge');
            break;
        case 5:
            window.open('https://www.themoviedb.org/movie/670428-pg-psycho-goreman');
            break;
    }
}

function abreLink9(){
    switch(document.getElementById('genero').selectedIndex) {
        case 1:
            window.open('https://www.themoviedb.org/movie/567189-without-remorse');
            break;
        case 2:
            window.open('https://www.themoviedb.org/movie/647302-benny-loves-you');
            break;
        case 3: 
            window.open('https://www.themoviedb.org/movie/580532-crisis');
            break;
        case 4:
            window.open('https://www.themoviedb.org/movie/20982-naruto');
            break;
        case 5:
            window.open('https://www.themoviedb.org/movie/522444-black-water-the-abyss');
            break;
    }
}

function abreLink10(){
    switch(document.getElementById('genero').selectedIndex) {
        case 1:
            window.open('https://www.themoviedb.org/movie/808023-the-virtuoso');
            break;
        case 2:
            window.open('https://www.themoviedb.org/movie/643586-willy-s-wonderland');
            break;
        case 3: 
            window.open('https://www.themoviedb.org/movie/544401-cherry');
            break;
        case 4:
            window.open('https://www.themoviedb.org/movie/666750-dragonheart-vengeance');
            break;
        case 5:
            window.open('https://www.themoviedb.org/movie/643586-willy-s-wonderland');
            break;
    }
}

function abreLink11(){
    switch(document.getElementById('genero').selectedIndex) {
        case 1:
            window.open('https://www.themoviedb.org/movie/578701-those-who-wish-me-dead');
            break;
        case 2:
            window.open('https://www.themoviedb.org/movie/676842-despues-de-ti');
            break;
        case 3: 
            window.open('https://www.themoviedb.org/movie/539885-ava');
            break;
        case 4:
            window.open('https://www.themoviedb.org/movie/590706-jiu-jitsu');
            break;
        case 5:
            window.open('https://www.themoviedb.org/movie/630586-wrong-turn');
            break;
    }
}