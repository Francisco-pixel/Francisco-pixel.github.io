import { data } from "./data.js";
let c = console,
    w = window,
    d = document,
    n = navigator,
    $contentLoad = d.querySelector(".contentLoad"),
    $alert = d.querySelector(".alert");
/* Load */
w.addEventListener("load", () => {
    $contentLoad.style.opacity = "0";
    $contentLoad.style.visibility = "hidden";
})

/*Alerta de conexión*/
let conex = (msn, color, sh) => {
    $alert.innerHTML = `${msn}`;
    $alert.style.top = "0%";
    $alert.style.color = `${color}`;
    $alert.style.textShadow = `${sh}`;

    setInterval(() => {
        $alert.style.top = "-100%";
    }, 3000);
}

w.addEventListener("online", () => {
    conex("Conexion Establecida", "#73ff7e", "0 0 5px #37ff04,0 0 20px #37ff04");
});
w.addEventListener("offline", () => {
    conex("Se fue la conexion a internet", "#666", "");
});
setInterval(() => {
    let user = n.userAgent,
        device,
        tf=false,
        $ul = d.querySelector(".ul");
    if (user.match(/windows|apple|iphone|ipad|android/i)) {
        device = user.match(/windows|apple|iphone|ipad|android/i)[0];
    } else {
        device = "N/D";
    }
    let width = w.screen.availWidth,
        height = w.screen.availHeight;
    data.forEach((item)=>{       
        if(item.width.includes(width)){
            tf=true;
            c.log(item.siglas);
            c.log("El ancho coincide");
            $ul.innerHTML = `
            <li><i class="fas fa-sitemap"></i>${device}</li>
            <li><i class="fas fa-spell-check"></i>${item.siglas}</li>
            <li><i class="fas fa-file-signature"></i>${item.nombre}</li>
            <li><i class="fas fa-desktop"></i>${width} x ${height}px</li>
            <li><i class="fas fa-file-medical-alt"></i>${item.descripcion}</li>
           `;
        }
    });
    if(tf==false){
        $ul.innerHTML = `
            <li><i class="fas fa-sitemap"></i>${device}</li>
            <li><i class="fas fa-desktop"></i>${width} x ${height}px</li>
           `;
    }
}, 1000)