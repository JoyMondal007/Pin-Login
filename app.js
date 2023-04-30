const result=document.getElementById('result');
const tableEl = document.querySelector('.table')
const outputEl = document.querySelector('.output')
const valid = "2580";

function Num(digit){
    result.value += digit;
    console.log(typeof result.value)
}

function remove(){
    result.value=result.value.slice(0,-1);
}

function submit(){
    if(result.value){
        if(valid === result.value){
            // tableEl.classList.add('active')
            // outputEl.classList.add('compile')
            tableEl.innerHTML=`
            <p class="message">wellcome!! you are logged in...</p>
            `
            tableEl.style.display='flex'
            tableEl.style.justifyContent='center'
            tableEl.style.alignItems='center'
        }else{
            setTimeout(() => {
            result.classList.add('animate')
            }, 500);
            setTimeout(() => {
                result.value=''
            }, 1000);
        }
    }
   
}