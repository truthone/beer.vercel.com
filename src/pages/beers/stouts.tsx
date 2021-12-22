import { NextPage } from 'next';
import { Beer } from '../../types/Beer';
import { useBeersData } from '../../hooks/useBeersData';

const StoutsBeerPage: NextPage = () => {
    const {data, error} = useBeersData('stouts');

    if(error) return <div>로딩에 실패했어요..</div>
    if(!data) return <div>로딩중...</div>

    return(
        <div>
            <h1>stout beers !</h1>
            <main>
                {data.map((beerData: Beer) => {
                    const {id, price, name} = beerData;
                    return(
                        <div key={`ale-beer-list-${id}`}>
                            <h2>맥주이름: {name}</h2>
                            <p>가격: {price}</p>
                        </div>

                    )
                })}
            </main>
        </div>
    )
}

export default StoutsBeerPage;
