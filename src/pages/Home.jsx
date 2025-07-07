import { useEffect, useState} from 'react';
import { supabase } from '../services/supabaseClient'; 

export  default function Home() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = async () => {
        const { data, error } = await supabase
            .from('products')
            .select('*')
            if (error) {
                console.error('Error fetching products:', error);
            } else {
                setProducts(data);
            }
    };

    return (
        <div className='p-6'>
            <section className='text-center my-8'>
                <h1 className='text-4xl font-bold'>Welcome to Kicka</h1>
                <p className='text-gray-600'>Shop anything, anytime, anywhere.</p>
            </section>

            <section className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
                {products.map(item => (
                    <div key={item.id} 
                    className='card shadow-xl'>

                        <figure>
                        <img src={item.image_url} 
                        alt={item.name} 
                        className='w-full h-48 object-cover mb-4 rounded' />
                        </figure>

                        <div className='card-body'>
                        <h2 className='card-title'>{item.name}</h2>
                        <p className='text-gray-500'>{item.description}</p>

                        <div className='card-actions justify-between mt-2'>
                        <span className='text-lg font-bold text-primary'>KES {item.price}</span>

                        <button className='btn btn-primary'>Add to Cart</button>
                    </div>
                    </div>
                    </div>
                ))}
            </section>
        </div>
    );
};