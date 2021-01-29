const gamer = document.getElementById('playeri');
const comp = document.getElementById('penisi');

let foto = '';


document.addEventListener('keyup', function(any){
 jump();
} );
function jump() {
    if(gamer.classList !== 'jump') { 
        gamer.classList.add('jump');
    }
  
   
    setTimeout(() => {
            gamer.classList.remove('jump');
            changePhoto();
          
    }, 500)
  };

let gameOver = setInterval(function() {
    let  gamericha = parseInt(window.getComputedStyle(gamer).getPropertyValue('top'));
   
    let compicha = parseInt(window.getComputedStyle(comp).getPropertyValue('left'));
        if(compicha < 40 && compicha > 0 && gamericha >= 195) {

            this.GameOver();
          
        }
       
}, 20);

function GameOver() { 
    
    alert('შენ გაჯმეინებული ხარ საძმაკაცოდან');
    comp.style.display = 'none';
    window.location.reload();
   
}
function changePhoto() { 
    photos();
    gamer.style.backgroundImage = foto;
}


function photos() {
    let fotoebi = ['url(./assets/144563695_220087546427397_2324026636230914588_n.png)','url(./assets/143997073_320386009375420_9030139632675135062_n.jpg)',
    'url(./assets/132971373_1106196933166654_1613564345552563708_n.jpg)','url(./assets/143881586_416552172777732_5914606531862091408_n.jpg)',
  'url(./assets/91911954_162457994951999_5583134224086466560_n.jpg)','url(./assets/144054648_321553415906517_1922655566936628580_n.png)',
'url(./assets/kaxa.png)','url(./assets/nika.png)'
];
    let randomize = Math.round(Math.random() * 7);
    foto = fotoebi[randomize];
    console.log(foto);
    return foto;
}