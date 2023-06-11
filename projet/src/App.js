import React, { useState } from 'react';
import logo from './logo_site.png';
import manette1 from './ILLU_MANETTE_1.png';
import manette2 from './ILLU_MANETTE_2.png';
import footer from './LOGIN_footer.png';
import world from './low-poly_world.png';
import fleche from './fleche.png';
import './App.css';
import 'uikit/dist/css/uikit.css';


function App() {

  const [activeMenu, setActiveMenu] = useState("menu1");

  const handleClick = (menuId) => {
      setActiveMenu(menuId);
  };

  const [activeMenu2, setActiveMenu2] = useState("menubtn1");

  const handleClick2 = (menuId2) => {
      setActiveMenu2(menuId2);
  };

  return (
    <div id="body" className="App">
      <header className="pheader uk-child-width-1-1@s ">
        <nav className="uk-navbar-container" uk-navbar=''>
          <div className="uk-navbar-left">
            <a className="uk-navbar-item uk-logo" style={{paddingLeft: "30px"}} href="#">
              <img src={logo} width={50} />
            </a>
            <ul className="uk-navbar-nav">
              <li><a className={`menuBtn ${activeMenu === 'menu1' ? 'active' : ''}`}onClick={() => handleClick('menu1')} href="#">Accueil</a></li>
              <li><a className={`menuBtn ${activeMenu === 'menu2' ? 'active' : ''}`}onClick={() => handleClick('menu2')} href="#">Téléchargement</a></li>
              <li><a className={`menuBtn ${activeMenu === 'menu3' ? 'active' : ''}`}onClick={() => handleClick('menu3')} href="#">App Mobile</a></li>
              <li><a className={`menuBtn ${activeMenu === 'menu4' ? 'active' : ''}`}onClick={() => handleClick('menu4')} href="#">FAQ</a></li>
            </ul>
          </div>
        </nav>
      </header>
      <div className="uk-height-viewport fullscreen ">

        {/* Block 1 */}
        <div className="uk-flex">
          <div className="uk-width-1-2 uk-flex uk-flex-middle uk-padding-large uk-height-custom" style={{height : "600px"}}>
            <div>
              <div className="uk-flex uk-flex-middle">
                <div>
                  <h1>Z'heros</h1>
                  <p id="text1">
                  Nous sommes les z’héros de vos enfants, ou plutôt leur héros.<br></br>
                  Nous avons créés Z’HEROS, une application mobile de soutien scolaire<br></br>
                  pour les collégiens. Notre objectif ? Apprendre en s’amusant !<br></br>
                  La génération Alpha a évolué avec le monde digital, il est donc logique de<br></br>
                  proposer une solution d’apprentissage qui est adapté à leur habitude de<br></br>
                  vie.
                  </p>
                </div>
              </div>
              <div className="uk-flex  uk-flex-middle">
                <div id="gaucheforme1" className="uk-width-1-3 uk-flex uk-flex-middle uk-flex-center">
                    <div style={{fontSize : "25px"}}>
                      Téléchargement
                    </div>
                </div>
                <div className="uk-width-1-3" style={{width : "10%"}}>

                </div>
                <div id="gaucheforme2" className="uk-width-1-3 uk-flex uk-flex-middle uk-flex-center">
                    <div style={{fontSize : "25px"}}>
                      App Mobile
                    </div>
                </div>
              </div>
            </div>  
          </div>
          <div className="uk-width-1-2 uk-position-relative">
            <div className='uk-position-relative'>
              <div id="base1" className='uk-position-top-left'>
                <div className='ligne1' style={{marginTop: "80px"}}>
                </div>
                <div className='ligne1'>
                </div>
                <div className='ligne1'>
                </div>
                <div className='ligne1'>
                </div>
              </div>
              
              <div id="base2" className='uk-position-top-left'>
                <div className='cercle' style={{marginTop: "20px"}}>
                </div>
                <div className='ligne2' style={{marginTop: "10px", marginLeft: "20px"}}>
                </div>
                <div className='ligne3' style={{height: "95px"}}>
                </div>
                <div className='ligne3'>
                </div>
              </div>
              <div className='uk-position-top-left ligne2' style={{top: "90px", left: "460px"}}></div>
            </div>   
          </div>
        </div>

        {/* Block 2 */}
        <div className="uk-flex" style={{marginTop: "100px", padding: "50px"}}>
          <div className="uk-width-1-3 uk-flex uk-flex-middle uk-flex-center">
            <div className='carte'>
              <div style={{padding: "35px"}}>
                <div className='carteimg uk-width-1-1 uk-flex uk-flex-middle uk-flex-center'>
                  <img src={manette1} width={300} />
                </div>
                <h2>
                  Ludique 
                </h2>
                <p >
                  L’apprentissage ludique est un moyen<br></br>
                  amusant et efficace d’acquérir de nouv…
                </p>
                <div className='cartebtn uk-width-1-1 uk-flex uk-flex-middle uk-flex-center'>
                  En savoir plus…
                  <div className="uk-position-relative">
                    <div className="uk-position-absolute uk-position-center" style={{marginLeft: "30px"}}>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="uk-width-1-3 uk-flex uk-flex-middle uk-flex-center">
            <div className='carte'>
              <div style={{padding: "35px"}}>
                <div className='carteimg uk-width-1-1 uk-flex uk-flex-middle uk-flex-center'>
                  <img src={manette2} width={300} />
                </div>
                <h2>
                  Éducatif
                </h2>
                <p >
                  Nous aimons aider les enfants en leurs<br></br>
                  permettant d’acquérir de nouvelles com…
                </p>
                <div className='cartebtn uk-width-1-1 uk-flex uk-flex-middle uk-flex-center'>
                  En savoir plus…
                  <div className="uk-position-relative">
                    <div className="uk-position-absolute uk-position-center" style={{marginLeft: "30px"}}>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="uk-width-1-3 uk-flex uk-flex-middle uk-flex-center">
            <div className='carte'>
              <div style={{padding: "35px"}}>
                <div className='carteimg uk-width-1-1 uk-flex uk-flex-middle uk-flex-center'>
                  <img src={manette1} width={300} />
                </div>
                <h2>
                  Interactif
                </h2>
                <p >
                  C’est une expérience ludique qui permet<br></br>
                  aux joueurs d’interagir activement avec…
                </p>
                <div className='cartebtn uk-width-1-1 uk-flex uk-flex-middle uk-flex-center'>
                  En savoir plus…
                  <div className="uk-position-relative">
                    <div className="uk-position-absolute uk-position-center" style={{marginLeft: "50px"}}>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Block 3 */}
        <div className="uk-flex uk-flex-middle uk-flex-center">
            <div id='titre2'>Mondes</div>
        </div>

        {/* Block 4 */}
        <div className="uk-flex uk-flex-middle uk-flex-center">
            <div id='menubtn' className="uk-flex">
              <div className="uk-width-1-3 uk-flex uk-flex-middle uk-flex-center">
                <div id="menubtntext" style={{cursor: "pointer"}} className={`uk-flex uk-flex-middle uk-flex-center menuBtn2 ${activeMenu2 === 'menubtn1' ? 'active2' : ''}`}onClick={() => handleClick2('menubtn1')}>Ruben</div>
              </div>
              <div className="uk-width-1-3 uk-flex uk-flex-middle uk-flex-center">
                <div id="menubtntext" style={{cursor: "pointer"}} className={`uk-flex uk-flex-middle uk-flex-center menuBtn2 ${activeMenu2 === 'menubtn2' ? 'active2' : ''}`}onClick={() => handleClick2('menubtn2')}>Aether</div>
              </div>
              <div className="uk-width-1-3 uk-flex uk-flex-middle uk-flex-center">
                <div id="menubtntext" style={{cursor: "pointer"}} className={`uk-flex uk-flex-middle uk-flex-center menuBtn2 ${activeMenu2 === 'menubtn3' ? 'active2' : ''}`}onClick={() => handleClick2('menubtn3')}>Elder</div>
              </div>
            </div>
        </div>
        {/* Block 5 */}
        <div className="uk-flex uk-flex-middle uk-flex-center">
          <div id='lastblock' className="uk-flex">
            <div className="uk-width-1-2 uk-flex uk-flex-middle uk-flex-center">
              <div id='imagecarre'>
                <img id='imagecarre' className='uk-object-cover' src={world} />
              </div>
            </div>
            <div className="uk-width-1-2 uk-flex uk-flex-middle ">
              <div className="blocktext" style={{display: `${activeMenu2 === 'menubtn1' ? 'block ' : 'none'}`}}> 
                <div id='titre3'>Ruben</div>
                <p id="text1">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod<br></br>
                  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim<br></br>
                  veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea<br></br>
                  commodo consequat. Duis aute irure dolor in reprehenderit in voluptate<br></br>
                  velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat<br></br>
                  cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est<br></br>
                  laborum
                </p>
              </div>
              <div style={{display: `${activeMenu2 === 'menubtn2' ? 'block ' : 'none'}`}}> 
                <div className="blocktext" id='titre3'>Aether</div>
                <p id="text1">
                Dans un lointain désert, un héros courageux était connu pour sa bravoure<br></br>
                et son esprit aventureux. Un jour, il reçut une mystérieuse lettre provenant<br></br>
                du village voisin. La lettre disait qu’un terrible boss se cachait dans les<br></br>
                profondeurs du désert, un scorpion géant redoutable nommé Veldra.<br></br>
                <br></br>
                Combattra t-il le puissant scopion géant avant qu’il ne soit trop tard ?
                </p>
              </div>
              <div style={{display: `${activeMenu2 === 'menubtn3' ? 'block ' : 'none'}`}}> 
                <div className="blocktext" id='titre3'>Elder</div>
                <p id="text1">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod<br></br>
                  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim<br></br>
                  veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea<br></br>
                  commodo consequat. Duis aute irure dolor in reprehenderit in voluptate<br></br>
                  velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat<br></br>
                  cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est<br></br>
                  laborum
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <img src={footer}  className="fullscreen" />
      </div>
    </div>
  );
}

export default App;
