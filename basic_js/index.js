

function hitungDiskon({ Member, Total }) {
    let diskon = 0;
    let pesan = "";
    if (Member && Total >= 500000) {
        diskon = Total * 0.2;
        pesan = "Gaskan JAWIERR ente dapet Diskon 20%";
    } else if (Total >= 500000) {
        diskon = Total * 0.1;
        pesan = "Mantap fren lu dapet diskon 10%";
    } else {
        pesan = "Cuih, Lu miskin banget sih";
    }
    const hargaAkhir = Total - diskon;
    return { hargaAkhir, diskon, pesan };
}

function diskonNieh(event) {
    if (event) event.preventDefault();
    const memberCheckbox = document.getElementById('Member');
    const totalInput = document.getElementById('Total');
    const Member = memberCheckbox.checked;
    const Total = parseFloat(totalInput.value) || 0;
    const hasil = hitungDiskon({ Member, Total });

    let resultDiv = document.getElementById('result');
    if (!resultDiv) {
        resultDiv = document.createElement('div');
        resultDiv.id = 'result';
        document.body.appendChild(resultDiv);
    }
    resultDiv.innerHTML = `
        <p>Total Belanja Lu: <b>${Total} Rp</b></p>
        <p>Diskon Yg lu dapet: <b>${hasil.diskon}</b></p>
        <p>Harga Akhir Lu: <b>${hasil.hargaAkhir}</b></p>
        <p>${hasil.pesan}</p>
    `;
    return false;
}