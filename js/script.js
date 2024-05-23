// Ini JS

let isKelilingVisible = false; //Keliling is Hide
function hideOrShow(){
    if(isKelilingVisible ==false){
        isKelilingVisible = true;
        document.getElementById('luas-section').style.display = 'none';
        document.getElementById('keliling-section').style.display = 'block';
    } else{
        isKelilingVisible = false;
        document.getElementById('luas-section').style.display = 'block';
        document.getElementById('keliling-section').style.display = 'none';
    }

}


function validation(){
    let alasValue = document.getElementById('alas-input').value;
    let tinggiValue = document.getElementById('tinggi-input').value;
    console.log(alasValue);
    console.log(tinggiValue);

    let luas = 0.5 * alasValue * tinggiValue;
    document.getElementById('output').innerHTML = "Luas Segitiga = " +luas;
    
    if(alasValue != '' && tinggiValue != '' ){
        console.log('sukses validasi');
    } else{
        alert('inputan kosong');
    }
}

function validationKeliling(){
    let  sisi1Value= document.getElementById('sisi1-input').value;
    let  sisi2Value= document.getElementById('sisi2-input').value;
    let  sisi3Value= document.getElementById('sisi3-input').value;

    let keliling = parseInt(sisi1Value) + parseInt(sisi2Value) + parseInt(sisi3Value);
    document.getElementById('output2').innerHTML = "Keliling Segitiga = " +keliling;
}

function resetForm() {
    // Mengosongkan nilai input dan hasil
    document.getElementById('alas-input').value = "";
    document.getElementById('tinggi-input').value = "";
    document.getElementById('output').innerHTML = "";
}

function resetForm2() {
    // Mengosongkan nilai input dan hasil
    document.getElementById('sisi1-input').value = "";
    document.getElementById('sisi2-input').value = "";
    document.getElementById('sisi3-input').value = "";
    document.getElementById('output2').innerHTML = "";
}