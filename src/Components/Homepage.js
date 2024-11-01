import React from 'react'
import { useGlobalContext } from '../context/global'
import Popular from './Popular'
import styled from 'styled-components'
import Upcoming from './Upcoming'
import Airing from './Airing'

function Homepage() {
    const { handleSubmit, 
        search, 
        searchAnime,
        handleChange ,
        getUpcomingAnime,
        getAiringAnime,
        getPopularAnime,
    } = useGlobalContext()

    const [rendered, setRendered] = React.useState('popular')

    const switchComponent = () => {
        switch(rendered){
            case 'popular':
                return <Popular rendered={rendered} />
            case 'airing':
                return <Airing rendered={rendered} />
            case 'upcoming':
                return <Upcoming rendered={rendered} />
            default:
                return <Popular rendered={rendered} />
        }
    }

    return (
        <HomepageStyled>
            <header>
                <div className="logo">
                    <h1>
                        {rendered === 'popular' ? 'Film Anime Paling Popular' : 
                        rendered === 'airing' ? 'Airing Anime' : 'Upcoming Anime'}
                    </h1>
                </div>
            
                <div className="search-container">
                    <div className="filter-btn popular-filter">
                        <button onClick={() => {
                            setRendered('popular')
                        }}>Popular</button> {/* Icon dihapus di sini */}
                    </div>
                    <div className="filter-btn airing-filter">
                        <button onClick={() => {
                            setRendered('airing')
                            getAiringAnime()
                        }}>Airing</button>
                    </div>
                    <div className="filter-btn upcoming-filter">
                        <button onClick={() => {
                            setRendered('upcoming')
                            getUpcomingAnime()
                        }}>Upcoming</button>
                    </div>
                    <form action="" className="search-form" onSubmit={handleSubmit}>
                        <div className="input-control">
                            <input type="text" placeholder="Search Anime" value={search} onChange={handleChange} />
                        </div>
                    </form>
                </div>
            </header>
            {switchComponent()}
        </HomepageStyled >
    )
}


const HomepageStyled = styled.div`
    background: linear-gradient(135deg, #1f1f1f, #4e4e4e);
    font-family: 'Poppins', sans-serif;
    color: #f5f5f5;

    
header {
    padding: 2rem 5rem;
    width: 100%;
    margin: 0 auto;
    display: flex; /* Mengubah header menjadi flex container */
    justify-content: space-between; /* Memberikan ruang antara logo dan kontainer pencarian */
    align-items: center; /* Mengatur elemen secara vertikal di tengah */
    transition: all .4s ease-in-out;

    @media screen and (max-width: 1530px) {
        width: 95%;
    }

    .logo {
        display: flex;
        align-items: center;
        /* Hapus justify-content: center; agar teks berada di kiri */
        margin-bottom: 2rem;

        h1 {
            font-size: 2.5rem;
            color: #e91e63;
            text-shadow: 0px 0px 10px #ff4081;
            /* Tambahkan margin atau padding jika perlu untuk jarak */
        }
    }
       
        .search-container {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 1rem;

            .filter-btn {
                button {
                    display: flex;
                    align-items: center;
                    gap: .5rem;
                    padding: .5rem 1.5rem;
                    outline: none;
                    border-radius: 30px;
                    font-size: 1.2rem;
                    background: linear-gradient(145deg, #ff6e40, #ff4081);
                    color: #fff;
                    cursor: pointer;
                    transition: transform 0.3s ease, background 0.4s ease-in-out;
                    font-family: inherit;
                    border: none;
                    box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.2);

                    &:hover {
                        transform: scale(1.05);
                        background: linear-gradient(145deg, #ff4081, #ff6e40);
                    }
                }
            }

            form {
                position: relative;
                width: 100%;
                max-width: 400px;

                .input-control {
                    position: relative;
                    transition: all .4s ease-in-out;

                    input {
                        width: 100%;
                        padding: .7rem 1rem;
                        border: none;
                        outline: none;
                        border-radius: 30px;
                        font-size: 1.2rem;
                        color: #333;
                        background-color: #fff;
                        border: 2px solid #e91e63;
                        transition: all .4s ease-in-out;
                        box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);

                        &:focus {
                            border: 2px solid #ff4081;
                        }
                    }
                }
            }
        }
    }
`;


export default Homepage