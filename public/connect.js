const form = document.getElementById('login');

form.addEventListener('submit',function(e){
    e.preventDefault();
    let http = new XMLHttpRequest();
    let url = 'action.php';
    let data = new FormData(form);
    http.open('POST',url,true);
    http.onreadystatechange = function(){
        if(http.readyState == 4 && http.status == 200){
            let resp = JSON.parse(http.responseText);
            if(resp.response == 'true'){
                alert('connect full');
            }else{
                alert('incorrecto'); 
            }
        }
    }
    http.send(data);
});