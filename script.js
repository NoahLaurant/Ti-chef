// role : questionner l'API
// parametre: 
// retour : 

	 fetch("recette.json")
	.then(rep=> {
			return rep.json()
	})
	.then(data=>{
			// a ce niveau on devrait avoir dans la console les données renvoyé par l'API
			console.log(data)
            afficheRecette(data)
	});



    //role : récupérer les recettes dans le json
//parametre : du tableau de recette
//return : rien car elle affiche
function afficheRecette(tableauRecette) {
    tableauRecette.forEach(recette => {
        let ingredientsList = ""
        let recetteCard = ` 
          <div class="flex">
                <h2 class="orange">${recette.nom}</h2>
                <a href="" class="btn"><i class="ph ph-heart"></i></a>
                <a href="" class="btn"><i class="ph ph-share-network"></i></a>
            </div>

            <div class="flex w-100 space-between">

                <div class=" w-25">
                    <img src="${recette.img}" alt="" class="w-100">
                    <p class="bg-orange w-60">Nom</p>
                
                    <div>
                    <img src="${recette.img}" alt="" class="w-30">
                    <img src="${recette.img}" alt="" class="w-30">
                    <img src="${recette.img}" alt="" class="w-30">
                    </div>

                </div>

                <div class="w-25">

                    <div class="flex">

                        <i class="ph ph-fork-knife orange"></i>
                        <p class="orange">${recette.portions}</p>


                        <i class="ph ph-fire orange"></i>
                        <p class="orange">${recette.tempCuisson}</p>


                        <i class="ph ph-alarm orange"></i>
                        <p class="orange">${recette.tempPreparation}</p>



                    </div>

                    <h3 class="orange">Details</h3>
                    <p class="orange">${recette.desc}</p>

                    <h3 class="orange">Ingredients</h3>
                    <ul>${ingredientsList}</ul>

                </div>

                <div class="flex w-35">

                    <h3 class="orange">Etapes</h3>
                    <ul>${recette.etapes}</ul>

                </div>


            </div>
         
      
        
        `

        document.querySelector("#carte").innerHTML += recetteCard;
    });
}