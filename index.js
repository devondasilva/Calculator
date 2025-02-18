 
    var affichage= document.getElementById('ecran');
    var valeur="";
    valeur = document.getElementsByClassName('val');
    let ent="";
    let vale="";
    var i;
    let n="";
    let v1="";
    let v2="";
    let ope="";
    let res="";

    // document.addEventListener('click', (e)=>{
    //     cle=e.target
    //     ent += cle.textContent;
    //     console.log(ent);
    //     affichage.value = ent;
    //     if(cle==='+' || cle ==='-' || cle==='/' || cle ==='*'){
    //         if(v1===""){
    //             v1=ent;
    //             affichage.value="";
    //             ope=cle;
    //             affichage.value =cle;
    //         }
    //     }
        
        
                    
                            
                           
    // e.preventDefault();
        
    // })
   





    
document.addEventListener("keydown",(e)=>{
    
    const key  = e.key;
    console.log(key);

    if ( '0'<=key && key<='9' || key === '.' || (key ==='-' && n.length ===0))
        {
            n += key;
            affichage.value = n;
        } 
            else if ( key === "Backspace"){
            n = n.slice(0, -1);
            affichage.value =n;
            }
                else if (key === '+' || key === '-' || key === '/' || key === '*'){
                    if (v1 === ""){
                    v1=n ;
                    n="";
                    ope=key;
                    affichage.value = ope;
                    }
                }
                    else if(key==='Enter' || key ==="="){
                        if (v1 !=="" && ope !=="" && n!=="" ){
                            v2=n;
                            n="";
                            switch (ope){
                                case '+':
                                    res= parseFloat(v1)+parseFloat(v2);
                                    break;
                                case '-':
                                    res= parseFloat(v1)-parseFloat(v2);
                                    break;
                                case '/':
                                    res= parseFloat(v1)/parseFloat(v2);
                                    break;
                                case '*':
                                    res= parseFloat(v1)*parseFloat(v2);
                                    break;
                            }
                            affichage.value=res;
                            v1=res;
                            ope='';
                            v2="";

                            

            }
        } else if (key==='Escape'){
            window.location.reload();
        }
       
        
        e.preventDefault();
    });
        
     









// var i;
// var valeur = document.getElementsByClassName('val')[1];
// console.log(valeur);
// var a;
// switch (i=a){

//     case (a=0):
//         valeur[i].addEventListener('click', (e)=>{
//             console.log(e);
//             var res = e.target.textContent;
//             console.log(res);
//         })
//         break;
//     case a=1:
//         valeur[i].addEventListener('click', (e)=>{
//             var res = e.target.textContent;
//             console.log(res);
//         })
//         break;
//     case a=2:
//             valeur[i].addEventListener('click', (e)=>{
//                 var res = e.target.textContent;
//                 console.log(res);
//             })
//             break;


// };



var a;
var b;
var result;
function somme( a,  b){
    result = a +b;
    return result;
}

function multi( a,  b){
    result = a * b;
    return result;
}

function sous( a,  b){
    result = a - b;
    return result;
}

function div( a,  b){
    result
    if (b != 0){
     result = a / b;}
    else ("Entrez une valeur valide");
    return result;
}




function calculer(){

let operation;
let func;


switch (operation=func) {

    case somme:
        somme(a,b);
         break;
    case sous:
        sous(a,b);
         break;
    case div:
        sous(a,b);
        break;

    case multi:
        multi(a,b)
        break;
    
}

}







