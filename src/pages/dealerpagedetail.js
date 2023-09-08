
import './dealerList.css';
import dealerimg from '../pages/images/dealer-img.png';
import dealerlogo from '../pages/images/dealer-icon.jpg';
import profile from '../pages/images/profile.png';
import profile1 from '../pages/images/profile1.png';
import profile2 from '../pages/images/profile3.png';
import Header from '../components/header';
import Footer from '../components/footer';

function Dealerpagedetail(){
    return(
      <div>
         <Header />
        <div className="width-percent">
          <div className='dealer-cls'>
            <div className='dealer-1'>
                <h1>Shiva E-Energy</h1>
                <p>
                  You can now view new-react in the browser.
                </p>
            </div>
            <img src={dealerimg} alt='dealer' className='dealer-img'></img>
            <div className='dealer-intro section-margin'>
              <h2>INTRODUCE</h2>
              <hr/>
              <h5>Friendliest e-vehicle store on the planet.</h5>
              <p>
              Where sales and service are made EASY! We are proud to be family owned and have served drivers from all over the state since 1989. In fact, it’s our straightforward, no stress shopping process that continues to bring our customers back for their second, third and fourth vehicles.Here you will find an incredible selection of pre-owned vehicles from a variety of brands including Lexus, Acura, Audi, Toyota, Honda, Ford, Mercedes-Benz and many more. At Carify Auto we specialize in one owner; pre-owned vehicles. We search the country looking for the finest vehicles to add to our inventory. At Carify Auto, only the very best will do for our customers.
              </p>
            </div>

            <div className='dealer-info section-margin'>
              <h2>DEALER INFO</h2>
              <hr/>
              
              <div className='dealer-rating'>
                <img src={dealerlogo} alt='dear-logo'></img>
                <h3>Shiva E-Energy</h3>
                 <div>
                 <i class="bi bi-star-fill"></i>
                 <i class="bi bi-star-fill"></i>
                 <i class="bi bi-star-fill"></i>
                 <i class="bi bi-star-half"></i>
                 <i class="bi bi-star"></i>
                 <p>&#40; <span>24</span> Rating &#41;</p>
                 </div>
              </div>
              <div className='dealer-con'>
                 <div>
                  <i class="bi bi-geo"></i> 
                  <p>No -82, Banaswadi Main Road,Subramanyapalya, <br/>  Banaswadi, Near Ayapppa Temple,Behind <br/>  Indian Oil Fuel Station, Bangalore, <br/>  Karnataka 560043</p>
                 </div>
                 <div>
                 <i class="bi bi-envelope"></i>
                  <p>shiva@e-vehicle.com</p>
                 </div>
                 <div>
                 <i class="bi bi-telephone-forward"></i> 
                  <p>+91 908 765 4321</p>
                 </div>
              </div>
            </div>
            <div className='dealer-reviews section-margin'>
              <h2>REVIEWS</h2>
              <hr/>
              <div className='dealer-review-rating'>
                <div className='dealer-rating'>
                  <img src={profile} alt='dear-logo'></img>
                  <div><h3>Mithlesh Kumar Gurjar</h3> 
                     <p>| 22 April 2023 </p>
                  </div>
                  
                  <div>
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-half"></i>
                  <i class="bi bi-star"></i>
                  </div>
                </div>
                <p className='dealer-comment'>This car has been a blessing to me and my family so far. I will be returning to buy my second car. Go see him at Carify Center</p>
              </div>

              <div className='dealer-review-rating'>
                <div className='dealer-rating'>
                  <img src={profile1} alt='dear-logo'></img>
                  <div><h3>Rajkumari Pagare</h3> 
                     <p>| 21 April 2023 </p>
                  </div>
                  
                  <div>
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-half"></i>
                  </div>
                </div>
                <p className='dealer-comment'>This car has been a blessing to me and my family so far. I will be returning to buy my second car. Go see him at Carify Center</p>
              </div>


              <div className='dealer-review-rating'>
                <div className='dealer-rating'>
                  <img src={profile2} alt='dear-logo'></img>
                  <div><h3>Jatin Soni</h3> 
                     <p>| 20 April 2023 </p>
                  </div>
                  
                  <div>
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                  </div>
                </div>
                <p className='dealer-comment'>This car has been a blessing to me and my family so far. I will be returning to buy my second car. Go see him at Carify Center</p>
              </div>

               <div className='dealer-form'>
                    <h3>SUBMIT YOUR REVIEW</h3>
                   <form>
                    <input type='number'  min="1" max="5" placeholder='Rating' required/>
                    <textarea  placeholder='Type your review here' required> </textarea>
                    <button type='submit'>Submit</button>
                   </form>
               </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
};

export default Dealerpagedetail;
