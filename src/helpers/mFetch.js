const products = [
    {
        "id" : 0,
        "title" : "Nike Total 90 Futbol Sala",
        "description" : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
        "price" : 22,
        "pictureUrl" : "https://www.tradeinn.com/f/13853/138531061_2/nike-zapatillas-futbol-sala-jr-total-90-iii-ic.jpg"
    },
    {
        "id" : 1,
        "title" : "Adidas Adizero F50 miCoach",
        "description" : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
        "price" : 10,
        "pictureUrl" : "https://i0.wp.com/clipset.com/wp-content/uploads/2011/10/adizero_f50-micoach-2.jpg?ssl=1"
    },
    {
        "id" : 2,
        "title" : "Puma Neymar JR Future Ultimate",
        "description" : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
        "price" : 40,
        "pictureUrl" : "https://www.soccermaster.com/wp-content/uploads/107323_01_puma_neymar_jr_future_ultimate_fg_creativity_pack_sm_01.jpg"
    }
]

export const mFetch = (url) => {
    return new Promise ((res,rej) => {
        setTimeout(() => {
            res(products);
        },2000)
    })
}