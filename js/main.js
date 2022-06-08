const elPokemonsList = document.querySelector(".pakemons__list")



for(let pokemon of pokemons){

    // CREATE ELEMENT
    const pakemon__item = document.createElement("li")
    const pakemon__title__img = document.createElement("img")
    const pakemon__item__div = document.createElement("div")


    const pakemon__div = document.createElement("div")
    const pakemon__div__left = document.createElement("div")
    const pakemon__title = document.createElement("h5")
    const pakemon__text = document.createElement("p")
    const pakemon__img = document.createElement("img")
    const pakemon__div__bottom = document.createElement("div")
    const pakemon__weight = document.createElement("h5")
    const pakemonHeight = document.createElement("h5")




    // SET ATRIBUTE
    pakemon__item.setAttribute("class" , "card mb-3 rounded-4  border-2 border border-dark")
    pakemon__item.style.width ="14rem"
    pakemon__title__img.classList.add("card-img-top")
    pakemon__title__img.setAttribute("src", pokemon.img )
    pakemon__item__div.setAttribute("class" ," p-3 rounded-bottom border-2 border-top border-dark")
    pakemon__div.setAttribute("class","card-body d-flex justify-content-between p-0")
    pakemon__div__left.classList.add("card-body-left")
    pakemon__title.classList.add("card-title")
    pakemon__text.classList.add("card-text")
    pakemon__img.classList.add("card-body-img")
    pakemon__img.style.width = "30px"
    pakemon__img.style.height = "30px"
    pakemonHeight.style.marginLeft = "15px"
    pakemon__div__bottom.setAttribute("class","card-buttom mt-3 d-flex")



    pakemon__title.textContent = pokemon.name
    pakemon__text.textContent = pokemon.type
    pakemon__weight.textContent = pokemon.weight
    pakemonHeight.textContent = pokemon.height

    // APPANDChild
    elPokemonsList.appendChild(pakemon__item)
    pakemon__item.appendChild(pakemon__title__img)
    pakemon__item.appendChild(pakemon__item__div)
    pakemon__item__div.appendChild(pakemon__div)
    pakemon__div.appendChild(pakemon__div__left)
    pakemon__div__left.appendChild(pakemon__title)
    pakemon__div__left.appendChild(pakemon__text)
    pakemon__div.appendChild(pakemon__img)
    pakemon__div__bottom.appendChild(pakemon__weight)
    pakemon__div__bottom.appendChild(pakemonHeight)
    pakemon__item__div.appendChild(pakemon__div__bottom)

}