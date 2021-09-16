import React, {useState} from 'react'
import '../CSS/main.css'
import { allData } from '../Data/All'
import { LunchData } from '../Data/Lunch'
import { DinnerData } from '../Data/Dinner'
import { BreakfastData } from '../Data/Breakfast'
import logo from '../img/logo.png'

const Main = () => {

    const [defaultOption, setDefaultOption] = useState(true);
    const [option1, setOption1] = useState();
    const [option2, setOption2] = useState();
    const [option3, setOption3] = useState();

    const [showAll, setShowAll] = useState(true);
    const [showLunch, setShowLunch] = useState();
    const [showDinner, setShowDinner] = useState();
    const [showBreakfast, setShowBreakfast] = useState();
    
    const [text, setText] = useState('');
    const handleActive1 = () => {
        setOption1(true);
        setOption2(false);
        setOption3(false);
        setDefaultOption(false);
        setShowAll(false);
        setShowDinner(false);
        setShowLunch(false);

        setShowBreakfast(true);
    }
    const handleActive2 = () => {
        setOption2(true);
        setOption1(false);
        setOption3(false);
        setDefaultOption(false);
        setShowAll(false);
        setShowDinner(false);
        setShowBreakfast(false);

        setShowLunch(true);
    }
    const handleActive3 = () => {
        setOption3(true);
        setOption1(false);
        setOption2(false);
        setDefaultOption(false);
        setShowAll(false);
        setShowLunch(false);
        setShowBreakfast(false);

        setShowDinner(true);
    }
    const handleDefault = () => {
        setDefaultOption(true)
        setOption3(false);
        setOption1(false);
        setOption2(false);

        setShowAll(true);
        setShowLunch(false);
        setShowBreakfast(false);
        setShowDinner(false);
    }

    return (
        <div className='main'>
        <div className="navBar">
            <div className="navLogo">
                <img src={logo} alt="Logo" />
                <h1>Restaurant</h1>
                <img src={logo} id='secondLogo' alt="Logo" />
            </div>

            <div className="mainSearch">
                <input type="text" onChange={e => setText(e.target.value)}
                    placeholder='Search items here'/>
                <i className="fas fa-search"></i>
            </div>
        </div>
            <div className="mainSubDiv">
                <div className="mainTop">
                    <div className="mainNav">
                        <div className="mainNavOptions">
                            <p className={defaultOption ? 'active' : 'deActive'} onClick={handleDefault}>All</p>

                            <p className={option1 ? 'active' : 'deActive'} onClick={handleActive1}>Breakfast</p>

                            <p className={option2 ? 'active' : 'deActive'} onClick={handleActive2}>Lunch</p>

                            <p className={option3 ? 'active' : 'deActive'} onClick={handleActive3}>Dinner</p>
                        </div>
                         <div className="mainSearch" id='mainSearchd-noneDesktop'>
                            <input type="text" onChange={e => setText(e.target.value)}
                                placeholder='Search items here'/>
                            <i className="fas fa-search"></i>
                        </div>
                    </div>
                    
                </div>
            {
                showAll ? (
                    <div className="productsDiv">
                        {
                            allData.filter((item) => {
                            if(text === ""){
                                return item;
                            }
                            else if(item.name.toLowerCase()
                                    .includes(text.toLowerCase())){
                                return item;
                            }

                        }).map((item) => (
                            <div key={item.id} className='itemsDiv'>
                                <h4 className="itemNumber">{item.num}</h4>
                                <div className="itemCardDiv">
                                    <h3>{item.name}</h3>
                                    <p>{item.desc}</p>
                                    <small id='itemType'>{item.type}</small>
                                    <img src={item.imgSrc} alt="lunch img" />
                                        <div className="options">
                                            <div className="optionSubDiv">
                                                <div className="subOptions">
                                                    <i className="fas fa-book-open"></i>
                                                    <small>Recipe</small>
                                                </div>
                                                <div className="subOptions">
                                                    <i className="fas fa-utensils"></i>
                                                    <small>Eat</small>
                                                </div>
                                                <div className="subOptions">
                                                    <i class="fas fa-info-circle"></i>
                                                    <small>Info</small>
                                                </div> 
                                                <div className="subOptions">
                                                    <i class="fas fa-bookmark"></i>
                                                    <small>Save</small>
                                                </div> 
                                            </div>
                                    </div>
                                </div>
                            </div>
                        ))
                        }
                </div>
                ) : ('')
            }

            {

                showLunch ? (
                    <div className="productsDiv">
                        {
                            LunchData.filter((item) => {
                            if(text === ""){
                                return item;
                            }
                            else if(item.name.toLowerCase()
                                    .includes(text.toLowerCase())){
                                return item;
                            }

                        }).map((item) => (
                            <div key={item.id} className='itemsDiv'>
                                <h4 className="itemNumber">{item.num}</h4>
                                <div className="itemCardDiv">
                                    <h3>{item.name}</h3>
                                    <p>{item.desc}</p>
                                    <small id='itemType'>{item.type}</small>
                                    <img src={item.imgSrc} alt="lunch img" />
                                        <div className="options">
                                            <div className="optionSubDiv">
                                                <div className="subOptions">
                                                    <i className="fas fa-book-open"></i>
                                                    <small>Recipe</small>
                                                </div>
                                                <div className="subOptions">
                                                    <i className="fas fa-utensils"></i>
                                                    <small>Eat</small>
                                                </div>
                                                <div className="subOptions">
                                                    <i class="fas fa-info-circle"></i>
                                                    <small>Info</small>
                                                </div> 
                                                <div className="subOptions">
                                                    <i class="fas fa-bookmark"></i>
                                                    <small>Save</small>
                                                </div> 
                                            </div>
                                    </div>
                                </div>
                            </div>
                        ))
                        }
                </div>
                ) : ('')

            }

            {

                showBreakfast ? (
                    <div className="productsDiv">
                        {
                            BreakfastData.filter((item) => {
                            if(text === ""){
                                return item;
                            }
                            else if(item.name.toLowerCase()
                                    .includes(text.toLowerCase())){
                                return item;
                            }

                        }).map((item) => (
                            <div key={item.id} className='itemsDiv'>
                                <h4 className="itemNumber">{item.num}</h4>
                                <div className="itemCardDiv">
                                    <h3>{item.name}</h3>
                                    <p>{item.desc}</p>
                                    <small id='itemType'>{item.type}</small>
                                    <img src={item.imgSrc} alt="lunch img" />
                                        <div className="options">
                                            <div className="optionSubDiv">
                                                <div className="subOptions">
                                                    <i className="fas fa-book-open"></i>
                                                    <small>Recipe</small>
                                                </div>
                                                <div className="subOptions">
                                                    <i className="fas fa-utensils"></i>
                                                    <small>Eat</small>
                                                </div>
                                                <div className="subOptions">
                                                    <i class="fas fa-info-circle"></i>
                                                    <small>Info</small>
                                                </div> 
                                                <div className="subOptions">
                                                    <i class="fas fa-bookmark"></i>
                                                    <small>Save</small>
                                                </div> 
                                            </div>
                                    </div>
                                </div>
                            </div>
                        ))
                        }
                </div>
                ) : ('')

            }

            {

                showDinner ? (
                    <div className="productsDiv">
                        {
                            DinnerData.filter((item) => {
                            if(text === ""){
                                return item;
                            }
                            else if(item.name.toLowerCase()
                                    .includes(text.toLowerCase())){
                                return item;
                            }

                        }).map((item) => (
                            <div key={item.id} className='itemsDiv'>
                                <h4 className="itemNumber">{item.num}</h4>
                                <div className="itemCardDiv">
                                    <h3>{item.name}</h3>
                                    <p>{item.desc}</p>
                                    <small id='itemType'>{item.type}</small>
                                    <img src={item.imgSrc} alt="lunch img" />
                                        <div className="options">
                                            <div className="optionSubDiv">
                                                <div className="subOptions">
                                                    <i className="fas fa-book-open"></i>
                                                    <small>Recipe</small>
                                                </div>
                                                <div className="subOptions">
                                                    <i className="fas fa-utensils"></i>
                                                    <small>Eat</small>
                                                </div>
                                                <div className="subOptions">
                                                    <i class="fas fa-info-circle"></i>
                                                    <small>Info</small>
                                                </div> 
                                                <div className="subOptions">
                                                    <i class="fas fa-bookmark"></i>
                                                    <small>Save</small>
                                                </div> 
                                            </div>
                                    </div>
                                </div>
                            </div>
                        ))
                        }
                </div>
                ) : ('')

            }
                

               
            </div>
        </div>
    )
}

export default Main
