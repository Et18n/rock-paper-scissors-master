
let rock=document.getElementById('rock')
let paper=document.getElementById('paper')
let scissor=document.getElementById('scissor')
let main=document.getElementById('main')
let pick=document.getElementById('pick')
let score_total=document.getElementById('score_total')
let win=document.getElementById('win')
let draw=document.getElementById('draw')
let lose=document.getElementById('lose')
let play=document.getElementById('play_again')






score_update=update_score()
    score_total.innerHTML=score_update
let final
class score_keep {
    constructor(score) {
        this.value = score
        console.log(this.value)      
    }
    increase(){
        this.value=this.value+1
        console.log(this.value)      
        return this.value
        
    }
    decrease(){
        this.value=this.value-1
        console.log(this.value)      
        return this.value
    }
}
let score=new score_keep(update_score()) 


rock.addEventListener('click',()=>{
    
    player_choice(rock.value)
    main.classList.add('hidden')
    pick.classList.remove('hidden')

    setTimeout(() => {
        final=house_pick()
        check_score(rock,final)
    }, 1000);
    // let score_total=document.getElementById('score_total')
    score_update=update_score()
    score_total.innerHTML=score_update
    play.classList.remove('hidden')

})
paper.addEventListener('click',()=>{
    player_choice(paper.value)
    main.classList.add('hidden')
    pick.classList.remove('hidden')

    setTimeout(() => {
        final=house_pick()
        check_score(paper,final)
    }, 1000);

    score_update=update_score()
    score_total.innerHTML=score_update
    play.classList.remove('hidden')


})
scissor.addEventListener('click',()=>{
    player_choice(scissor.value)
    main.classList.add('hidden')
    pick.classList.remove('hidden')

    setTimeout(() => {
        final=house_pick()
        check_score(scissor,final)
    }, 1000);
    score_update=update_score()
    score_total.innerHTML=score_update
    play.classList.remove('hidden')

})



function player_choice(choice){
    document.getElementById('rock_player_choice').classList.add('hidden')
    document.getElementById('paper_player_choice').classList.add('hidden')
    document.getElementById('scissor_player_choice').classList.add('hidden')
    console.log(choice)
    if (choice=="rock"){
        
        document.getElementById('rock_player_choice').classList.remove('hidden')
    }
    if (choice=="paper"){
        
        document.getElementById('paper_player_choice').classList.remove('hidden')
    
    }
    if(choice=="scissor"){
       
        document.getElementById('scissor_player_choice').classList.remove('hidden')
    }
}



let rule_page=document.getElementById('rules')
let close=document.getElementById('close_btn')
document.getElementById('rulebtn').addEventListener('click',()=>{
    rule_page.classList.remove('hidden')
})
close.addEventListener('click',()=>{
    rule_page.classList.add('hidden')
})


function house_pick(){
    document.getElementById('rock_house_choice').classList.add('hidden')
    document.getElementById('paper_house_choice').classList.add('hidden')
    document.getElementById('scissor_house_choice').classList.add('hidden')
    const arr=['rock','paper','scissor']
    let choice=(arr[(Math.floor(Math.random() * arr.length))]);
    console.log(choice)
    if (choice=="rock"){
        console.log('rock')
        document.getElementById('rock_house_choice').classList.remove('hidden')
    }
    if (choice=="paper"){
        console.log('paper')
        document.getElementById('paper_house_choice').classList.remove('hidden')
    
    }
    if(choice=="scissor"){
        console.log('scissors')
        document.getElementById('scissor_house_choice').classList.remove('hidden')
    }
    return choice
}


function condition(result){
    win.classList.add('hidden')
    lose.classList.add('hidden')
    draw.classList.add('hidden')
    if (result=='win'){
        win.classList.remove('hidden')
    }
    else if(result=='lose'){
        lose.classList.remove('hidden')
    }
    else{
        draw.classList.remove('hidden')
    }
    console.log(result)
}


  

function check_score(player_choice,house_pick){
   
    console.log(player_choice.value,house_pick)
    if(player_choice.value=='rock' && house_pick=='scissor')
    {
        console.log('rock,scissor')
        score.increase()
        condition('win')
    }
    else if(player_choice.value=='rock' && house_pick=='paper')
        {
            console.log('rock,paper')
            score.decrease()
            condition('lose')
        }
    else if(player_choice.value=='paper' && house_pick=='scissor')
        {
            console.log('paper,scissor')
            score.decrease()
            condition('lose')
        }
    else if(player_choice.value=='paper' && house_pick=='rock')
        {
            console.log('paper,rock')
            score.increase()
            condition('win')
        }
    else if(player_choice.value=='scissor' && house_pick=='rock')
        {
            console.log('scissor,rock')
            score.decrease()
            condition('lose')
        }
    else if(player_choice.value=='scissor' && house_pick=='paper')
        {
            console.log('scissor,paper')
            score.increase()
            condition('win')
        }
    else if((player_choice.value=='rock'&& house_pick=='rock')|| (player_choice.value=='scissor'&& house_pick=='scissor')||(player_choice.value=='paper'&& house_pick=='paper')     ){
        condition('draw')
        }
        console.log(score.value)
         save_score(score.value)
      
         score_update=update_score()
         score_total.innerHTML=score_update
}


function save_score(score){
    let score_string=JSON.stringify(score)
    localStorage.setItem('score',score_string)
}

function update_score(){
    let score_string=localStorage.getItem('score')
    result=JSON.parse(score_string)
    return result
}



play.addEventListener('click',()=>{
    main.classList.remove('hidden')
    pick.classList.add('hidden')
    console.log('exit')
    play.classList.add('hidden')
    win.classList.add('hidden')
    lose.classList.add('hidden')
    draw.classList.add('hidden')
})

