// sorting


function panggil(){
    var kota = [32,33,16,40,9,7,11,2,44,1,66]
    console.log("sebelumnya",kota)
    console.log('Ascending')
    kota = kota.sort()
    return kota
}

console.log(panggil());

//reverse

function panggil2(){
    var kota = [32,33,16,40,9,7,11,2,44,1,66]
    
    console.log("Descending")
    kota = kota.sort().reverse()
    return kota
}

console.log(panggil2());