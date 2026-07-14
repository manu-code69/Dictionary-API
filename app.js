
let h1 = document.querySelector("h1");
let btn = document.querySelector("button");
let ip = document.querySelector("input");



let url = "https://api.dictionaryapi.dev/api/v2/entries/en/"

async function start(){
    try{
        let val = ip.value.trim();

        let res = await fetch(url+val)

        let data = await res.json()

        vals = []
        // console.log(data);

        let fianldata = data[0];


         let means = fianldata.meanings[0].definitions[0].definition
         let audio = ""

         for(let phonetic of fianldata.phonetics){
            if(phonetic.audio !== ""){
                audio = phonetic.audio
                break;
            }
         }
        
        vals.push(means);
        vals.push(audio);
        return vals;
    }
    catch(e){
        console.log(e);
    }
}

btn.addEventListener("click",called)
ip.addEventListener("keydown",function(event){
    if(event.key === "Enter"){
        called()
    }
})

async function called(){
    try{
        let datacoll = await start()

        if(!datacoll){
            alert("No Such Word Founda")
            return ;
        }

        let h4 = document.createElement("h4");
        let ad = document.createElement("audio")

        h4.innerHTML = datacoll[0]
        ad.setAttribute("src",datacoll[1])
        ad.setAttribute("controls", "true"); 

        document.body.append(h4)
        document.body.append(ad)
    }
    catch(err){
        return "error from called"
    }
    
}



//learning : Api me JIS JIS jagah object me array format me output ho vaaha [0] writen must 
// like here main data is in []  =? so thats why we wrote data[0]
// meNING is also return  []  => so thats why meanings[0]