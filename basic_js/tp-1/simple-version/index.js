const {Member, Total} ={
    Member: true,
    Total: 600000
}
let HargaAkhir;

if (Member && Total >= 500000) {
    HargaAkhir = Total - (Total * 0.2);
    console.log(`Mantap luh dapet diskon 20% total lu ${HargaAkhir}`);
} else if (Total >= 500000) {
    HargaAkhir = Total - (Total * 0.1);
    console.log(`Lumayan dapet diskon 10% total lu ${HargaAkhir}`);
} else {
    HargaAkhir = Total;
    console.log(`yeeehhh gk dapet diskon ni anak, member donks ${HargaAkhir}`);
}