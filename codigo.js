
function ajax(recurso,funcao)
{
    const xhr=new XMLHttpRequest();
        xhr.onreadystatechange=funcao;
        xhr.open("get",recurso,true);
        xhr.send();
}

onload=function(){
    ajax("receitas.xml",function(){
        if(this.readyState==4&&this.status==200)
        {
            const doc=this.responseXML;
            mostrarNomeReceitas(doc);
        }
    }
    )
};


function mostrarNomeReceitas(doc){

    const itens=doc.getElementsByTagName("item");
    let links = document.querySelectorAll("#links button");

    for (let i = 0; i < itens.length; i++) {
        links[i].textContent = itens[i].textContent;
    }

}


