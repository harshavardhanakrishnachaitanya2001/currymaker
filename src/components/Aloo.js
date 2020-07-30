import React from 'react'
import {BrowserRouter as Router, Link, Route} from 'react-router-dom'
function Aloo(){
    const spicyPotato=()=>{
        return (
            <div>
                <h1 style={{color:"white"}}>Spicy Potato</h1>
                <h2 style={{color:"white"}}>Ingredients</h2>
                <ol style={{color:"yellow"}}>
                    <li>4 Medium potatoes</li>
                    <li>4 medium tomatoes</li>
                    <li>2 onions</li>
                    <li>2 tsp coriander seeds</li>
                    <li>1 tsp cumin seeds</li>
                    <li>2 tsp sesame seeds</li>
                    <li>3-4 green chillies</li>
                    <li>8-10 garlic cloves</li>
                    <li>1 small ginger, chopped</li>
                    <li>1 bunch coriander leaves, chopped</li>
                    <li>2 tbsp oil</li>
                    <li>salt</li>
                    <li>water</li>
                </ol>
                <h2 style={{color:"white"}}>Steps:</h2>
                <ol style={{color:"green"}}>
                    <li>Boil, cool and peel the potatoes. Dice them into small pieces.</li>
                    <li>Boil, cool and peel the tomatoes and grind to a fine puree.</li>
                    <li>Finely chop onions and three to four green chillies.</li>
                    <li>Dry roast coriander, cumin and sesame seeds. Allow it to cool and grind.</li>
                    <li>Blend garlic, green chillies, ginger, coriander leaves, water and salt to a fine paste.</li>
                    <li>Heat oil, add chopped onions and tomato puree , cook on low heat. Then add the coriander garlic paste and saute for some time.</li>
                    <li>As the fat starts separating, add the potatoes and two heaped teaspoons of the dry masala (coriander, cumin and sesame that has been dry roasted and ground earlier)</li>
                    <li>When the potatoes are cooked, serve hot.</li>
                </ol>
            </div>
        )
    }
    const AlooMatar=()=>{
        return (
            <div>
                <h1 style={{color:"white"}}>Aloo Matar</h1>
                <h2 style={{color:"white"}}>Ingredients</h2>
                <ol style={{color:"yellow"}}>
                    <li>Cauliflower florets – 2 cups</li>
                    <li>Peeled and chopped potatoes – 2 cups</li>
                    <li>Frozen green peas - 1 cup</li>
                    <li>2 onions finely chopped</li>
                    <li>3 finely chopped tomatoes</li>
                    <li>Turmeric - 1 Tbsp</li>
                    <li>Kashmiri red chilli powder – 1 Tbsp</li>
                    <li>Green chilli – 3 pieces</li>
                    <li>Coriander powder – 1 Tbsp</li>
                    <li>Sahi kala jeera – 1 Tbsp</li>
                    <li>Garam masala – 1 Tbsp</li>
                    <li>Turmeric powder – 1 Tbsp</li>
                    <li>Hing (asafoetida)</li>
                    <li>Ginger garlic paste</li>
                    <li>Oil – 2 Tbsp</li>
                    <li>Salt – to taste</li>
                </ol>
                <h2 style={{color:"white"}}>Steps:</h2>
                <ol style={{color:"green"}}>
                    <li>Wash, rinse and chop the potatoes and cauliflower. Once chopped, keep the cauliflower florets and potatoes in the salted water for 10 to 15 mins.</li>
                    <li>Take 2 onions and tomatoes and chop them in small pieces. Create a smooth paste by blending the finely chopped tomatoes, onions, coriander leaves, pepper, ginger garlic paste, salt and green chilli in blender.</li>
                    <li>Take a pan and add 2 to 3 Tbsp of oil. Heat the oil and add 2 Tbsp of sahi kala jeera, hing (asafoetida) and fry it on a medium flame.</li>
                    <li>After half a minute, add the chopped onions, few pinches of salt and fry it until it turns light golden brown. Then add ginger garlic paste and fry it for another 2 mins.</li>
                    <li>After 2 mins, add the tomato onion paste prepared earlier, followed by turmeric, garam masala, cumin powder, Kashmiri red chilly powder, and salt (to taste).</li>
                    <li>Fry the above spices for around 6 to 7 mins until the oil starts leaving the mixture. Do not add any water as tomatoes itself contains lot of moisture. Make sure that the mixture does not stick to the pan.</li>
                    <li>After around 7 mins, add cauliflower florets and chopped potatoes, and cook it for around 5 mins. Once cauliflower and potatoes have been cooked to around 60%, add the green peas and mix it well.</li>
                    <li>Cover this with lid and allow it to cook for another 7 to 8 mins on low to medium flame. Make sure to stir the curry in between.</li>
                    <li>Once cooked, garnish it with coriander leaves, mint (if required), and lemon. Serve it with hot steam rice or chapatti.</li>
                </ol>
            </div>
        )
    }
    return (
        <Router>
        <Link to="spicyPotato"><button>Spicy Potato</button></Link>
        <Link to="AlooMatar"><button>Aloo matar</button></Link>
        <Route path="/SpicyPotato" component={spicyPotato} />
        <Route path="/AlooMatar" component={AlooMatar}/>
        </Router>
    )
}
export default Aloo