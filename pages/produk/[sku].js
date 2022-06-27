import { useRouter } from 'next/router'
import { useQuery } from '@apollo/client';
import { GET_PRODUCT_BY_SKU } from '../kategori/schema';
import Spinner from '@/components/Spinner';
import Error from '@/components/Error';
import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head';
import Subcribe from '@/components/Subcribe';
function ProdukId() {
    const router = useRouter();
    const sku = router.query.sku;
    console.log(sku);
    const response = useQuery(GET_PRODUCT_BY_SKU,{
        variables:{
            sku: sku,
        }
    });

    const {loading,error,data} = response;
    if(loading) return <Spinner />;
    if(error) return <Error message={error.message} />
    // if(error) return `Error: ${error.message}`;

    console.log(data)
    return (
        <div className='container'>
            <div className="card mb-3">
                <div className="row g-0">
                    <div className="col-md-4">
                        <Image src={data.products.items[0].image.url} width={400} height={300} alt={data.products.items[0].name} />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{data.products.items[0].name}</h5>
                            <h6>{data.products.items[0].price_range.minimum_price.regular_price.currency} {data.products.items[0].price_range.minimum_price.regular_price.value}</h6>
                            <p className="card-text">{data.products.items[0].description.html}</p>
                            <p className="card-text"><small className="text-muted">rating {data.products.items[0].rating_summary}/100</small></p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card">
                <div className="card-header">
                    <h5>SUbcribe</h5>
                </div>
                <div className="card-body">
                    <Subcribe />
                </div>
            </div>
        </div>
    )
}

export default ProdukId
