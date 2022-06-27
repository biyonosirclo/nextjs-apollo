import { useQuery } from '@apollo/client';
import Link from 'next/link'
import Spinner from '@/components/Spinner';
import { GET_CATEGORIES } from './schema';
import Head from 'next/head';
import Error from '@/components/Error';


const Kategori = () => {
    const response = useQuery(GET_CATEGORIES);
    const { loading, error, data } = response;
    if(loading) return <Spinner/>;
    if(error) return <Error message={error.message} />
    console.log(data);

    return (
        <>
            <Head>
                <title>Apollo : Kategori produk</title>
            </Head>
            <div className='container'>
                <h4 className='text-center mb-5'>Kategori Produk</h4>
                <div className="row">
                    {
                        data && data.categories.items.length > 0 ?(
                            data.categories.items.map((item, key) => (
                                <div className="col-6 col-md-3" key={`kat`+key}>
                                    <div className="card mb-3">
                                        <div className="card-body text-center">
                                            <Link href={`/kategori/${item.id}`} >
                                                <a>{item.name}</a>
                                            </Link>
                                        </div>
                                        <div className="card-footer">
                                            <small>
                                                Jumlah Produk : {item.product_count}
                                            </small>
                                            
                                        </div>
                                    </div>
                                </div>
                                
                            ))
                        ):(
                            <Error message="belum ada produk di kategori ini"/>
                        )
                    }
                </div>
            
            </div>
        </>
    )
}

export default Kategori