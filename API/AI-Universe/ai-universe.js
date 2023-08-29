const loadData = async (showAll)=> {
    const response = await fetch('https://openapi.programming-hero.com/api/ai/tools')
    const data = await response.json()
    const allAI = data.data.tools
    displayAI(allAI, showAll)
}

const displayAI = (getAI, showAll) =>{
    const aiCardContainer = document.getElementById('ai-card-container')
    aiCardContainer.innerText = '';
    const showAllContainer =document.getElementById('show-all-container')
    if(getAI.length > 6){
      showAllContainer.classList.remove('hidden')
    }
    else{
      showAllContainer.classList.add('hidden')
    }
    if(!showAll){
      getAI= getAI.slice(0,6);
    }
    
    


    getAI.forEach(singleAI =>{
        console.log(singleAI);

        const aiCard = document.createElement('div')
        aiCard.classList = 'card bg-base-100 shadow-xl'
        aiCard.innerHTML =`
        <figure><img src="${singleAI.image}" alt="" /></figure>
        <div class="card-body">
          <h2 class="card-title">Features!</h2>
          <p>${singleAI.description}</p>
          <ol>
                <li>1 ${singleAI.features[0]}</li>
                <li>2 ${singleAI.features[1]}</li>
                <li>3 ${singleAI.features[2]}</li>
                
            </ol>
            <p>${singleAI.published_in}</p>
          <div class="card-actions justify-end">
            <button class="btn btn-accent rounded-full "><i class="fa-solid fa-arrow-right text-orange-500"></i></button>
          </div>
        </div>
        `
        aiCardContainer.appendChild(aiCard)
    })
}

const showAllHandler = ()=>{
  console.log('click');
  loadData(true)
}

loadData()





