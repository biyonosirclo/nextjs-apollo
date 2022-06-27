import { gql, useMutation } from '@apollo/client';
import { POST_SUBCRIBE } from '@/services/graphql/schema/schema';
import Succes from './Success';
import Error from './Error';
import Spinner from './Spinner';
function Subcribe() {
    let input;
    const [addSubcribe, { data, loading, error }] = useMutation(POST_SUBCRIBE);

    if(loading) return <Spinner />;
    if(error) return <Error message={error.message} />
    console.log(data);

    return (
        <div>
            <form
                onSubmit={e => {
                    e.preventDefault();
                    addSubcribe({ variables: { email: input.value } });
                    input.value = '';
                }}
            >
                <input
                    ref={email => {
                        input = email;
                    }}
                />
                <button type="submit">Subcribe</button> { loading && (<Spinner />) }
            </form>
            <div className="row">
                <div className="col-12">
                    { error && (<Error message={error.message} />) }
                    { data && data.subscribe.status.response == 'Failed' && (<Error message={data.subscribe.status.message} />) }
                    { data && data.subscribe.status.response == 'Success' && (<Succes message={data.subscribe.status.message} />) }
                </div>
            </div>
        </div>
    )
}

export default Subcribe