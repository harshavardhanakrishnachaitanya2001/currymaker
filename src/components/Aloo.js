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
    const DumAloo=()=>{
        return (
            <div>
                <h1 style={{color:"white"}}>Dum Aloo</h1>
                <h2 style={{color:"white"}}>Ingredients</h2>
                <ol style={{color:"yellow"}}>
                    <li>1 pound baby potatoes</li>
                    <li>oil for frying the potatoes</li>
                    <li>2 tablespoons oil for frying caraway seeds</li>
                    <li>1 tsp caraway seeds/shahjeera</li>
                    <li>¼ teaspoons asafoetida/hing</li>
                    <li>1 tablespoon kashmiri red chili powder or deghi mirch (if using a hotter variety of red chili powder then reduce the quantity as required)</li>
                    <li>4 to 5 tablespoons curd/yogurt, beaten</li>
                    <li>2 black cardamoms</li>
                    <li>1 inch cinnamon stick</li>
                    <li>2-3 whole cloves</li>
                    <li>3-4 black peppercorns</li>
                    <li>1 tablespoon fennel seeds powder/saunf powder</li>
                    <li>½ tablespoon ginger powder/saunth powder</li>
                    <li>1.5 cups water</li>
                    <li>salt to taste</li>
                    <li>caraway seeds for garnish</li>
                </ol>
                <h2 style={{color:"white"}}>Steps:</h2>
                <ol style={{color:"green"}}>
                    <li>Pre-cook the potatoes. Wash the baby potatoes well to remove all dirt, then wipe them dry. If the potatoes are small, leave them whole. If they're larger, cut them in halves or quarters. Par-boil the potatoes so that they are somewhat cooked, but not completely cooked. This should take 6 to 7 minutes. Drain the potatoes and wipe them dry. Prick them all over with a fork</li>
                    <li>Fry the potatoes. Heat your oil in a deep fryer or shallow skillet over medium-high heat. Add the potatoes and fry them until they're completely cooked. Remove them and set aside</li>
                    <li>Cook your spices. In a large skillet, heat 2 tablespoons of oil over medium-high heat and add the caraway seeds. Cook until they start to sizzle in the oil. Reduce the heat to medium and add the asafoetida, fennel powder, and chili powder, stirring well. Add 2 tablespoons of water and let the spices cook for a minute</li>
                    <li>Add the curd or yogurt. Stir or whisk the curd or yogurt into your mixture until no lumps remain. Let the mixture start to boil</li>
                    <li>Add your remaining spices and potatoes. Add the whole cardamom, cinnamon stick, cloves, black peppercorns, ginger powder, fennel powder, fried potatoes, water, and salt. Stir the mixture well</li>
                    <li>Cook the mixture. Cover the mixture with a lid and let it simmer, or gently bubble, for 10 to 15 minutes. The mixture should start to thicken up into a gravy.</li>
                    <li>Garnish and serve. Sprinkle extra caraway seeds on top as a garnish and serve along with rice, rotis, or naan</li>
                </ol>
            </div>
        )
    }
    const AlooChips=()=>{
        return (
            <div>
                <h1 style={{color:"white"}}>Aloo Chips</h1>
                <h2 style={{color:"white"}}>Ingredients</h2>
                <ol style={{color:"yellow"}}>
                    <li>4 russet potatoes</li>
                    <li>1 quart oil</li>
                    <li>3 tablespoons sea salt</li>
                    <li>Any additional seasonings, such as cayenne pepper, curry powder, etc</li>
                </ol>
                <h2 style={{color:"white"}}>Steps:</h2>
                <ol style={{color:"green"}}>
                    <li>Slice your potatoes to your desired thickness. You can cut your potatoes by hand if you want, but a far more efficient — and probably more effective — way of slicing 
                    them would be to use:
                    <ul>
                        <li>A food processor slicing attachment</li>
                        <li>A mandoline slicer (be very careful!)</li>    
                    </ul></li>
                    <li>Add 3 tablespoons of salt to a large bowl of water and soak your sliced potatoes in the salt water for half an hour. After they've soaked for 30 minutes, rinse them in a colander, then rinse them again and let dry.</li>
                    <li>Choose an oil you'd like to fry with. While vegetable, safflower, corn, or peanut oil are all perfectly viable options, many people are increasingly turning to olive oil because it contains no trans fats.[1] Since deep-frying is already the least healthy method of cooking potato chips, it might be a good idea to use the healthiest oil you can get.</li>
                    <li>Heat your oil in a deep fryer or a large frying pan until it reaches about 350° to 375° F (177° to 190° C). Optimally, use about a quart of oil. At the bare minimum, cover the bottom of your pan with an inch of oil.
                        <ul>
                            <li>Use a candy thermometer to check the temperature of your oil. If you need to eyeball things because you don't own a candy thermometer, stick the end of a wooden spoon into the oil and wait for bubbles to start forming at the end of the spoon</li>
                            <li>Another way to check the temperature of oil without a thermometer is by frying a small cube of bread. Bread will turn a golden hue at 320° F after 30 seconds; 355° F after 15 seconds; and 375° F after 10 seconds</li>
                        </ul>
                    </li>
                    <li>Cook your potatoes in small batches, removing when they start to turn golden brown. Cooking your potatoes all at once can drop the temperature of the oil too far too quickly.</li>
                    <li>Once removed, put the chips on a plate with a paper towel over it to absorb the oil. If desired, season immediately.</li>
                </ol>
            </div>
        )
    }
    return (
        <Router>
        <Link to="spicyPotato"><button>Spicy Potato</button></Link>
        <Link to="AlooMatar"><button>Aloo matar</button></Link>
        <Link to="DumAloo"><button>Dum Aloo</button></Link>
        <Link to="AlooChips"><button>Aloo Chips</button></Link>
        <Route path="/SpicyPotato" component={spicyPotato} />
        <Route path="/AlooMatar" component={AlooMatar}/>
        <Route path="/DumAloo" component={DumAloo}/>
        <Route path="/AlooChips" component={AlooChips}/>
        </Router>
    )
}
export default Aloo