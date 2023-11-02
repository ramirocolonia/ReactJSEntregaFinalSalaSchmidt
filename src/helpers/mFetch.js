const products = [
    {
        "id" : "0",
        "title" : "Pelota futbol 11 Nike Strike",
        "description" : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
        "price" : 22,
        "pictureUrl" : "https://f.fcdn.app/imgs/a6c342/www.globalsports.com.uy/gls/5f07/original/catalogo/NKDC2376-106-1/2000-2000/pelota-nike-strike-white.jpg",
        "category" : "pelotas"
    },
    {
        "id" : "1",
        "title" : "Remera Adidas training hombre",
        "description" : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
        "price" : 10,
        "pictureUrl" : "https://f.fcdn.app/imgs/c1985f/menpi.uy/menpuy/a0f3/original/catalogo/H30255-0-1/1920-1200/remera-adidas-training-hombre-fr-lg-t-legend-ink-s-c.jpg",
        "category" : "remeras"
    },
    {
        "id" : "2",
        "title" : "Puma Neymar JR Future Ultimate",
        "description" : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
        "price" : 40,
        "pictureUrl" : "https://www.soccermaster.com/wp-content/uploads/107323_01_puma_neymar_jr_future_ultimate_fg_creativity_pack_sm_01.jpg",
        "category" : "botines"
    }
]

export const mFetch = (url) => {
    return new Promise ((res,rej) => {
        setTimeout(() => {
            res(products);
        },1000)
    })
}
