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
        tf = false,
        $ul = d.querySelector(".ul"),
        width = w.screen.availWidth,
        height = w.screen.availHeight,
        device = (user.match(/windows|apple|iphone|ipad|android/i))?user.match(/windows|apple|iphone|ipad|android/i):"",
        info=user,
        [uno,dos,tres]=info.split(","),
        marca = (uno.match(/android/i))?(uno.match(/galaxy|oneplus|pixel|huawei|redmi|honor|sony|lg|nokia|motorola|mac|xiaomi|blu|htc|alcatel|zte|/i)):"",
        modelo=(uno.match(/redmi|htc|motorola|blu|lg|galaxy|nokia/i))?uno.match(/Sony Xperia XZ Premium|LG G2|LG G3|LG G4|LG G5|LG G5 SE|LG G6|LG G7 ThinQ|Samsung Galaxy S10e|Samsung Galaxy S10|Samsung Galaxy S10+|Samsung Galaxy S20|Samsung Galaxy S20+|Samsung Galaxy S20 Ultra|Samsung Galaxy S20 FE|Samsung Galaxy S21|Samsung Galaxy S21+|Samsung Galaxy S21 Ultra|Nokia 500|Nokia 808 PureView|Nokia 1011|Nokia 1100|Nokia 1110|Nokia 1112|Nokia 1200|Nokia 1600|Motorola One|Motorola One Power|Motorola One Vision|Motorola One Zoom|Motorola One Action|Motorola One Macro|Motorola One Hyper|Motorola One Fusión|Desire 21 Pro 5G|Desire 20 Pro|Desire 20+|u20 5g|wildfire e1 lite|wildfire e2|wildfire r70|Xiaomi Redmi Note 9s|Xiaomi Redmi Note 9T 5G|Xiaomi Redmi Note 9T|Xiaomi Redmi Note 9 power|Xiaomi Redmi Note 9 pro 5g|Xiaomi Redmi Note 9 5G|Xiaomi Redmi Note 9 4g|Xiaomi Redmi 9at|Xiaomi Redmi k30s|Xiaomi Redmi 9i|Xiaomi Redmi 9|Xiaomi Redmi k30 ultra|Xiaomi Redmi 9 prime|Xiaomi Redmi 9c|Xiaomi Redmi 9a|Xiaomi Redmi 9|Xiaomi Redmi 10x pro 5g|Xiaomi Redmi 10x 5g|Xiaomi Redmi 10x 4g|Xiaomi Redmi k30i 5g|Xiaomi Redmi Note 9|Xiaomi Redmi k30pro|Xiaomi Redmi k30 pro zoom|Xiaomi Redmi Note 9 pro|Xiaomi Redmi Note 9 pro max|Xiaomi Redmi 8a dual|Xiaomi Redmi k30|Xiaomi Redmi Note k30 5g|Xiaomi Redmi Note 8t|Xiaomi Redmi 8|Xiaomi Redmi 8a|Xiaomi Redmi k20 pro premium|Xiaomi Redmi Note 8|Xiaomi Redmi Note 8 pro|asl|g61|studio x10+|c5l|c6|c6l|g50|g50 mega|g50 plus|g60|g70|g80|G90|g90 pro|j5l|j6|j7l|studio x10|studio x9 hd|tank xtreme|view mega|g8|HTC U11+|HTC U11|HTC 10|HTC u12 life|HTC desire 12+|HTC u11 life|HTC u12+/i):"",
        bits=(uno.match(/34|64/i))?uno.match(/34|64/i)+" bits":"";
    data.forEach((item) => {
        if (item.width.includes(width)) {
            tf = true;
            $ul.innerHTML = `
            <li><i class="fas fa-sitemap"></i>${device} ${marca || ""} ${bits} ${modelo}</li>
            <li><i class="fas fa-spell-check"></i>${item.siglas}</li>
            <li><i class="fas fa-file-signature"></i>${item.nombre}</li>
            <li><i class="fas fa-desktop"></i>${width} x ${height}px</li>
            <li><i class="fas fa-file-medical-alt"></i>${item.descripcion}</li>
           `;
        }
    });
    if (tf == false) {
        $ul.innerHTML = `
            <li><i class="fas fa-sitemap"></i>${device} ${marca || ""} ${bits}</li>
            <li><i class="fas fa-desktop"></i>${width} x ${height}px</li>
           `;
    }
}, 1000)