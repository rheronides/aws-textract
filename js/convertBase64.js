    var txtNode, p, btn;
    var base = document.querySelector( '#base64' );
    var inp = document.querySelector('input[type=file]');
    var img = document.querySelector('.img');
       inp.addEventListener( 'change', function(event) {
              if (txtNode) {
                   txtNode.parentNode.removeChild(txtNode);
                   if (p){
                        p.parentNode.removeChild(p);
                    }
                   if (btn){
                        btn.parentNode.removeChild(btn);
                    }
                  }

              var file = inp.files[0];
              var reader  = new FileReader();
 
              reader.addEventListener('load', 
                 function () {
                    txtNode = document.createTextNode(' ');
                    base.style.backgroundImage  = "url('"+reader.result+"')";
                    base.appendChild(txtNode);
                    base.classList.remove( 'hidden' );      
                    btn = document.createElement("button");
                    btn.innerHTML = "Execute";     
                    btn.classList.add('callExt');    
                    img.appendChild(btn);     
                     callAWS(reader.result.substr(22,reader.result.length));
                    
                  }, false );
              if ( file ) {
                  reader.readAsDataURL( file );
                }
           } );

//Call AWS API
function callAWS(textBodyCall){  
    var btnCall = document.querySelector(".callExt");
    btnCall.addEventListener("click", function(){
        var xhr = new XMLHttpRequest();

        xhr.open("POST", "********YOUR AWS END-POINT*******", true);
        xhr.setRequestHeader("x-api-key", "*****YOUR API KEY****");
        xhr.setRequestHeader("Content-Type", "application/json");
        
        body = "{ \"Image\": \"" + textBodyCall + "\" }"
        xhr.addEventListener("load", function(){

            if(xhr.status == 200){

                TextReturn = JSON.parse(xhr.responseText);
                addAWSReturn(TextReturn.body);   
            }

            else{

                console.log(xhr);
            } 
        });

        console.log(body);
        xhr.send(body);     
    });
}

//Add return text from api on page
function addAWSReturn(bodyReturn){
    var img2 = document.querySelector('.img');
    p = document.createElement("div");
    p.classList.add("callExt");
    p.classList.add("returnBox");
    ret = JSON.parse(bodyReturn);
    ret = ret.replace(/\n/g, "<br />");
    p.innerHTML =  ret;
    img2.appendChild(p);
}