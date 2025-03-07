import { ShoppingCart} from 'lucide-react';
import { useForm, ValidationError } from '@formspree/react';
import Photo1 from './image/icon.png';
import Photo2 from './image/sm.jpg';
import Photo3 from './image/ms.jpg';
import Photo4 from './image/a.png';
import Photo5 from './image/b.png';
import Photo6 from './image/c.png';
import Photo7 from './image/d.png';
import Photo8 from './image/e.png';
import Photo9 from './image/f.png';
import Photo10 from './image/a1.png';
import Photo11 from './image/b2.png';
import Photo13 from './image/ss.png';
import { RiStarSFill } from "react-icons/ri";
import { MdOutlineStarHalf } from "react-icons/md";
import { FaSquareWhatsapp } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { useState } from 'react';
import { NavLink } from 'react-router-dom';




const RestaurantLanding = () => {

  const menuData = [
    {
        id: 1,
        name: "Tasty And Healty",
        price: 15.99,
        originalPrice: 20.99,
        image: Photo4,
    },
    {
        id: 2,
        name: "Tasty And Healty",
        price: 15.99,
        originalPrice: 20.99,
        image: Photo5,
    },
    {
        id: 3,
        name: "Tasty And Healty",
        price: 15.99,
        originalPrice: 20.99,
        image: Photo6,
    },
    {
      id: 1,
      name: "Tasty And Healty",
      price: 15.99,
      originalPrice: 20.99,
      image: Photo7,
  },
  {
      id: 2,
      name: "Tasty And Healty",
      price: 15.99,
      originalPrice: 20.99,
      image: Photo8,
  },
  {
      id: 3,
      name: "Tasty And Healty",
      price: 15.99,
      originalPrice: 20.99,
      image: Photo9,
  }
];

const [cart, setCart] = useState([]);
const [isCartOpen, setIsCartOpen] = useState(false);

const handleAddToCart = (item) => {
    setCart(prevCart => {
        const existingItem = prevCart.find(cartItem => cartItem.id === item.id);
        if (existingItem) {
            return prevCart.map(cartItem =>
                cartItem.id === item.id
                    ? { ...cartItem, quantity: cartItem.quantity + 1 }
                    : cartItem
            );
        }
        return [...prevCart, { ...item, quantity: 1 }];
    });
};

const handleRemoveFromCart = (itemId) => {
    setCart(prevCart => prevCart.filter(item => item.id !== itemId));
};

const handleUpdateQuantity = (itemId, newQuantity) => {
    if (newQuantity < 1) {
        handleRemoveFromCart(itemId);
        return;
    }
    setCart(prevCart =>
        prevCart.map(item =>
            item.id === itemId
                ? { ...item, quantity: newQuantity }
                : item
        )
    );
};

const handleCheckout = () => {
window.location.href="https://razorpay.me/@maheboobshabuddinshaikh ";
    // Add your checkout logic here
};


// CartItem Component
const CartItem = ({ item, onRemove, onUpdateQuantity }) => (
    <div className="flex items-center justify-between p-4 border-b border-gray-700">
        <img src={item.image} alt={item.name} className="w-16 h-16 object-cover" />
        <div className="flex-1 mx-4">
            <h3 className="text-white">{item.name}</h3>
            <p className="text-yellow-500">${item.price}</p>
        </div>
        <div className="flex items-center gap-2">
            <button 
                onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                className="p-1 text-white hover:text-yellow-500"
            >
                -
            </button>
            <span className="text-white">{item.quantity}</span>
            <button 
                onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                className="p-1 text-white hover:text-yellow-500"
            >
                +
            </button>
            <button 
                onClick={() => onRemove(item.id)}
                className="ml-2 text-red-500 hover:text-red-600"
            >
                ×
            </button>
        </div>
    </div>
);

// Cart Component
const Cart = ({ cart, onClose, onRemoveItem, onUpdateQuantity, onCheckout }) => {
    const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
      return(
    
        <div className="fixed right-0 top-0 h-full w-80 md:w-96 bg-black border-l border-yellow-500 p-4 shadow-lg">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl text-white font-bold">Your Cart</h2>
                <button onClick={onClose} className="text-white hover:text-yellow-500">
                    ×
                </button>
            </div>
            <div className="h-[calc(100vh-200px)] overflow-y-auto">
                {cart.map(item => (
                    <CartItem 
                        key={item.id} 
                        item={item} 
                        onRemove={onRemoveItem}
                        onUpdateQuantity={onUpdateQuantity}
                    />
                ))}
            </div>
            <div className="absolute bottom-0 left-0 w-full p-4 bg-black border-t border-yellow-500">
                <div className="flex justify-between text-white mb-4">
                    <span className="font-bold">Total:</span>
                    <span className="text-yellow-500">${total.toFixed(2)}</span>
                </div>
                <button
                    onClick={onCheckout}
                    className="w-full bg-yellow-500 text-black py-2 font-bold hover:bg-yellow-600"
                >
                    Checkout
                </button>
            </div>
        </div>
      )
}
const [isOpen, setIsOpen] = useState(false);
  const [state, handleSubmit] = useForm("xrbbykja");
  if (state.succeeded) {
      return <p>Thanks for joining!</p>;
  }

  





  return (
    <div className="min-h-screen bg-black text-white">
    {/* Navbar */}
    <nav className="bg-black text-white shadow-lg py-2 border-b border-yellow-500">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
          <img src={Photo1} alt="Logo" className="rounded-full w-16" />
             </div>
             <div className="flex gap-2 px-2">
        <button className="hover:text-yellow-500"><NavLink to={"/Login"}>Login</NavLink></button>
        <input
              type="text"
              placeholder="Search..."
              className="w-full px-4 py-0 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
                              <button
                        onClick={() => setIsCartOpen(true)}
                        className="text-white hover:text-yellow-500 relative"
                    >
                         <ShoppingCart className=" size-6 cursor-pointer hover:text-yellow-500" />
                        {cart.length > 0 && (
                            <span className="absolute -top-2 -right-2 bg-yellow-500 text-black w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold">
                                {cart.reduce((sum, item) => sum + item.quantity, 0)}
                            </span>
                        )}
                    </button>

        </div>
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
              <ul className="flex flex-wrap gap-6 items-center">
                    <li className="hover:text-yellow-500 cursor-pointer">
                    <NavLink to={"/"} className="border-b-2 border-yellow-600  scale-105" >Home</NavLink>
                    </li>
                    <li className=" hover:text-yellow-500 cursor-pointer">
                     <NavLink to={"/About"}>About</NavLink>
                    </li>
                    <li className="hover:text-yellow-500">
                    <NavLink to={"/Menu"}  >Menu</NavLink>
                    </li>
                    <li className="hover:text-yellow-500">
                    <NavLink to={"/Products"}  >Products</NavLink>
                    </li>
                    <li className="hover:text-yellow-500">
                    <NavLink to={"/Rerview"}>Review</NavLink> 
                    </li> 
                    <li className="hover:text-yellow-500">
                     <NavLink to={"/Contact"}>Contact</NavLink>
                    </li>
                  
                  
                  </ul> 
            
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button className="text-white  hover:text-blue-600" 
            onClick={()=>setIsOpen(!isOpen)}
            >
              
            {isOpen ? <span className='text-2xl'>&times;</span> : <span className='text-xl'>&#9776;</span>}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
              {isOpen && (
                   <div className="md:hidden flex flex-col">
                     <ul className="flex flex-col gap-6 items-start">
                     <li className="hover:text-yellow-500 cursor-pointer">
                    <NavLink to={"/"} className="border-b-2 border-yellow-600  scale-105" >Home</NavLink>
                    </li>
                    <li className=" hover:text-yellow-500 cursor-pointer">
                     <NavLink to={"/About"}>About</NavLink>
                    </li>
                    <li className="hover:text-yellow-500">
                    <NavLink to={"/Menu"}  >Menu</NavLink>
                    </li>
                    <li className="hover:text-yellow-500">
                    <NavLink to={"/Products"}  >Products</NavLink>
                    </li>
                    <li className="hover:text-yellow-500">
                    <NavLink to={"/Rerview"}>Review</NavLink> 
                    </li> 
                    <li className="hover:text-yellow-500">
                     <NavLink to={"/Contact"}>Contact</NavLink>
                    </li>
                  </ul>
                     
                   </div>
                 )}
               </div>
             </nav> 
       
      {/* Hero Section */}
      <section className="relative py-32 px-12" style={{
        backgroundImage: `url(${Photo3})`, 
        backgroundSize: 'cover',
        backgroundPosition: ' top center',
        transition: "background-image 1s ease-in-out",
      }}>
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-red-600">FRESH </span>
            <span className="text-red-600">FOOD IN THE</span>
            <br />
            <span className="text-green-400">MORNING</span>
          </h1>
          <p className="text-blue-500 mb-8">
            Lorem Ipsum, Dolor Sit Amet Consectetur Adipisicing Elit. Placeat
            Labore, Sint Cupiditate Distinctio Tempora Reiciendis.
          </p>
          <button className="bg-yellow-500 text-black px-8 py-3 font-semibold hover:bg-yellow-600 transition-colors">
            Get Yours Now
          </button>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-12 bg-black" id="about">
        <h2 className="text-4xl font-bold text-center mb-12">
          <span className="text-yellow-500">ABOUT </span>
          <span className="text-white">US</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <img src={Photo2} alt="Special Food" className="w-full rounded-lg" />
          </div>
          <div>
            <h3 className="text-3xl font-bold mb-6">What Makes Our Food Special?</h3>
            <p className="text-gray-300 mb-6">
              Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Voluptatibus
              Qui Ea Ullam, Enim Tempora Ipsum Fuga Alias Quae Ratione A Officiis
              Id Temporibus Autem? Quod Nemo Facilisis Cupiditate. Ex, Vel?
            </p>
            <button className="bg-yellow-500 text-black px-8 py-3 font-semibold hover:bg-yellow-600 transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section className="py-16 px-12" id="menu">
        <h2 className="text-4xl font-bold text-center mb-12">
          <span className="text-white">OUR </span>
          <span className="text-yellow-500">MENU</span>
        </h2>
    
        <div className="grid grid-cols-1  md:grid-cols-3 gap-8">
    
          {menuData.map((index) => (
            <div key={index} className="border border-yellow-500 p-3">
              <img src={index.image} alt={index.name} className="w-32 h-24 m-auto  mb-2" />
              <h3 className="text-xl mb-4 text-center">{index.name}</h3>
              <div className="mb-2">
                <span className="text-2xl text-yellow-500 float-start">${index.price}</span>
                <span className="text-gray-500 line-through float-end">${index.originalPrice}</span>
              </div>
              <button  onClick={() => handleAddToCart(index)}   className="w-full bg-yellow-500 text-black py-2 hover:bg-yellow-600 transition-colors">
                Add To Cart
              </button>
            </div>
          ))} 
        </div>
        {isCartOpen && (
                <Cart 
                    cart={cart}
                    onClose={() => setIsCartOpen(false)}
                    onRemoveItem={handleRemoveFromCart}
                    onUpdateQuantity={handleUpdateQuantity}
                    onCheckout={handleCheckout}
                />
            )}
            
      </section>

      {/* Products Section */}
     
      <section className="py-16 px-12" id="products">
        <h2 className="text-4xl font-bold text-center mb-12">
          <span className="text-white">FUTURE </span>
          <span className="text-yellow-500">PRODUCTS</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
            <div className="border border-yellow-500 p-4">
            
              <img src={Photo10} alt="Product" className="w-52 m-auto" />
              <h3 className="text-2xl mb-4 text-center">Fresh coffee</h3>
              <div className="flex justify-center text-2xl text-yellow-500  gap-4 mb-3"> 
      <RiStarSFill className='float-start' /><RiStarSFill className='float-start' /><RiStarSFill className='float-start'/><RiStarSFill className='float-start'/><MdOutlineStarHalf /></div>
              <div className="mb-2">
                <span className="text-2xl text-yellow-500 float-start">$15.99</span>
                <span className="text-gray-500 text-2xl line-through float-end ">$20.99</span>
              </div>
       </div>
       <div className="border border-yellow-500 p-4">
           
              <img src={Photo11} alt="Product" className="w-52 m-auto" />
              <h3 className="text-2xl mb-4 text-center">Fresh coffee</h3>
              <div className="flex justify-center text-2xl text-yellow-500  gap-4 mb-3"> 
      <RiStarSFill className='float-start' /><RiStarSFill className='float-start' /><RiStarSFill className='float-start'/><RiStarSFill className='float-start'/><MdOutlineStarHalf />
      </div>
              <div className="mb-2">
                <span className="text-2xl text-yellow-500 float-start">$15.99</span>
                <span className="text-gray-500 text-2xl line-through float-end ">$20.99</span>
              </div>
             </div>
       <div className="border border-yellow-500 p-4">
          
              <img src={Photo10} alt="Product" className="w-52 m-auto" />
              <h3 className="text-2xl mb-4 text-center">Fresh coffee</h3>
              <div className="flex justify-center text-2xl text-yellow-500  gap-4 mb-3"> 
      <RiStarSFill className='float-start' /><RiStarSFill className='float-start' /><RiStarSFill className='float-start'/><RiStarSFill className='float-start'/><MdOutlineStarHalf /></div>
              <div className="mb-2">
                <span className="text-2xl text-yellow-500 float-start">$15.99</span>
                <span className="text-gray-500 text-2xl line-through float-end ">$20.99</span>
              </div>
       </div>
    
        </div>
      </section>

      {/* Review Section */}
      <section className="py-16 px-12" id="review">
        <h2 className="text-4xl font-bold text-center mb-12">
          <span className="text-white">CUSTOMER'S </span>
          <span className="text-yellow-500">REVIEW</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
            <div className="border border-yellow-500 p-6 text-center">
              <div className="text-yellow-500 text-6xl mb-4">"</div>
              <p className="text-gray-300 mb-6">
                Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Animi Nulla Sit Libero Nemo Fuga Sequi Nobis? Necessitatibus Aut Laborum.
              </p>
              <img src={Photo13} alt="Customer" className="w-16 h-16 rounded-full mx-auto mb-2" />
              <h4 className="text-lg font-semibold">John Doe</h4>
              <div className="flex justify-center text-2xl text-yellow-500  gap-1 mt-1 mb-3"> 
      <RiStarSFill className='float-start' /><RiStarSFill className='float-start' /><RiStarSFill className='float-start'/><RiStarSFill className='float-start'/><MdOutlineStarHalf />
      </div>
            </div>
            <div className="border border-yellow-500 p-6 text-center">
              <div className="text-yellow-500 text-6xl mb-4">"</div>
              <p className="text-gray-300 mb-6">
                Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Animi Nulla Sit Libero Nemo Fuga Sequi Nobis? Necessitatibus Aut Laborum.
              </p>
              <img src={Photo13} alt="Customer" className="w-16 h-16 rounded-full mx-auto mb-2" />
              <h4 className="text-lg font-semibold">John Doe</h4>
              <div className="flex justify-center text-2xl text-yellow-500  gap-1 mt-1 mb-3"> 
      <RiStarSFill className='float-start' /><RiStarSFill className='float-start' /><RiStarSFill className='float-start'/><RiStarSFill className='float-start'/><MdOutlineStarHalf />
      </div>
            </div>
            <div className="border border-yellow-500 p-6 text-center">
              <div className="text-yellow-500 text-6xl mb-4">"</div>
              <p className="text-gray-300 mb-6">
                Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Animi Nulla Sit Libero Nemo Fuga Sequi Nobis? Necessitatibus Aut Laborum.
              </p>
              <img src={Photo13} alt="Customer" className="w-16 h-16 rounded-full mx-auto mb-2" />
              <h4 className="text-lg font-semibold">John Doe</h4>
              <div className="flex justify-center text-2xl text-yellow-500  gap-1 mt-1 mb-3"> 
      <RiStarSFill className='float-start' /><RiStarSFill className='float-start' /><RiStarSFill className='float-start'/><RiStarSFill className='float-start'/><MdOutlineStarHalf />
      </div>
            </div>
        
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-12" id="contact">
        <h2 className="text-4xl font-bold text-center mb-12">
          <span className="text-yellow-500">CONTACT </span>
          <span className="text-white">US</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="h-[400px] bg-gray-800">
            {/* Map placeholder */}
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d120637.94989522123!2d74.66027017683541!3d19.11046628153684!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdcb05d46788921%3A0x6677e92c1a5181b6!2sAhilya%20Nagar%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1737289551063!5m2!1sen!2sin" className="w-full h-full border border-white "    loading="lazy" referrerpolicy="no-referrer-when-downgrade">
            </iframe>
            

    
          </div>
        <div className="space-y-6">
       <form onSubmit={handleSubmit}>
      <input
       className="w-full m-2 p-4 py-3 bg-transparent border border-yellow-500 focus:outline-none"
        id="email"
        type="email" 
        name="email"
        placeholder='Email'
      />
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
       <input
       className="w-full m-2 p-4 bg-transparent border border-yellow-500 focus:outline-none"
        id="number"
        type="tel" 
        name="number"
        placeholder='Number'
      />
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
      <textarea
       className="w-full m-2 p-4 py-3 bg-transparent border border-yellow-500 focus:outline-none"
        id="message"
        name="message"
        type='message'
        placeholder='Message'
      />
      <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
      <button className="w-full bg-yellow-500 text-black m-3 p-2 py-3 font-semibold hover:bg-yellow-600 transition-colors" type="submit" disabled={state.submitting}>
        Submit
      </button>
    </form>
          </div>
        </div>
      </section>


      {/* Footer */}
      <footer className="py-8 px-12 border-t border-yellow-500">
        <div className="flex justify-center gap-4 mb-8">
      <a href="https://wa.me/917709852396"> <FaSquareWhatsapp  className="text-green-500 size-10 cursor-pointer"/></a>
        <a href="https://github.com/mahebob"><FaGithub className="text-red-600 size-10 cursor-pointer"/></a>
      <a href="https://www.linkedin.com/in/maheboob-shaikh-5373b9330?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BqR1EhkVVSxOV1GFpeGpenQ%3D%3D"> <FaLinkedin className="text-blue-600 size-10 cursor-pointer" /></a>
        <a href="https://x.com/shaikh_mah3412"><FaSquareXTwitter className="text-gray-500 size-10 cursor-pointer"/></a>
      
        </div>
       
        <p className="text-center text-gray-300">
          Created By <span className="text-yellow-500">Maheboob Shaikh From India</span> | All Rights Reserved
        </p>
      </footer>
    </div>
  );
};

export default RestaurantLanding;