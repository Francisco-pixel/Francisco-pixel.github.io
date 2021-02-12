let c = console,
    w = window,
    d = document,
    n = navigator,    
    $contentLoad=d.querySelector(".contentLoad"),
    $alert=d.querySelector(".alert");

let procesar = () => {
    let date = new Date(),
        year = date.getFullYear(),
        mes = date.getMonth(),
        hoy = date.getDay(),
        diaMes = date.getDate(),
        hora = date.getHours(),
        min = date.getMinutes(),
        seg = date.getSeconds(),
        img={"uno":"img/img1.jpg",
            "dos":"img/img2.jpg",
            "tres":"img/img3.jpg",
            "cuatro":"img/img4.jpg",
            "cinco":"img/img5.jpg"
        },
        {uno,dos,tres,cuatro,cinco}=img,
        dias = ["domingo", "lunes", "martes", "miércoles", "jueves", "viernes", "sábado"],
        meses = ["enero", "febrero", "marzo", "abril", "mayo",
            "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"],
        $content=d.querySelector(".content"),
        $body=d.querySelector("#body"),
        amPm,
        dn;
    if (hora >= 12) {
        hora -= 12;
        dn = "Buenas tardes";
        amPm="P.M.";
        $body.style.background=`url(${tres})no-repeat`;
        if (hora > 5) {
            $body.style.background=`url(${cuatro})no-repeat`;
            $body.style.backgroundSize=`cover`;
        }
        if (hora > 6) {
            $body.style.background=`url(${cinco})no-repeat`;
            $body.style.backgroundSize=`cover`;
            dn = "Buenas noches";
        }
    } else {
        $body.style.background=`url(${uno})no-repeat`;
        $body.style.backgroundSize=`cover`;
        amPm="A.M.";
        dn = "Buenos días";
        if (hora > 8) {
            $body.style.background=`url(${dos})no-repeat`;
            $body.style.backgroundSize=`cover`;
        }
    }
    if (hora == 0) {
        hora = 12;
    }
        
    if(hora<10){
        hora=`0${hora}`;
    }
    if(min<10){
        min=`0${min}`;
    }
    if(seg<10){
        seg=`0${seg}`;
    }
    $content.innerHTML=`
    <div class="fecha">${dn}, hoy es ${dias[hoy]} ${diaMes} de ${meses[mes]} de ${year}</div>
    <div class="contentHora">
        <div class="hora">${hora}:${min}</div>
        <div class="seg">${amPm} ${seg}</div>
    </div>
    `;

}

setInterval(procesar, 1000);

/*Load*/
w.addEventListener("load",()=>{
    $contentLoad.style. opacity="0";
    $contentLoad.style.visibility= "hidden";
})

/*Alerta de conexión*/
let conex=(msn,color,sh)=>{
    $alert.innerHTML=`${msn}`;
    $alert.style.top="0%";
    $alert.style.color=`${color}`;
    $alert.style.textShadow=`${sh}`;
    
    setInterval(()=>{
        $alert.style.top="-100%";
    },3000);
}

 w.addEventListener("online",()=>{
    conex("Conexion Establecida","#73ff7e","0 0 5px #37ff04,0 0 20px #37ff04");
 });
 w.addEventListener("offline",()=>{
    conex("Se fue la conexion a internet","#666","");
 });
