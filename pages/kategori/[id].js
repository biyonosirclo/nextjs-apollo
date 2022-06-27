import { useRouter } from 'next/router';
import { useQuery } from '@apollo/client';
import { GET_CATEGORIES_BY_ID } from './schema';
import Spinner from '@/components/Spinner';
import Error from '@/components/Error';
import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head';

function KategoriByID() {
    const router = useRouter();
    const id = router.query.id;
    console.log(id);
    const response = useQuery(GET_CATEGORIES_BY_ID,{
        variables:{
            categoryId: id,
        }
    });

    const {loading,error,data} = response;
    if(loading) return <Spinner />;
    if(error) return <Error message={error.message} />

    console.log(data)

  return (

    <>
        <Head>
            <title>Apollo : { data && (data['category']['name'])}</title>
        </Head>
        <div className='container'>
            <h3 className='mb-5'> Kategori Produk '{ data && (data['category']['name'])}'</h3>
            <div className="row">
                {
                    data && data.category.products.items.length > 0 ?(
                        data.category.products.items.map((item,key) => (
                            <div className="col-6 col-md-3" key={key}>
                                <div className="card mb-3">
                                    <Link href={`/produk/${item.sku}`}>
                                        <a><Image src={item.image.url} width={400} height={300} alt={item.name} layout='responsive' />
                                        </a>
                                    </Link>
                                    <div className="card-body">
                                        <Link href={`/produk/${item.sku}`}>
                                            <a><h6 className='card-title text-center' >{item.name}</h6></a>
                                            
                                        </Link>
                                    </div>
                                    <div className="card-footer">
                                        <div className="d-flex justify-content-between">
                                        <small>{item.price_range.minimum_price.regular_price.currency}. {item.price_range.minimum_price.regular_price.value}</small>
                                            <small>Rating. {item.rating_summary}/100</small>
                                        </div>
                                        

                                    </div>
                                </div>
                            </div>
                        ))
                    ):(
                        <Error message='Belum ada produk di kategori ini' />
                    )
                }
            </div>
        </div>
    </>
  )
}

export default KategoriByID