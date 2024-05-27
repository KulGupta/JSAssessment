const arr=[];
function mintNFT(name ,skinColor,shirt,age,bling) {
    const obj_nft = {
        "Name" :name,
        "Skin_color":skinColor,
        "Shirt":shirt,
        "Age":age,
        "Bling":bling,
    }
    arr.push(obj_nft);
    console.log("Name : "+name);
}

function listNFTs() {
    for(let i=0;i<arr.length;i++){
        console.log(`\nNFT ID:${(i+1)} , Name: ${arr[i].Name} , Skin_color: ${arr[i].Skin_color} , Shirt: ${arr[i].Shirt} , Age: ${arr[i].Age} , Bling: ${arr[i].Bling}`);
    }
}

function getTotalSupply() {
    return arr.length;
}

mintNFT("Kul","Black","T-shirt","20","Gold chain");
mintNFT("Gopal","Brown","Hoodie","19","Silver chain");
mintNFT("Mohan","Bronze","Sweaters","18","Diamond ring");
listNFTs();
console.log("\nNumber of NFTs created is: "+getTotalSupply())
