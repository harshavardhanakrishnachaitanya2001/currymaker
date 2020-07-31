
import React from 'react'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
function Beans(){
    const RiceAndBeanBurrito=()=>{
        return (
            <div>
                <h1 style={{color:"white"}}>Rice and Bean Burrito</h1>
                <h2 style={{color:"White"}}>Ingredients</h2>
                <ol style={{color:"yellow"}}>
                    <li>2 cups cooked rice</li>
                    <li>2 limes (juiced)</li>
                    <li>2 tablespoons fresh cilantro (chopped)</li>
                    <li>1/2 onion (diced)</li>
                    <li>3 to 4 cloves garlic (minced)</li>
                    <li>2 tablespoons vegetable oil (or olive oil)</li>
                    <li>1 (15-ounce) can black beans (or pinto beans; drained)</li>
                    <li>1 tablespoon chili powder</li>
                    <li>1/2 teaspoon cumin</li>
                    <li>1 tablespoon hot sauce (or to taste)</li>
                    <li>Optional: pinch salt (to taste)</li>
                    <li>2   (10-inch) large tortillas</li>
                </ol>
                <h2 style={{color:"white"}}>Steps:</h2>
                <ol style={{color:"green"}}>
                    <li>In a large bowl, toss together the fresh chopped cilantro with the leftover cooked rice and drizzle with a bit of fresh lime juice. Heat in the microwave or on the stove just until hot, and give it a quick stir.</li>
                    <li>In a separate large skillet, sauté the onion and garlic in vegetable oil or olive oil for 2 to 3 minutes, or until the onion is soft.</li>
                    <li>Reduce the heat to medium-low and add the black beans or pinto beans and season with the chili powder, cumin, and hot sauce, stirring to combine. You can add a bit of salt if you'd like, but you shouldn't need too much with all the other seasonings. Allow the beans to cook until heated through, about 5 minutes.</li>
                    <li>Spoon the cilantro-lime rice and the black bean mix onto lightly warmed flour tortillas, and add any additional toppings you want.</li>
                    <li>Fold the short ends in, then fold one long side over the filling and gently push to ensure the fold is tight before rolling up the remainder of the burrito.</li>
                    <li>Cut in half, and serve.</li>
                </ol>
            </div>
        )
    }
    const BlackBeansAndRice=()=>{
        return (
            <div>
                <h1 style={{color:"white"}}>Black Beans and Rice</h1>
                <h2 style={{color:"white"}}>Ingredients</h2>
                <ol style={{color:"yellow"}}>
                    <li>1 tablespoon olive oil</li>
                    <li>3/4 cups onion, chopped fine</li>
                    <li>1/2 cup green pepper, chopped fine</li>
                    <li>1 cup tomatoes, diced</li>
                    <li>1 15 ounce can black beans, drained, with liquid reserved</li>
                    <li>1/2 teaspoon thyme</li>
                    <li>1 teaspoon garlic salt</li>
                    <li>3 tablespoons cider vinegar</li>
                    <li>1/2 teaspoon hot pepper sauce</li>
                    <li>2 cups cooked or leftover white or brown rice</li>
                    <li>lime wedge (optional)</li>
                </ol>
                <h2 style={{color:"white"}}>Steps:</h2>
                <ol style={{color:"green"}}>
                    <li>In a large skillet, heat olive oil</li>
                    <li>Cook onion and green pepper until crisp-tender.</li>
                    <li>Stir in tomatoes, beans, thyme, and garlic salt. Cook 3 minutes.</li>
                    <li>Add vinegar, pepper sauce, and reserved juices, and continue to cook 5 minutes.</li>
                    <li>Serve black beans over rice. Garnish with a lime wedge (optional).</li>
                </ol>
            </div>
        )
    }
    const RiceCasserolewithBeans=()=>{
        return (
            <div>
                <h1 style={{color:"white"}}>Rice Casserole with Beans</h1>
                <h2 style={{color:"white"}}>Ingredients</h2>
                <ol style={{color:"yellow"}}>
                    <li>1 28​-ounce can vegetarian baked beans</li>
                    <li>1 1/2 cups cooked rice</li>
                    <li>1/2 cup chopped red onion</li>
                    <li>1/2 cup shredded carrot</li>
                    <li>1/2 cup thinly sliced celery</li>
                    <li>1/4 teaspoon ground cinnamon</li>
                    <li>1/4 teaspoon garlic powder</li>
                    <li>1/8 teaspoon ground ginger</li>
                </ol>
                <h2 style={{color:"white"}}>Steps:</h2>
                <ol style={{color:"green"}}>
                    <li>Combine all ingredients including vegetarian baked beans in a lightly greased 2-quart casserole.</li>
                    <li>Bake at 350 for 35 to 40 minutes or until bubbly.</li>
                </ol>
            </div>

        )
    }
    const BlackBeanAndRiceSalad=()=>{
        return (
            <div>
                <h1 style={{color:"white"}}>Black Bean and Rice Salad</h1>
                <h2 style={{color:"white"}}>Ingredients</h2>
                <ol style={{color:"yellow"}}>
                    <li>1 can/15 ounce black beans (drained and rinsed)</li>
                    <li>2 cups long-grain rice (cooked and chilled)</li>
                    <li>1 green bell pepper (finely chopped)</li>
                    <li>1/2 red bell pepper (finely chopped)</li>
                    <li>1 tomato (seeded and chopped)</li>
                    <li>2 to 3 green onions (finely chopped)</li>
                    <li>3 tablespoons extra-virgin olive oil</li>
                    <li>2 tablespoons lime juice</li>
                    <li>1/2 teaspoon Dijon mustard</li>
                    <li>1/2 teaspoon sugar</li>
                    <li>1/4 teaspoon cumin</li>
                    <li>1/4 teaspoon black pepper</li>
                    <li>Garnish: fresh chopped parsley or cilantro</li>
                </ol>
                <h2 style={{color:"white"}}>Steps:</h2>
                <ol style={{color:"green"}}>
                    <li>In a serving bowl, combine the black beans with the cold cooked rice, green and red bell peppers, chopped tomato, and chopped green onion.</li>
                    <li>In a small bowl, whisk together the olive oil, lime juice, Dijon mustard, sugar, cumin, and pepper.</li>
                    <li>Add the dressing mixture to beans and rice and stir gently to blend ingredients.</li>
                    <li>Garnish with parsley or fresh chopped cilantro. Cover and refrigerate until thoroughly chilled.</li>
                    <li>Toss and serve.</li>
                </ol>
            </div>
        )
    }
    return (
        <Router>
            <Link to="RiceAndBeanBurrito"><button>Rice and Bean Rice And Bean Burrito</button></Link>
            <Link to="BlackBeansAndRice"><button>Black Beans and Rice</button></Link>
            <Link to="RiceCasserolewithBeans"><button>Rice Casserole with Beans</button></Link>
            <Link to="BlackBeanAndRiceSalad"><button>Black Bean and Rice Salad</button></Link>
            <Route path="/RiceAndBeanBurrito" component={RiceAndBeanBurrito}/>
            <Route path="/BlackBeansAndRice" component={BlackBeansAndRice}/>
            <Route path="/RiceCasserolewithBeans" component={RiceCasserolewithBeans}/>
            <Route path="/BlackBeanAndRiceSalad" component={BlackBeanAndRiceSalad}/>
        </Router>

    )
}
export default Beans